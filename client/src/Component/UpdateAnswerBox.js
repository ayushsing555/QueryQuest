
import React, {useState} from 'react';
import {RxUpdate} from 'react-icons/rx';
const UpdateAnswerBox = ({answer,QuesId,getAllData}) => {
    const [haveAns, setHaveAns] = useState(false);
    const [comment, setComment] = useState("");
    const [ans,setAns] = useState(answer.ans);
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
       Answer:ans,
       QuesId:QuesId,
       AnsId:answer._id
    });

    let response = await fetch("http://localhost:8000/Answers/update", {
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
                    <textarea col={35} rows={3} value={ans} onChange={(e) => setAns(e.target.value)} placeholder='Enter your thoughts here' ></textarea>
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={update}>Update</button>
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={checkAvailable}>Cancel</button>
                </> :
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={checkAvailable}><RxUpdate fontSize={18}/></button>
            }

        </>
    );
};

export default UpdateAnswerBox;