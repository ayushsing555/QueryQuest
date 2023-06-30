import React from "react";

const Profile=()=>{

        return(
            <>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <div class="flex flex-col items-center ">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">UserName:</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Email Address: </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Instagram Profile URL: </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">GitHub Profile URL: </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">LinkedIn Profile URL: </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Gender: </span>
                    </div>
                </div>
            </>
        )
}

export default Profile;