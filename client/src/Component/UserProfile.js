import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { GetProfileData } from "../Component/GetProfileData";

const UserProfile = () => {

    const Logout = () => {
        localStorage.removeItem("Details");
    };
 
    return (
           <div class="dropdown">
            <button class="btn text-white rounded-full  bg-red-900 btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <img class="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/image/boy1.jpg" alt="Bordered avatar" />
            </button>
            <ul class="dropdown-menu m-2" aria-labelledby="dropdownMenuButton">
                <li>
                 <NavLink  to="/profile" class="dropdown-item" href="a">
                     <button className='btn ml-2'>profile</button>
                 </NavLink>
                 </li>
                <li>
                 <NavLink  to="/profile/edit" class="dropdown-item" href="a">
                     <button className='btn ml-2'>edit profile</button>
                 </NavLink>
                 </li>
                <li>
                 <NavLink  to="/signin" class="dropdown-item" href="a">
                     <button className='btn ml-2' onClick={Logout}>logout</button>
                 </NavLink>
                 </li>
            </ul>
        </div>
    );
};
    

export default UserProfile;
