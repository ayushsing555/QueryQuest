import React from 'react';
import {NavLink} from 'react-router-dom';
import {TimeChange} from '../Component/TimeSettings';
import {ActiveUser} from './ActiveUser';
const Query = ({elem, ActiveUser}) => {
    return (
        <>
            <div class="p-3 hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg">
                <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-20 m-2 rounded-lg overflow-hidden text-center relative">
                    <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">{elem.Question.substring(0,15)+"..."}</h1>
                    <b className='text-sm'>Query posted By 
                        {

                            ActiveUser.includes(elem.postedBy) ? <>
                                <NavLink style={{color: "blue"}} to={`/user/${elem.postedBy}`} >
                                  {" "+elem.postedBy+" "}
                                </NavLink>
                            </> : <>
                                <b>{" "+elem.postedBy+" (deleted)"}</b>
                            </>


                        }
                        On <br /> {TimeChange(elem.postedOn)} </b>
                    <br />
                    <br />
                    <NavLink to={`/query/${elem._id}`} class="text-indigo-500 inline-flex items-center">
                        <button class="bg-red-900 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Solutions
                            <svg class="w-4 h-4 ml-6" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </NavLink>
                    <div class="text-black text-center mt-2 leading-none flex justify-center  absolute bottom-0 left-0 w-full py-4 font-bold">
                        <span class=" mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span class=" mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M12 21.35l-10.24-9.74c-1.46-1.39-1.46-3.65 0-5.04 1.41-1.34 3.67-1.34 5.08 0l1.16 1.1 1.16-1.1c1.41-1.34 3.67-1.34 5.08 0 1.46 1.39 1.46 3.65 0 5.04l-10.24 9.74z" />
                            </svg>{elem.likes}
                        </span>
                        <span class="inline-flex items-center leading-none text-sm">
                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>{elem.answers.length}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Query;