import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const SingleUser = () => {
    const [singleUserDetail, setSingleUserDetail] = useState([]);
    const {id} = useParams();
    const getSingleData = async () => {
        const res = await fetch(`http://localhost:8000/user/${id}`);
        const data = await res.json();
        setSingleUserDetail([data]);
        console.log(data);
    };

    let userDetail = localStorage.getItem('Details');
    userDetail=JSON.parse(userDetail); 
    // console.log(userDetail.UserName);

    useEffect(() => {
        getSingleData();
    }, [1]);
    return (
        <>
            {
                singleUserDetail.map((elem) => {
                    return (
                        <>
                            <section class="text-gray-600 body-font">
                                <div class="container px-5 py-12 mx-auto flex flex-wrap">
                                    <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                        <div class="w-full sm:p-4 px-4">
                                            <h1 class="title-font font-medium text-xl mb-2 text-gray-900">{elem.userName}</h1>
                                            <div class="leading-relaxed">{elem.detail}</div>
                                            
                                            {
                                                elem.userName != userDetail.UserName ? <button className='bg-blue-500 p-2 mt-5 rounded-lg text-white font-bold hover:bg-blue-700'><span className='-ml-6 p-1'>Follow</span>
                                            <svg className=' ml-16 -mt-5' viewBox="0 0 512 512" fill="currentColor" height="20px">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} d="M256 112v288M400 256H112"/>
                                            </svg></button>
                                            : ``
                                            }
                                            
                                        </div>
                                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                            <h2 class="title-font font-medium text-3xl text-gray-900">{elem.QueryPosted}</h2>
                                            <p class="leading-relaxed">Queries</p>
                                        </div>
                                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                            <h2 class="title-font font-medium text-3xl text-gray-900">1.2</h2>
                                            <p class="leading-relaxed">Subscribes</p>
                                        </div>
                                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                            <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
                                            <p class="leading-relaxed">Downloads</p>
                                        </div>
                                        <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                            <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                                            <p class="leading-relaxed">Products</p>
                                        </div>
                                    </div>
                                    <div class="lg:w-1/1 sm:w-1/3 w-full rounded-lg overflow-hidden mt-2 sm:mt-0">
                                        {

                                            elem.gender === "female" ? <img class="object-cover object-center w-full h-full" src="/image/girl1.jpg" alt="stats" /> :
                                                <img class="object-cover object-center w-auto h-auto" src="/image/boy1.jpg" alt="stats" />
                                        }
                                    </div>
                                </div>
                            </section>
                        </>
                    );
                })
            }
        </>
    );
};

export default SingleUser;