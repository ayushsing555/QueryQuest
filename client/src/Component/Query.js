import React from 'react';
import {NavLink} from 'react-router-dom';
import {TimeChange} from '../Component/TimeSettings';
import {ActiveUser} from './ActiveUser';
import Tooltip from '@mui/material/Tooltip';
const Query = ({elem, ActiveUser, analyticDisplay, dltquery, queryanalysisLink,getData}) => {
    const deleteQuery = async (_id) => {
    let headersList = {
        "Accept": "*/*"
    };
    let response = await fetch(`http://localhost:8000/Query/delete/${_id}`, {
        method: "DELETE",
        headers: headersList
    });
    const data = await response.json();
    if (response.status === 200) {
        getData();
        return window.alert("successfully Query Removed");
    }
    else {
        window.alert("something went wrong");
    }
};
    return (
        <>
            <div class="p-3 hover:bg-red-800  bg-red-900 shadow-lg text-black body-font rounded-lg">
                <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-10 pb-20 m-2 rounded-lg overflow-hidden text-center relative">
                    <h1 class="title-font text-3xl font-bold text-black-900 mb-3 -mt-3">{elem.Question.substring(0, 15) + "..."}</h1>
                    <b className='text-sm'>Query posted By
                        {

                            ActiveUser.includes(elem.postedBy) ? <>
                                <NavLink style={{color: "blue"}} to={`/user/${elem.postedBy}`} >
                                    {" " + elem.postedBy + " "}
                                </NavLink>
                            </> : <>
                                <b className='text-gray-500'>{" " + elem.postedBy + " (deleted)"}</b>
                            </>


                        }
                        On <br /> {TimeChange(elem.postedOn)} </b>
                    <br />
                    <br />

                    <button class="bg-red-900 hover:bg-green-800 text-white text-lg font-bold py-2.5 px-3 rounded"><NavLink to={`/query/${elem._id}`} class="text-white hover:text-white inline-flex items-center">
                        <Tooltip title="See Solutions"><svg viewBox="0 0 24 24" fill="currentColor" height="25px">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M5.455 15L1 18.5V3a1 1 0 011-1h15a1 1 0 011 1v12H5.455zm-.692-2H16V4H3v10.385L4.763 13zM8 17h10.237L20 18.385V8h1a1 1 0 011 1v13.5L17.545 19H9a1 1 0 01-1-1v-1z" />
                        </svg></Tooltip></NavLink>
                    </button>

                    {
                        analyticDisplay === true ? <button class="bg-red-900 hover:bg-green-800 text-white text-lg font-bold py-2.5 px-3 rounded mt-1 ml-2"><NavLink to={`/queryAnalytic/${queryanalysisLink}`} class="text-white hover:text-white inline-flex items-center">
                            <Tooltip title="See Query Analytics"><svg viewBox="0 0 24 24" fill="currentColor" height="25px">
                                <path d="M5 12a1 1 0 00-1 1v8a1 1 0 002 0v-8a1 1 0 00-1-1zm5-10a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zm10 14a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm-5-8a1 1 0 00-1 1v12a1 1 0 002 0V9a1 1 0 00-1-1z" />
                            </svg></Tooltip></NavLink>
                        </button> : ``
                    }


                    {
                        dltquery === true ? <button class="bg-red-900 hover:bg-green-800 text-white text-lg font-bold py-2.5 px-3 rounded mt-1 ml-2" onClick={() => deleteQuery(elem._id)}>
                            <Tooltip title="Delete Query"><svg viewBox="0 0 24 24" fill="currentColor" height="25px">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M17 6h5v2h-2v13a1 1 0 01-1 1H5a1 1 0 01-1-1V8H2V6h5V3a1 1 0 011-1h8a1 1 0 011 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z" />
                            </svg></Tooltip>
                        </button> : ``
                    }



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