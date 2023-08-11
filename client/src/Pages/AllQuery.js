import React, {useEffect, useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Query from '../Component/Query';
import ClipLoader from "react-spinners/ClipLoader";
import {ValidDate} from '../Component/ValidDate';
import { ActiveUser } from '../Component/ActiveUser';
const AllQuery = () => {
  const AllActiveUsers = ActiveUser();
  console.log(AllActiveUsers+"ayush")
  const [AllQuery, setAllQuery] = useState([]);
  const [AllGlobalQuery, setAllGlobalQuery] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [loading, setLoading] = useState(false);
  const [DateStatus, setDateStatus] = useState(false);
  const navigator = useNavigate();
  const getUserDetail = () => {
    const UserDetail = localStorage.getItem("Details");
    if (UserDetail === null) {
      navigator("/signin");
    }
  };
  let userDetail = localStorage.getItem('Details');
    userDetail=JSON.parse(userDetail); 

  getUserDetail();
  const getData = async () => {
    const res = await fetch("http://localhost:8000/data");
    const data = await res.json();
    setAllGlobalQuery([...data].reverse());
    setAllQuery([...data].reverse());
  };
  useEffect(() => {
    getData();
  }, [1]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const dateChange = () => {
    if(DateStatus===true){
      setAllQuery(AllGlobalQuery);
    }
    setDateStatus(!DateStatus);
  };

  const filterData = () => {
    const Fromdate = new Date(startDate);
    const ToDate = new Date(endDate);
    if(Fromdate>ToDate){
      window.alert("Please Enter Date Correctly");
    }
    if(ValidDate(Fromdate)&&ValidDate(ToDate)){
       let FilterData = [...AllGlobalQuery].filter((elem)=>{
         var postedOn = new Date(elem.postedOn);
         if(postedOn>=Fromdate&&postedOn<=ToDate){
           return elem;
         }
       })
      // console.log(AllGlobalQuery)
       setAllQuery(FilterData)
    }
  };
  console.log(AllQuery)

  return (
    <>
      {
        loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader"/> </div>
          : <section class="text-black body-font">
            <div className='flex justify-center'>
              <div className='mt-5 mb-5 font-semibold'>
              
              <input type='text' placeholder='Search' className='border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4 rounded-lg p-2 font-bold focus:border-red-900'/>
              <svg viewBox="0 0 24 24" fill="currentColor" height="30px" className=' ml-48 -mt-9 text-red-900 hover:cursor-pointer'>
              <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            </svg>
              
                <input id="bordered-checkbox-1" onClick={dateChange} type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-red-900 bg-gray-100 border-red-900 rounded focus:ring-red-900 dark:focus:ring-red-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-4 ml-10" />
                <label for="bordered-checkbox-1" class=" ml-1 mt-3 text-sm font-medium dark:text-gray-900">Filter By Date</label>
              </div>
              {
                DateStatus ? <>
                  <div className=' mt-5'>
                    <button onClick={filterData} className='btn bg-red-800 text-white hover:bg-green-800 ml-7 mt-5'>Apply</button>
                  </div>
                </> : ""
              }

            </div>
            {
              DateStatus ? <>
                <div class="flex justify-center mt-1 mb-3">
                  <div className='font-semibold'>
                    From <input value={startDate} class='bg-red-300 p-2 rounded-lg font-bold' onChange={(e) => setStartDate(e.target.value)} type='date' placeholder='Enter first Date'>
                    </input></div>
                  <div className='font-semibold ml-10'>
                    To <input value={endDate} onChange={(e) => setEndDate(e.target.value)} class=' bg-red-300 p-2 rounded-lg font-bold' type='date' placeholder='Enter last Date'>
                    </input></div>
                </div>
              </> : ""
            }
            <hr />
            <div class="container px-5 py-24 mx-auto w-full">
              <div class="flex flex-wrap w-full">
                {AllQuery.length !== null ?
                  AllQuery.map((ele) => {
                    {/* console.log(ele) */}
                    return (
                      <>
                        <div className='flex-col lg:w-1/3'>
                        {
                          userDetail.UserName === ele.postedBy ? <Query elem={ele} ActiveUser = {AllActiveUsers} analyticDisplay={true} dltquery={true} queryanalysisLink={ele._id} getData={getData}/>
                          : <Query elem={ele} ActiveUser = {AllActiveUsers} analyticDisplay={false} dltquery={false} queryanalysisLink={``}/>
                        }
                          
                        </div>
                      </>
                    );
                  })
                  : <div class=" align-self-center hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg w-full">
                    <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-20 m-2 rounded-lg overflow-hidden text-center relative">
                      <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">No Query Posted Yet...</h1>
                    </div>
                  </div>
                }
              </div>
            </div>
          </section>
      }
    </>
  );
};

export default AllQuery;