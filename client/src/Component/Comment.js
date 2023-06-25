import React, {useState} from 'react';

const Comment = ({AnsId,QuestionId,postedBy,Token,getAllData}) => {
    console.log(postedBy);
    console.log(Token)
    const [haveAns, setHaveAns] = useState(false);
    const [comment, setComment] = useState("");
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
    const AddComment = async(e) =>{
       e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    };
    let bodyContent = JSON.stringify({
      "postedBy": postedBy,
      "QuestionId": QuestionId,
      "AnswerId": AnsId,
      "token": Token,
      "Comment":comment
    });

    let response = await fetch("http://localhost:8000/Answers/comment", {
      method: "put",
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
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={AddComment}>Add</button>
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={checkAvailable}>Cancel</button>
                </> :
                    <button className='btn text-center m-2 text-white  bg-red-900' onClick={checkAvailable}>Add Comment</button>
            }

        </>
    );
};

export default Comment;