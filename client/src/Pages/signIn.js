import React, {useState} from 'react';
import "../App.css";
import {NavLink, useNavigate} from 'react-router-dom';

const SignIn = () => {
    
    const navigator = useNavigate();
    const [UserDetail, setUserDetail] = useState({
        email: "", password: ""
    });

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUserDetail({...UserDetail, [name]: value});
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
                "id":data.id
            };
            localStorage.setItem("Details", JSON.stringify(LoggedInDetails));
            navigator("/");
        }
    };
    return (
        <>
            <section class="vh-90">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 text-black">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{width: "23rem"}}>
                                    <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>Log in</h3>
                                    <div class=" mb-4">
                                        <input type="email" name='email' value={UserDetail.email} onChange={handleChange} id="form2Example18" class="form-control text-red-900 form-control-lg" />
                                        <label class="form-label" for="form2Example18">Email address</label>
                                    </div>
                                    <div class=" mb-4">
                                        <input name='password' value={UserDetail.password} onChange={handleChange} type="password" id="form2Example28" class="form-control text-red-900 form-control-lg" />
                                        <label class="form-label" for="form2Example28">Password</label>
                                    </div>
                                    <div class="pt-1 mb-4">
                                        <button onClick={handleSubmit} className="btn  border-red-900 border-2 btn-lg hover:bg-red-900 " >Login</button>
                                    </div>
                                    <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                                    <p>Don't have an account? <NavLink to="/signup" class="text-red-900">Register here</NavLink></p>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="\image\solutions-community-logo.png"
                                alt="" class="w-100 vh-95" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;