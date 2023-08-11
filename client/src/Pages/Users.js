import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {ValidDate} from '../Component/ValidDate';

const Users = () => {
    // const [Users, setUsers] = useState([]);
    const [AllUsers, setAllUsers] = useState([]);
    const [AllGlobalQuery, setAllGlobalQuery] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [DateStatus, setDateStatus] = useState(false);
    const getUsers = async () => {
        const res = await fetch("http://localhost:8000/user");
        const data = await res.json();
        // setUsers(data);
        setAllGlobalQuery([...data].reverse());
    setAllUsers([...data].reverse());
    };
    useEffect(() => {
        getUsers();
    }, [1]);

    const dateChange = () => {
        if(DateStatus===true){
          setAllUsers(AllGlobalQuery);
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
           setAllUsers(FilterData)
        }
      };
      console.log(AllUsers)
    return (
        <>
            <section class="text-gray-600 body-font">
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
                <div class="flex justify-center mt-1 mb-3 text-black">
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
                <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">OUR USERS</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif">Where Questions Find Answers: Meet Our Users</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            AllUsers.map((elem) => {
                                console.log(elem.instagram);
                                return (
                                    <>
                                        <div class="p-4 lg:w-1/4 md:w-1/2 shadow-lg shadow-red-900  drop-shadow-xl ">
                                            <div class="h-full flex flex-col items-center text-center">
                                                {
                                                    elem.gender === "female" ? <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/image/girl1.jpg" /> :
                                                        <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/image/boy1.jpg" />
                                                }
                                                <div class="w-full">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{elem.userName}</h2>
                                                    <h3 class="text-gray-500 mb-3">User</h3>
                                                    <p class="mb-4">{elem.detail.substring(0, 25)}...</p>
                                                    <span class="inline-flex">
                                                        <a href={elem.instagram} class="text-gray-500">
                                                            <BsInstagram className='text-red-900 hover:text-violet-950' fontSize={25} />
                                                        </a>
                                                        <a href={elem.linkdin} class="ml-2 text-gray-500">
                                                            <BsLinkedin className='text-red-900 hover:text-violet-950' fontSize={25} />
                                                        </a>
                                                        <a href={elem.github} class="ml-2 text-gray-500">
                                                            <BsGithub className='text-red-900 hover:text-violet-950' fontSize={25} />
                                                        </a>
                                                    </span>
                                                    <NavLink to={`/user/${elem.userName}`}>
                                                        <button className='btn btn-info ml-2 bg-red-900'>
                                                            Visit
                                                        </button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Users;