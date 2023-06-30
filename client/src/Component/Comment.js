import React, {useState} from 'react';
import Prism from './Prism';
import {AiFillDelete} from 'react-icons/ai';
import {FcLike} from 'react-icons/fc';
import {NavLink} from 'react-router-dom';
import { TimeChange } from './TimeSettings';
import UpdateCommentBox from './UpdateCommentBox';
const Comment = ({Comments, AnsID, AnsPostedBy, getAllData, QuesPostedBy, }) => {
    let comm = [...Comments];
    let commentNo = 0;
    const filterComment = comm[0].filter((elem) => {
        return (elem.AnsId === AnsID);
    });
    let userDetail = localStorage.getItem("Details");
    userDetail = JSON.parse(userDetail);
    const CommentDelete = async (_id) => {
        let headersList = {
            "Accept": "*/*"
        };
        let response = await fetch(`http://localhost:8000/comment/delete/${_id}`, {
            method: "DELETE",
            headers: headersList
        });
        const data = await response.json();
        if (response.status === 200) {
            window.alert("Comment Deleted");
            getAllData();
        }
        else {
            window.alert(data.error);
        }
    };

    const likeComment = async (_id) => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        let bodyContent = JSON.stringify({
            name: userDetail.UserName
        });
        let response = await fetch(`http://localhost:8000/comment/like/${_id}`, {
            method: "PUT",
            body: bodyContent,
            headers: headersList
        });
        const data = await response.json();
        if (response.status === 200) {
            window.alert("liked");
            getAllData();
        }
        else {
            window.alert(data.error);
        }
    };

    const dislike = async (_id) => {
        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };

        let bodyContent = JSON.stringify({
            name: userDetail.UserName
        });
        let response = await fetch(`http://localhost:8000/comment/like/delete/${_id}`, {
            method: "PUT",
            body: bodyContent,
            headers: headersList
        });
        const data = await response.json();
        if (response.status === 200) {
            window.alert("Disliked");
            getAllData();
        }
        else {
            window.alert(data.error);
        }
    };
    return (
        <>
            {

                filterComment.map((comment) => {
                    let liked = true;
                    if (comment.likedBy.includes(userDetail.UserName)) {
                        liked = true;
                    }
                    else {
                        liked = false;
                    }
                    
                    return (
                        <>
                            <div className='align-middle border border-1 m-2 shadow-md  p-4 shadow-blue-400'>
                                <h1>
                                    <span className='text-red-900'>Comment{commentNo++}. </span>
                                    <b>
                                        {
                                            comment.comment !== undefined ? <Prism code={comment.comment} /> : ""
                                        }

                                    </b>
                                    <span className=' pl-3 pr-4 text-center'>Published by <NavLink to={`/user/ayush`} className='underline'>{comment.postedBy}</NavLink> </span>
                                    <span className='text-end'>on <NavLink>{TimeChange(comment.postedOn)}</NavLink></span>
                                    {
                                        liked ? <button className='btn text-center m-2 text-white ' onClick={(e) => dislike(comment._id)}><FcLike style={{fontSize: 18}} /></button> :
                                            <button className='btn text-center m-2 text-white bg-red-400 ' onClick={(e) => likeComment(comment._id)}><FcLike style={{fontSize: 18}} /></button>
                                    }
                                    {
                                        (comment.postedBy === userDetail.UserName || (userDetail.UserName === AnsPostedBy) || (userDetail.UserName === QuesPostedBy)) ? <button className='btn text-center m-2 text-white  bg-red-900' onClick={(e) => CommentDelete(comment._id)}  ><AiFillDelete style={{fontSize: 18}} /></button> : ""
                                    }
                                    {
                                        (comment.postedBy === userDetail.UserName)?<UpdateCommentBox commentId = {comment._id} ExistComment={comment.comment} getAllData={getAllData}/>:""
                                    }
                                </h1>
                            </div>
                        </>
                    );
                })
            }

        </>
    );
};

export default Comment;