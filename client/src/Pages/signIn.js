import React, { useState } from 'react';
import "../App.css";
import { NavLink, useNavigate } from 'react-router-dom';

const SignIn = () => {

    const navigator = useNavigate();
    const [UserDetail, setUserDetail] = useState({
        email: "", password: ""
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserDetail({ ...UserDetail, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "email": UserDetail.email,
            "password": UserDetail.password
        });
        let response = await fetch("http://localhost:8000/signin", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.json();
        if (response.status !== 200) {
            window.alert(data.error);
        }

        if (response.status === 200) {
            window.alert("successfully logged in");
            const LoggedInDetails = {
                "UserName": data.userName,
                "token": data.token,
                "identification": data.identification,
                "id": data.id
            };
            localStorage.setItem("Details", JSON.stringify(LoggedInDetails));
            navigator("/");
        }
    };
    return (
        <>
            <section class="vh-90  ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 mt-10">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: "23rem" }}>
                                    <h3 class="text-center text-black text-3xl font-bold pt-3 mt-5" style={{ letterSpacing: "1px;" }}>Log in</h3>
                                    <p className='text-center text-red-600 text-sm font-bold font-serif mb-3'>Welcome back, log in and let the journey continue!</p>
                                    <div class="mt-4 font-bold mb-4">
                                        <label class="form-label text-black" for="form2Example18">Email address</label>
                                        <input type="email" name='email' value={UserDetail.email} onChange={handleChange} id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" />
                                    </div>
                                    <div class=" mt-4 font-bold mb-4">
                                        <label class="form-label text-black" for="form2Example28">Password</label>
                                        <input name='password' value={UserDetail.password} onChange={handleChange} type="password" id="form2Example28" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4 font-bold  focus:border-red-900 form-control-lg" />
                                    </div>
                                    <div class="pt-1 mb-2">
                                        <button onClick={handleSubmit} className="btn btn-lg hover:bg-green-800 bg-red-900 text-white font-bold" >Login</button>
                                    </div>
                                    <p class="small mb-3 pb-lg-2"><a class="text-red-600" href="#!">Forgot password?</a></p>
                                    <p className='text-md  font-semibold'>Don't have an account? <NavLink to="/signup" className="text-blue-700 hover:underline">Register here</NavLink></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="\image\logosignup.png"
                                alt="" class="w-100 vh-95" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;