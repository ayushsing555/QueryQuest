import {React, useState, useEffect} from "react";
import {GetProfileData} from "../Component/GetProfileData";
import {ActiveUser} from "../Component/ActiveUser";
const EditProfile = () => {
    const [singleUserDetail, setSingleUserDetail] = useState({});
    const [EditUserDetail, setEditUserDetail] = useState({});
    const ActiveUsers = ActiveUser();
    const [UserDetail, setUserDetail] = useState({
        userName: "",
        instagram: "",
        linkdin: "",
        github: "",
        fullName: "",
        detail: ""
    });
    const getSingleData = async () => {
        const user = GetProfileData();
        const res = await fetch(`http://localhost:8000/user/${user.username}`);
        const data = await res.json();
        setSingleUserDetail(data);
    };

    useEffect(() => {
        getSingleData();
    }, []);

    useEffect(() => {
        setEditUserDetail(singleUserDetail);
    }, [singleUserDetail]);
    useEffect(() => {
        setUserDetail({
            userName: EditUserDetail.userName,
            instagram: EditUserDetail.instagram,
            linkdin: EditUserDetail.linkdin,
            github: EditUserDetail.github,
            fullName: EditUserDetail.fullName,
            detail: EditUserDetail.detail
        });
    }, [EditUserDetail]);

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUserDetail({...UserDetail,[name]:value});
    }

    const handleSubmit = async() =>{
        if(UserDetail.userName.length>9){
            return window.alert("username can't be greater than 9 character")
        }
        if(ActiveUsers.includes(UserDetail.userName)){
            return window.alert("Not Available:")
        }
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            userName: UserDetail.userName,
            instagram: UserDetail.instagram,
            linkdin: UserDetail.linkdin,
            github: UserDetail.github,
            fullName: UserDetail.fullName,
            detail: UserDetail.detail
        });
        let response = await fetch(`http://localhost:8000/${EditUserDetail._id}/update`, {
            method: "put",
            body: bodyContent,
            headers: headersList
        });

        if (response.status !== 200) {
           return window.alert("somwthing went wrong");
        }
        else {
            window.alert("successfully updated");
            let details = localStorage.getItem("Details");
            details = JSON.parse(details);
            details.UserName = UserDetail.userName;
            localStorage.setItem("Details",JSON.stringify(details));
        }
    }



    return (
        <>
            <>
                <div class="bg-black-900 overflow-hidden shadow rounded-lg ">
                    <div class="px-4 py-5 sm:px-6">
                        <h3 class=" text-center -mt-3 mb-2 leading-6 font-weight-bold text-gray-900  text-uppercase font-bold text-lg text-decoration-underline ">
                            <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 ">Edit Profile</button>
                        </h3>
                    </div>
                    <div class="flex flex-row">
                        <div>
                            <div class="mt-2 rounded-lg overflow-hidden border-2 ml-10 h-22">
                                {
                                    UserDetail.gender === "female" ? <img class="object-cover object-center w-full h-full" src="/image/girl1.jpg" alt="stats" /> :
                                        <img class="object-cover object-center " src="/image/boy1.jpg" alt="stats" />
                                }
                            </div>
                            <div><button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-2 py-2">Change Profile photo
                                <svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em" className="ml-44 -mt-5">
                                    <path d="M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9z" />
                                </svg></button></div>
                        </div>

                        <div class="border-t border-gray-400 px-4 sm:p-0 w-full -mt-8 -ml-40">
                            <dl class="sm:divide-y sm:divide-gray-400 border-2 ml-40 mt-10 rounded-lg">
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg text-gray-500 py-2">
                                        Username:
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="userName" className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" value={UserDetail.userName} onChange={handleChange} />
                                                    <p className="text-red-400 mt-1" > !Sug:- first 3 letter of your name+your birthDay(DDMMYY)</p>
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg text-gray-500 py-2">
                                        Fullname:
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="fullName" className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" value={UserDetail.fullName} onChange={handleChange} />
                                    </dd>
                                </div>

                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg text-gray-500 py-2">
                                        Instagram URL:
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="instagram" className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" value={UserDetail.instagram} onChange={handleChange} />
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg text-gray-500 py-2">
                                        Linkdin URL:
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="linkdin" className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" value={UserDetail.linkdin} onChange={handleChange} />
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg text-gray-500 py-2">
                                        GitHub URL:
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="github" className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" value={UserDetail.github} onChange={handleChange} />
                                    </dd>
                                </div>
                                <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt class="text-md font-lg text-gray-500 py-2">
                                        Description:
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="detail" className="border-lg border-2 rounded-md
                                                     px-2 py-1 border-slate-600 w-full" value={UserDetail.detail} onChange={handleChange} />
                                    </dd>
                                </div>
                            </dl>
                            <div class="px-4 py-5 sm:px-6">
                        <h3 class=" text-center -mt-3 mb-2 leading-6 font-weight-bold text-gray-900  text-uppercase font-bold text-lg text-decoration-underline ">
                            <button className="mt-2 ml-10 bg-red-900 text-white rounded-lg px-10 py-2 " onClick={handleSubmit}>Update</button>
                        </h3>
                    </div>
                        </div>
                    
                    </div>
                    <br /><br />
                </div>
            </>
            )



        </>
    );
};

export default EditProfile;