import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DialogBox from '../Component/DialogBox';
import Modal from 'react-modal';
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

    const [emailDialog, setEmailDialog] = useState(false);
    const [otpDialog, setOtpDialog] = useState(false);
    const handleClose = () => {
        setEmailDialog(false);
        setOtpDialog(false);
    };

    const sendOtp = async () => {
        if (UserDetail.email === "") {
            toggleModal()
            setEmailDialog(true)
            return;
        }
        if (!EmailValidator.validate(UserDetail.email)) {
            toggleModal()
            setEmailDialog(true);
            return;
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
            toggleModal()
            setOtpDialog(true)
        }
    };
    const handleChange = (e) => {
        console.log(e.target.name);
        let name = e.target.name;
        let value = e.target.value;
        setUserDetail({...UserDetail, [name]: value});
    };

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }

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
            navigator("/signin");
        }
    };

    return (
        <>
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {
            emailDialog && (
                <DialogBox heading="Please Enter a valid Email" showNotes={true} notes="Please Enter a valid email address to get OTP..." btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={handleClose} showDialogBox={true}/>
            )
        }
        {
            otpDialog && (
                <DialogBox heading="Invalid OTP" showNotes={true} notes="Please Enter a valid OTP to register..." btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={handleClose} showDialogBox={true}/>
            )
        }</Modal>
            <section class="vh-90 ">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 -mt-10">
                            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-3 pt-5 pt-xl-0 ">
                                <form style={{ width: "25rem" }}>
                                    <h3 class="text-center text-black text-3xl font-bold pt-3 mt-4" style={{ letterSpacing: "1px;" }}>Sign Up</h3>
                                    <p className='text-center text-red-600 font-bold text-sm font-serif mb-3'>Unlock a world of possibilities, sign up and explore!</p>

                                    <div class="mt-4 font-bold mb-4">
                                        <label class="form-label text-black" for="form2Example18">User Name</label>
                                        <input value={UserDetail.userName} name='userName' onChange={handleChange} type="name" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>
                                    <div class="mt-4 font-bold mb-4">
                                        <label class="form-label text-black" for="form2Example18">Full Name</label>
                                        <input value={UserDetail.fullName} name='fullName' onChange={handleChange} type="name" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                    </div>


                                    {
                                        verfiyInput ? <>
                                            <p className='text-md font-semibold mt-2 text-black'>We have sent an OTP to your <b className='text-lg text-red-900'>{UserDetail.email}</b> if you want to change email <button className="btn btn-sm hover:bg-green-800 bg-red-900 text-white font-bold" onClick={changeEmail} >change</button></p>
                                            <div class="mt-4 font-bold mb-4">
                                                <label class="form-label text-black" for="form2Example18">Enter Otp:</label>
                                                <input value={EnterOtp} name='otp' onChange={(e) => SetEnterOtp(e.target.value)} type="name" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                            </div>
                                            <button className="btn btn-lg hover:bg-green-800 focus:bg-green-800 bg-red-900 text-white font-bold" onClick={verify}>Verify</button>
                                        </> : ""
                                    }
                                    {
                                        email ? <>
                                            <div class="mt-4 font-bold mb-4">
                                                <label class="form-label text-black" for="form2Example18">Email address</label>
                                                <input value={UserDetail.email} name='email' onChange={handleChange} type="email" id="form2Example18" class="form-control border-2 border-red-900 hover:border-4 hover:border-red-900 focus:border-4  font-bold focus:border-red-900 form-control-lg" required />
                                            </div>
                                            <button className="btn btn-lg focus:bg-green-800 hover:bg-green-800 bg-red-900 text-white font-bold" onClick={sendOtp} >Send OTP</button>
                                        </> : ""
                                    }
                                    {
                                        verified ? <>
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
                                                <label for="name" className='text-black mr-2'>Gender</label>
                                                <select value={UserDetail.Gender} onChange={handleChange} name="Gender" class="text-red-900 rounded-lg border-2 border-red-900 hover:cursor-pointer" id="gender" required>
                                                    <option value="female">Female</option>
                                                    <option value="male">Male</option>
                                                </select>
                                            </div>
                                            <div class="mt-4 font-bold mb-4">
                                                <textarea className='focused  text-black border-2 border-red-900 rounded-lg hover:border-4 hover:border-red-900 focus:border-4 focus:border-red-900 px-2' name='detail' value={UserDetail.detail} onChange={handleChange} placeholder='Tell us About yourself...' col="16" rows={3} required></textarea>
                                            </div>
                                            <button className="btn btn-lg focus:bg-green-800 hover:bg-green-800 bg-red-900 text-white font-bold" onClick={handleSubmit} >SignUp</button>

                                        </> : ""
                                    }
                                    <div class="mb-3 pt-2">
                                        <p className='text-md font-semibold'>Already have an account? <NavLink to="/signin" className="text-blue-700 hover:underline">Login here</NavLink></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-6 px-0 d-none d-sm-block">
                            <img src="\image\logosignup.png"
                                alt="" class="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignUp;