import {React, useState, useEffect} from "react";
// import {GetCompleteUsersingleUserDetail} from "../Component/GetCompleteUsersingleUserDetail";
import {GetProfileData} from "../Component/GetProfileData";
import {TimeChange} from '../Component/TimeSettings';
const Profile =  () => {
    const [singleUserDetail, setSingleUserDetail] = useState([]);
    const user = GetProfileData();
    const getSingleData = async () => {
        const res = await fetch(`http://localhost:8000/user/${user.username}`);
        const data = await res.json();
        setSingleUserDetail([data]);
        console.log(data);
    };

    useEffect(() => {
        getSingleData();
    }, [1]);


    return (
        <>

            {
                singleUserDetail.map((elem) => {
                    const date = TimeChange(elem.createdDate)
                    return (
                        <>
                            <div class="bg-black-900 overflow-hidden shadow rounded-lg ">
                                <div class="px-4 py-5 sm:px-6">
                                    <h3 class=" text-center -mt-3 mb-2 leading-6 font-bold text-gray-900  text-uppercase  text-lg text-decoration-underline ">
                                        <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 ">User Profile</button>
                                    </h3>
                                </div>
                                <div class="flex flex-row">
                                    <div>
                                        <div class="mt-2 rounded-lg overflow-hidden border-2 ml-10 h-44">
                                            {
                                                elem.gender === "female" ? <img class="object-cover object-center  w-full h-full" src="/image/girl1.jpg" alt="stats" /> :
                                                    <img class="object-cover object-center w-auto h-auto " src="/image/boy1.jpg" alt="stats" />
                                            }
                                        </div>
                                        <div><button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 ">Edit Profile
                                            <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em" className="ml-28 -mt-5">
                                                <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                                            </svg></button></div>
                                    </div>
                                    <div class="border-t border-gray-400 px-4 sm:p-0 w-full -mt-8 -ml-40">
                                        <dl class="sm:divide-y sm:divide-gray-400 border-2 ml-40 mt-10 rounded-lg">
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Username:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.userName}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Fullname:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.fullName}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Email address:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.email}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Instagram URL:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.instagram}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Linkdin URL:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.linkdin}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    GitHub URL:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.github}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Description:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.detail}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Gender:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.gender}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Query Posted:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.TotalQueryPosted}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    License:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {elem.ticket}
                                                </dd>
                                            </div>
                                            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt class="text-sm font-medium text-gray-500">
                                                    Created Date:
                                                </dt>
                                                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {date}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                                <br /><br />
                            </div>
                        </>
                    );
                })
            }


        </>
    );
};

export default Profile;