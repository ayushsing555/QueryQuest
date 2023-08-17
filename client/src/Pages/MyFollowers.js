import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {GetProfileData} from '../Component/GetProfileData';
let data;
const MyFollower = () => {
    // const [Users, setUsers] = useState([]);
    const [AllUsers, setAllUsers] = useState([]);
  const [search,setSearch] = useState("");
    const getUsers = async () => {
        const res = await fetch("http://localhost:8000/user");
        const data = await res.json();
        // setUsers(data);
    setAllUsers([...data].reverse());
    };
    const user = GetProfileData();
    const singleUser = async() => {
        const res = await fetch(`http://localhost:8000/user/${user.username}`);
        data  = await res.json();
    }
    singleUser();
    useEffect(() => {
        getUsers();
    }, [1]);

    return (
        <>
            <section class="text-gray-600 body-font">
            <div className='flex justify-center'>
              <div className='mt-5 mb-5 font-semibold'>
              <input type='text' value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)} className='border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4 rounded-lg p-2 font-bold focus:border-red-900'/>
              <svg viewBox="0 0 24 24" fill="currentColor" height="30px" className=' ml-48 -mt-9 text-red-900 hover:cursor-pointer'>
              <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            </svg>
            </div>
            </div>
            <hr />
                <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">MY FOLLOWERS</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif">Join the Quest for Answers: Be a Follower Today!!</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            AllUsers.map((elem) => {
                              var upperCase = search.toUpperCase();
                              if(elem.userName.indexOf(search)===0||elem.userName.indexOf(upperCase)===0)
                                 if(data.followedBy.includes(elem.userName))
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

export default MyFollower;