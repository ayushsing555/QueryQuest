import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigator = useNavigate();
    const [UserDetail, setUserDetail] = useState({
        userName: "",fullName:"", email: "", InstagramLink: "", LinkdinLink: "",
        Password: "", Gender: "female","identification":new Date().getTime().toString(), detail: "", GitHubLink: ""
    });

    const handleChange = (e) => {
        console.log(e.target.name);
        let name = e.target.name;
        let value = e.target.value;
        setUserDetail({...UserDetail, [name]: value});
    };

    const handleSubmit = async(e) => { 
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        let bodyContent = JSON.stringify({
            "fullName":UserDetail.fullName,
            "userName": UserDetail.userName,
            "email": UserDetail.email,
            "instagram": UserDetail.InstagramLink,
            "linkdin": UserDetail.LinkdinLink,
            "github": UserDetail.GitHubLink,
            "password": UserDetail.Password,
            "identification": UserDetail.identification,
            "detail":UserDetail.detail,
            "gender":UserDetail.Gender
        });

        let response = await fetch("http://localhost:8000/signup", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const data =await response.json();
        console.log(response);
        console.log(data)

        if(response.status!==200){
            window.alert(data.error+"ayush");
        }
        if(response.status===200){
            window.alert(data.Message);
            navigator("/signin");
        }
        console.log(data);
    };
    return (
        <>
            <section class="vh-90 bg-orange-100">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 -mt-10">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-3 pt-5 pt-xl-0 ">
                                <form style={{width: "25rem"}}>
                                    <h3 class="text-center text-black text-3xl font-bold pt-3 mt-4">Sign Up</h3>
                                    <p className='text-center text-red-600 font-bold text-sm font-serif mb-3'>Unlock a world of possibilities, sign up and explore!</p>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black " for="form2Example18">User Name</label>
                                        <input value={UserDetail.userName} name='userName' onChange={handleChange} type="name" id="form2Example18" class="form-control  border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example18">Full Name</label>
                                        <input value={UserDetail.fullName} name='fullName' onChange={handleChange} type="name" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example18">Email address</label>
                                        <input value={UserDetail.email} name='email' onChange={handleChange} type="email" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example18">Instagram</label>
                                        <input value={UserDetail.InstagramLink} name='InstagramLink' onChange={handleChange} type="url" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>

                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example18">Linkdin</label>
                                        <input value={UserDetail.LinkdinLink} name='LinkdinLink' onChange={handleChange} type="url" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example18">GitHub</label>
                                        <input value={UserDetail.GitHubLink} name='GitHubLink' onChange={handleChange} type="url" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example28">Password</label>
                                        <input value={UserDetail.Password} name='Password' onChange={handleChange} type="password" id="form2Example28" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                    <label class="form-label text-black" for="form2Example28">Confirm Password</label>
                                        <input value={UserDetail.Password} name='Password' onChange={handleChange} type="password" id="form2Example28" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                        <label for="name" className='text-black mr-2'>Gender</label>
                                        <select value={UserDetail.Gender} onChange={handleChange} name="Gender" class=" text-red-900 rounded-lg border-2 border-red-900 hover:cursor-pointer" id="gender" required>
                                            <option value="female">Female</option>
                                            <option value="male">Male</option>
                                        </select>
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                        <textarea className='focused  text-black border-2 border-red-900 rounded-lg hover:border-4 hover:border-red-900 focus:border-4 focus:border-red-900 px-2' name='detail' value={UserDetail.detail} onChange={handleChange} placeholder='Tell us About yourself...' col="16" rows={3} required></textarea>
                                    </div>
                                    <div class="flex items-start ">
                                        <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label for="remember" class="ml-2 text-sm text-black font-bold">Remember me</label>
                                    </div>
                                    <div class="mb-3 pt-2" >
                                        <button className="btn btn-lg hover:bg-green-800 bg-red-900 text-white font-bold" onClick={handleSubmit} >SignUp</button>
                                        <p className='text-md font-semibold mt-2'>Already have an account? <NavLink to="/signin" className="text-blue-700 hover:underline"> Login here</NavLink></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="\image\solutions-community-logo.png"
                                alt="" class="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;