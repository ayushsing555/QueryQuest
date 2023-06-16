import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {FcLike} from 'react-icons/fc';
import {AiFillDelete} from 'react-icons/ai';
const SingleQuery = () => {
    const [AllQuery, setAllQuery] = useState([]);
    let data = [];
    let ansNO = 1;
    let commentNo;
    // SetPublisherName();
    // const date = new Date();
    // let right = date.getDate() + "-" + (eval(date.getMonth() + 1)) + "-" + date.getFullYear() + "  " + "At  " + date.getHours() + ":" + date.getMinutes();
    const getAllData = async () => {
        try {
            const res = await fetch("http://localhost:3000/data/6486a768fa46ea29b5242c5b");
            data = await res.json();
            setAllQuery(data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getAllData();
    }, 1);
    return (
        <>
            {
                AllQuery.map((elem) => {
                    return (
                        <>

                            <div class="p-3    lg:w-1/1 m-7 hover:bg-red-900  bg-red-300 shadow-lg ">
                                <div class="h-full bg-red-200 bg-opacity-75 px-8 pt-16 pb-24 m-2 rounded-lg overflow-hidden text-center relative">
                                    <b className='text-bold'>Query posted By <NavLink style={{color: "blue"}} to="/Users/:id" >{elem.postedBy}</NavLink> On {} </b>

                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{elem.Question}</h1>
                                    <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoatacha leggings jianbing microdosing tousled waistcoatvacha leggings jianbing microdosing tousled waistcoat.</p>

                                    <textarea rows={10} cols={100} className='bg-blue-200 text-black border border-3 border-spacing-2 ' placeholder='Enter your solution here...' ></textarea>
                                    <div className='border border-3 rounded-3xl pl-4 pr-4 pb-4 m-3 border-red-900 text-black'>
                                        <h1 className='text-lg'>Solutions</h1>
                                        {
                                            elem.answers.map((ans) => {
                                                commentNo = 1;
                                                return (
                                                    <>
                                                        <div className='border border-3 m-3 pt-2 pl-2 pb-4 shadow-2xl shadow-rose-600 text-start'>
                                                            <h1>
                                                                <span className='text-red-900'>Ans{ansNO++}. </span>
                                                                {ans.ans}</h1>
                                                            {
                                                                ans.comments.map((comment) => {
                                                                    return (
                                                                        <>
                                                                            <div className='align-middle border border-1 m-2 shadow-md  p-4 shadow-blue-400'>
                                                                                <h1>
                                                                                    <span className='text-red-900'>Comment{commentNo++}. </span>
                                                                                    <b>
                                                                                        {comment.comment}
                                                                                    </b>
                                                                                    <span className=' pl-3 pr-4 text-center'>Published by <NavLink to={`/user/ayush`} className='underline'>{comment.postedBy}</NavLink> </span>
                                                                                    <span className='text-end'>on <NavLink>{comment.postedOn}</NavLink></span>
                                                                                    <button className='btn text-center ml-5 pl-2 pr-2 m-2  text-white  bg-red-900'><FcLike style={{fontSize: 18}} /></button>
                                                                                    <button className='btn text-center m-2 text-white  bg-red-900'><AiFillDelete style={{fontSize: 18}} /></button>

                                                                                </h1>
                                                                            </div>
                                                                        </>
                                                                    );
                                                                })
                                                            }
                                                            <button className='btn text-center m-2 text-white bg-red-900'> Add commment</button>
                                                            <button className='btn text-center m-2 text-white  bg-red-900'><FcLike style={{fontSize: 18}} /></button>
                                                            <button className='btn text-center m-2 text-white  bg-red-900'><AiFillDelete style={{fontSize: 18}} /></button>
                                                        </div>
                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                    <div class="text-center mt-2 leading-none flex justify-center  absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>{1}
                                        </span>
                                        <span class="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-10.24-9.74c-1.46-1.39-1.46-3.65 0-5.04 1.41-1.34 3.67-1.34 5.08 0l1.16 1.1 1.16-1.1c1.41-1.34 3.67-1.34 5.08 0 1.46 1.39 1.46 3.65 0 5.04l-10.24 9.74z" />
                                            </svg>{elem.likes}
                                        </span>
                                        <span class="text-white inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>{elem.answers.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            }

        </>
    );
};

export default SingleQuery;