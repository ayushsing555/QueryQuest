import React, {useEffect, useState} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {FcLike} from 'react-icons/fc';
import {AiFillDelete} from 'react-icons/ai';
import Prism from '../Component/Prism';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Comment from '../Component/Comment';
import {useNavigate} from 'react-router-dom';
const SingleQuery = () => {
    const {id} = useParams();
    const navigator = useNavigate();
    const [AllQuery, setAllQuery] = useState([]);
    const [ans, setAns] = useState("");
    let userDetail = localStorage.getItem("Details");
    userDetail = JSON.parse(userDetail);
    if (userDetail == null) {
        window.alert("please login first to see Query");
        navigator("/signin");
    }
    let ansNO = 1;
    let commentNo;
    const getAllData = async () => {
        try {
            const res = await fetch(`http://localhost:8000/data/${id}`);
            let data = await res.json();
            var reversedData = [...data.answers].reverse();
            data.answers = reversedData;
            setAllQuery([data]);
        } catch (e) {
            console.log(e);
        }
    };

    const AnswerAdd = async (id) => {
        let headersList = {
            "Accept": "*/*",

            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            Ans: ans,
            identification: id,
            postedBy: userDetail.UserName
        });

        let response = await fetch("http://localhost:8000/Ques/answer", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const data = await response.json();
        if (response.status !== 200) {
            window.alert(data.error + "ayush");
        }
        if (response.status === 200) {
            getAllData();
            window.alert("Answer added");
            setAns("");
        }
        console.log(data);
    };
    useEffect(() => {
        getAllData();
    }, [1]);

    const DeleteAnswer = async(QuesId,AnsId) => {
        let headersList = {
            "Accept": "*/*"
        };
        let bodyContent = JSON.stringify({
            identification: userDetail.id,
        });

        let response = await fetch(`http://localhost:8000/Query/answer/delete/${QuesId}/${AnsId}`, {
            method: "DELETE",
            body: bodyContent,
            headers: headersList
        });
        const data =await response.json();
        if(response.status===200)
          getAllData();
        else{
            window.alert(data.error);
        }
    };
    
    const CommentDelete = async(QuesId,ansId,commentId)=>{
        let headersList = {
            "Accept": "*/*"
        };
        let bodyContent = JSON.stringify({
            identification: userDetail.id,
        });

        let response = await fetch(`http://localhost:8000/Query/answer/comment/delete/${QuesId}/${ansId}/${commentId}`, {
            method: "DELETE",
            body: bodyContent,
            headers: headersList
        });
        const data =await response.json();
        if(response.status===200){
            getAllData();
            window.alert("Comment Deleted");
        }
          
        else{
            window.alert(data.error);
        }
    }

    return (
        <>
            {
                AllQuery.map((elem) => {
                    return (
                        <>
                            <div class="p-3    lg:w-1/1 m-7 hover:bg-red-900  bg-red-300 shadow-lg ">
                                <div class="h-full bg-red-100 bg-opacity-75 px-8 pt-16 pb-24 m-2 rounded-lg overflow-hidden text-center relative">
                                    <b className='text-bold'>Query posted By <NavLink style={{color: "blue"}} to="/Users/:id" >{elem.postedBy}</NavLink> On {} </b>
                                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{elem.Question}</h1>
                                    <textarea rows={10} cols={100} value={ans} onChange={(e) => setAns(e.target.value)} className='bg-blue-200 text-black border border-3 border-spacing-2  block m-auto' placeholder='Enter your solution here...' />
                                    <button className='btn text-center m-2 text-white bg-red-900' onClick={() => AnswerAdd(elem._id)}> Add Answer</button>
                                    <div className='border border-3 rounded-3xl pl-4 pr-4 pb-4 m-3 border-red-900 text-black'>
                                        {
                                            elem.answers.length !== 0 ?
                                                <h1 className='text-lg'>Solutions</h1> : <h1 className='text-lg'>No Solutions</h1>
                                        }
                                        {
                                            elem.answers.map((ans) => {
                                                let Dates = new Date(ans.postedOn);
                                                console.log(Dates);
                                                const Time = Dates.getHours() + ":" + Dates.getMinutes();
                                                commentNo = 1;
                                                return (
                                                    <>

                                                        <div className='border h-auto overflow-y-auto bg-blue-300 border-3 m-3 pt-2 pl-2 pb-4 shadow-2xl shadow-rose-600 text-start'>
                                                            <h1 className=''>
                                                                <span className='text-red-900 '>Ans{ansNO++}. </span>
                                                                <b className='leading-8 '>
                                                                    <Prism code={ans.ans} />
                                                                </b>
                                                                <span className=' pl-3 pr-4 text-center'>Published by <NavLink to={`/user/${ans.postedBy}`} className='underline'>{ans.postedBy}</NavLink> </span>
                                                                <span className='text-end'>on <NavLink>{Time}</NavLink></span>
                                                            </h1>
                                                            {
                                                                ans.comments.map((comment) => {
                                                                    var Dates = new Date(comment.postedOn);
                                                                    const Time = Dates.getHours() + ":" + Dates.getMinutes();
                                                                    return (
                                                                        <>
                                                                            <div className='align-middle border border-1 m-2 shadow-md  p-4 shadow-blue-400'>
                                                                                <h1>
                                                                                    <span className='text-red-900'>Comment{commentNo++}. </span>
                                                                                    <b>
                                                                                        <Prism code={comment.comment} />
                                                                                    </b>
                                                                                    <span className=' pl-3 pr-4 text-center'>Published by <NavLink to={`/user/ayush`} className='underline'>{comment.postedBy}</NavLink> </span>
                                                                                    <span className='text-end'>on <NavLink>{Time}</NavLink></span>
                                                                                    <button className='btn text-center ml-5 pl-2 pr-2 m-2  text-white  bg-red-900'><FcLike style={{fontSize: 18}} /></button>
                                                                                    {
                                                                                        (comment.postedBy === userDetail.UserName || (userDetail.UserName === ans.postedBy) || (userDetail.UserName === elem.postedBy)) ? <button className='btn text-center m-2 text-white  bg-red-900' onClick={(e)=>CommentDelete(elem._id,ans._id,comment._id)}  ><AiFillDelete style={{fontSize: 18}} /></button> : ""
                                                                                    }
                                                                                </h1>
                                                                            </div>
                                                                        </>
                                                                    );
                                                                })
                                                            }
                                                            {
                                                                userDetail !== null ? <Comment AnsId={ans._id} QuestionId={elem._id} postedBy={userDetail.UserName} Token={userDetail.token} getAllData={getAllData} /> : ""
                                                            }

                                                            <button className='btn text-center m-2 text-white  bg-red-900'><FcLike style={{fontSize: 18}} /></button>
                                                            {
                                                                ((ans.postedBy === userDetail.UserName) || (userDetail.UserName === elem.postedBy)) ? <button className='btn text-center m-2 text-white  bg-red-900' onClick={(e) => DeleteAnswer(elem._id,ans._id)}  ><AiFillDelete style={{fontSize: 18}} /></button> : ""
                                                            }

                                                        </div>
                                                    </>
                                                );
                                            })
                                        }
                                    </div>
                                    <div class="text-center mt-2 leading-none flex justify-center  absolute bottom-0 left-0 w-full py-4">
                                        <span class="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>{1}
                                        </span>
                                        <span class="text-white mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-10.24-9.74c-1.46-1.39-1.46-3.65 0-5.04 1.41-1.34 3.67-1.34 5.08 0l1.16 1.1 1.16-1.1c1.41-1.34 3.67-1.34 5.08 0 1.46 1.39 1.46 3.65 0 5.04l-10.24 9.74z" />
                                            </svg>{elem.likes}
                                        </span>
                                        <span class="text-white inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>{elem.answers.length}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            }

        </>
    );
};

export default SingleQuery;