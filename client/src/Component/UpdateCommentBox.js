
import React, {useState} from 'react';
import {RxUpdate} from 'react-icons/rx';
const UpdateCommentBox = ({commentId,ExistComment,getAllData}) => {
    const [haveAns, setHaveAns] = useState(false);
    const [comment, setComment] = useState(ExistComment);
    // const [ans,setAns] = useState(answer.ans);
    const [CommentStatus, setCommentStatus] = useState("Have An comment about this Query?");
    const checkAvailable = () => {
        setHaveAns(!haveAns);
        if (CommentStatus === "Have An comment about this Query?") {
            setCommentStatus("I don't have comment about this");
        }
        else {
            setCommentStatus("Have An comment about this Query?");
            setComment("");
        }
    };
    const update = async() =>{
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    };
    let bodyContent = JSON.stringify({
       Comment:comment,
       CommentId:commentId,
    });

    let response = await fetch("http://localhost:8000/Answers/Comment/update", {
      method: "PUT",
      body: bodyContent,
      headers: headersList
    });
    const data = await response.json();
    if (response.status !== 200) {
      window.alert(data.error + "ayush");
    }
    if (response.status === 200) {
       window.alert(data.message);
       checkAvailable();
       getAllData();
    }
    console.log(data);
  };

    return (

        <>
            {
                haveAns ? <>
                    <textarea col={35} rows={3} value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Enter your thoughts here' ></textarea>
                    <button className='btn text-center m-2 text-white  bg-red-900'onClick={update} >Update</button>
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={checkAvailable}>Cancel</button>
                </> :
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={checkAvailable}><RxUpdate fontSize={18}/></button>
            }

        </>
    );
};

export default UpdateCommentBox;