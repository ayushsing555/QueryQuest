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
      console.log(AllGlobalQuery)
       setAllQuery(FilterData)
    }
  };

  return (
    <>
      {
        loading ? <div className="flex justify-center p-5 mt-10 mb-10 h-full">
          <ClipLoader className='align-self-center' color="hsla(10, 62%, 30%, 0.99)"
            size={150} loading={loading} aria-label="Loading Spinner"
            data-testid="loader"/> </div>
          : <section class="text-black body-font">
            <div className='flex justify-center'>
              <div>
                <input id="bordered-checkbox-1" onClick={dateChange} type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium dark:text-gray-900">Filter By Date</label>
              </div>
              {
                DateStatus ? <>
                  <div className=''>
                    <button onClick={filterData} className='btn bg-red-800 text-white hover:bg-green-800'>Apply</button>
                  </div>
                </> : ""
              }

            </div>
            {
              DateStatus ? <>
                <div class="flex justify-center">
                  <div>
                    From <input value={startDate} class='bg-red-300' onChange={(e) => setStartDate(e.target.value)} type='date' placeholder='Enter first Date'>
                    </input></div>
                  <div>
                    To <input value={endDate} onChange={(e) => setEndDate(e.target.value)} class='ml-2 bg-red-300' type='date' placeholder='Enter last Date'>
                    </input></div>
                </div>
              </> : ""
            }
            <hr />
            <div class="container px-5 py-24 mx-auto w-full">
              <div class="flex flex-wrap w-full">
                {AllQuery.length !== null ?
                  AllQuery.map((ele) => {
                    return (
                      <>
                        <div className='flex-col lg:w-1/3'>
                          <Query elem={ele} ActiveUser = {AllActiveUsers}  />
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