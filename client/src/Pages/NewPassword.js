import React,{useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const NewPassword = () => {
    const navigator = useNavigate();
    const {token} = useParams();
    const [userDetail,setUserDetail] = useState({
        email:"",pwd:"",cpwd:""
    })
    const handleChange=(e)=>{
        let name= e.target.name;
        let value = e.target.value;
        setUserDetail({...userDetail,[name]:value});
    }
    const ResetPassword = async(e) =>{
        e.preventDefault();
        if(userDetail.pwd!==userDetail.cpwd){
            return window.alert("doesn't match password");
        }
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "email": userDetail.email,
            "pwd":userDetail.pwd,
            "token":token
        });
        let response = await fetch("http://localhost:8000/changePassword", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        if (response.status !== 200) {
           return window.alert(data.Error);
        }
        window.alert("password Set Successfully");
        navigator("/signin");
    }
    return (
        <div>
            <div class="w-full   h-50 bg-gray-50 flex flex-col sm:justify-center items-center pt-3 sm:pt-0">
                <div class="w-full sm:max-w-md p-5 mx-auto">
                    <h2 class="mb-7 text-center text-5xl font-extrabold">Welcome.</h2>
                    <form>
                    <div class="mb-4">
                            <label class="block mb-1" for="email">Email</label>
                            <input value={userDetail.email} onChange={handleChange} type="text"  name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-red-800" />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-1" for="email">New Password</label>
                            <input value={userDetail.pwd} onChange={handleChange}  type="text" name="pwd" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full text-red-800" />
                        </div>
                        <div class="mb-4">
                            <label class="block mb-1" for="password">confirm Password</label>
                            <input value={userDetail.cpwd} onChange={handleChange}  type="cpwd" name="cpwd" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                        </div>
                        
                        <div class="mt-6">
                            <button class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition" onClick={ResetPassword}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewPassword;