import {React, useState, useEffect} from 'react';
import {GetProfileData} from "../Component/GetProfileData";

const Contact = () => {
    const [singleUserDetail, setSingleUserDetail] = useState([]);
    const user = GetProfileData();
    const getSingleData = async () => {
        const res = await fetch(`http://localhost:8000/user/${user.username}`);
        const data = await res.json();
        setSingleUserDetail(data);
    };

    useEffect(() => {
        getSingleData();
    }, [1]);

    return (
        <>
            <section class="text-gray-600 body-font  relative">
                <div class="container px-5 py-16 mx-auto">
                <div class="flex flex-col text-center w-full mb-5">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font  text-gray-900">CONTACT US</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-red-800 font-bold font-serif">Questions? We're just a message away!</p>
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-1">
                            <div class="p-2 w-1/2">
                                <div class="relative text-black">
                                    <label for="name" class="leading-7 text-md text-black font-bold">Name</label>
                                    <input type="text" id="name" value={singleUserDetail.fullName} name="name" class="w-full text-sm bg-opacity-50 rounded  border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative text-black">
                                    <label for="email" class="leading-7 text-md font-bold ">Email</label>
                                    <input type="email" id="email" name="email" value={singleUserDetail.email} class="text-sm w-full  bg-opacity-50 rounded  border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4 font-bold focus:border-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-full mt-3">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-md font-bold text-black">Message</label>
                                    <textarea id="message" name="message" class="w-full  bg-opacity-50 rounded  border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-32"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button class="flex ml-60 btn btn-lg hover:bg-green-800 bg-red-900 text-white font-bold">
                                <span className='text-lg'>Send</span> 
                                <svg className='ml-1 mt-1' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" height="20px">
                                <path d="M3 3l3 9-3 9 19-9zM6 12h16" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;