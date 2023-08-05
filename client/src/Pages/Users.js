import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
const Users = () => {
    const [Users, setUsers] = useState([]);
    const getUsers = async () => {
        const res = await fetch("http://localhost:8000/user");
        const data = await res.json();
        setUsers(data);
    };
    useEffect(() => {
        getUsers();
    }, [1]);
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">OUR USERS</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif">Where Questions Find Answers: Meet Our Users</p>
                    </div>
                    <div class="flex flex-wrap -m-4">
                        {
                            Users.map((elem) => {
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