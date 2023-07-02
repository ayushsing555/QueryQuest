import React from 'react';
import {NavLink} from 'react-router-dom';

const UserProfile = () => {
    
    return (
        <div class="dropdown">
            <button class="btn text-white rounded-full  bg-red-900 btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <img class="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/image/boy1.jpg" alt="Bordered avatar" />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                    <NavLink className="dropdown-item" to="/profile">profile</NavLink>
                </li>
                <li>
                    <NavLink to='/edit' className="dropdown-item" href="a">Edit </NavLink>
                </li>
                <li>
                    <NavLink to={`/myAnalytic/@ayush`} className="dropdown-item" href="a">MyAnalysis</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default UserProfile;