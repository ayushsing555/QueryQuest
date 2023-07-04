import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const EmailValidator = require('email-validator');
const SignUp = () => {
    const navigator = useNavigate();
    const [verified, setVerified] = useState(false);
    const [email, setEmail] = useState(true);
    const [verfiyInput, setVerifyInput] = useState(false);
    const [EnterOtp, SetEnterOtp] = useState();
    const [getOtp, setOtp] = useState();
    const [UserDetail, setUserDetail] = useState({

        userName: "", fullName: "", email: "", InstagramLink: "", LinkdinLink: "",
        Password: "", Gender: "female", "identification": new Date().getTime().toString(), detail: "", GitHubLink: "",
        Image: ""
    });

    const sendOtp = async () => {
        if (UserDetail.email === "") {
            return window.alert("please provied an email");
        }
        if (!EmailValidator.validate(UserDetail.email)) {
            return window.alert("please provide an valid email");
        }
        setEmail(false);
        setVerifyInput(true);
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "Email": UserDetail.email
        });
        let response = await fetch("http://localhost:8000/verify", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const data = await response.json();
        if (response.status !== 200) {
            window.alert("something went wrong");
        }
        if (response.status === 200) {
            setOtp(data.otp);
        }
    };
    const changeEmail = () => {
        setEmail(true);
        setVerifyInput(false);
    };

    const verify = (e) => {
        e.preventDefault();
        console.log(EnterOtp);
        console.log(getOtp);
        if (EnterOtp === getOtp) {
            setVerified(true);
            setVerifyInput(false);
        }
        else {
            window.alert("Invalid Otp");
        }
    };
    const handleChange = (e) => {
        console.log(e.target.name);
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
            "fullName": UserDetail.fullName,
            "userName": UserDetail.userName,
            "email": UserDetail.email,
            "instagram": UserDetail.InstagramLink,
            "linkdin": UserDetail.LinkdinLink,
            "github": UserDetail.GitHubLink,
            "password": UserDetail.Password,
            "identification": UserDetail.identification,
            "detail": UserDetail.detail,
            "gender": UserDetail.Gender
        });

        let response = await fetch("http://localhost:8000/signup", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const data = await response.json();
        console.log(response);
        console.log(data);

        if (response.status !== 200) {
            window.alert(data.error + "ayush");
        }
        if (response.status === 200) {
            window.alert(data.Message);
            navigator("/signin");
        }
        console.log(data);
    };
    return (
        <>
            <section class="vh-90">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 text-black">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-3 pt-5 pt-xl-0 ">
                                <form style={{width: "23rem"}}>
                                    <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px;"}}>New User</h3>
                                    <div class=" mb-3">
                                        <input value={UserDetail.userName} name='userName' onChange={handleChange} type="name" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                        <label class="form-label" for="form2Example18">User Name</label>
                                    </div>
                                    <div class=" mb-3">
                                        <input value={UserDetail.fullName} name='fullName' onChange={handleChange} type="name" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                        <label class="form-label" for="form2Example18">Full Name</label>
                                    </div>


                                    {
                                        verfiyInput ? <>
                                            <b>We have sent a otp to your  <b className='text-xl text-red-900'>{UserDetail.email}</b>  if you want to change email <button className="btn border-red-900 border-2 btn-sm hover:bg-red-900" onClick={changeEmail} >change</button></b>
                                            <div class="mt-2 mb-3">
                                                <input value={EnterOtp} name='otp' onChange={(e) => SetEnterOtp(e.target.value)} type="name" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                                <label class="form-label" for="form2Example18">Enter Otp:</label>
                                            </div>
                                            <button className="btn border-red-900 border-2 btn-lg hover:bg-red-900" onClick={verify}>Verify</button>
                                        </> : ""
                                    }
                                    {
                                        email ? <>
                                            <div class=" mb-3">
                                                <input value={UserDetail.email} name='email' onChange={handleChange} type="email" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                                <label class="form-label" for="form2Example18">Email address</label>
                                            </div>
                                            <button className="btn border-red-900 border-2 btn-lg hover:bg-red-900" onClick={sendOtp} >SendOtp</button>
                                        </> : ""
                                    }
                                    {
                                        verified ? <>
                                            <div class=" mb-3">
                                                <input value={UserDetail.InstagramLink} name='InstagramLink' onChange={handleChange} type="url" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                                <label class="form-label" for="form2Example18">Instagram</label>
                                            </div>


                                            <div class=" mb-3">
                                                <input value={UserDetail.LinkdinLink} name='LinkdinLink' onChange={handleChange} type="url" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                                <label class="form-label" for="form2Example18">Linkdin</label>
                                            </div>
                                            <div class=" mb-3">
                                                <input value={UserDetail.GitHubLink} name='GitHubLink' onChange={handleChange} type="url" id="form2Example18" class="form-control text-red-900 form-control-lg" required />
                                                <label class="form-label" for="form2Example18">GitHub</label>
                                            </div>
                                            <div class=" mb-3">
                                                <input value={UserDetail.Password} name='Password' onChange={handleChange} type="password" id="form2Example28" class="form-control text-red-900 form-control-lg" required />
                                                <label class="form-label" for="form2Example28">Password</label>
                                            </div>
                                            <div class="mb-3">
                                                <label for="name" className='text-gry-500  mr-2'>Gender</label>
                                                <select value={UserDetail.Gender} onChange={handleChange} name="Gender" class=" underline text-red-900" id="gender" required>
                                                    <option value="female">Female</option>
                                                    <option value="male">Male</option>
                                                </select>
                                            </div>
                                            <div class="mb-3">
                                                <textarea className='focused border-2' name='detail' value={UserDetail.detail} onChange={handleChange} placeholder='Tell us About yourself...' col="16" rows={3} required></textarea>
                                            </div>
                                            <button className="btn  border-red-900 border-2 btn-lg hover:bg-red-900" onClick={handleSubmit} >SignUp</button>

                                        </> : ""
                                    }
                                    <div class="pt-1 mb-3">
                                        <p> have an account? <NavLink to="/signin" class="text-red-900">Login here</NavLink></p>
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