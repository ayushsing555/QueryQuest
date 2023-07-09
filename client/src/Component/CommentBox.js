import React, {useState} from 'react';
import DialogBox from './DialogBox';
import Modal from 'react-modal';

const Comment = ({AnsId,QuestionId,postedBy,Token,getAllData,ansPostedBy,ans}) => {
    const [haveAns, setHaveAns] = useState(false);
    const [comment, setComment] = useState("");
    const [comntMsg, setComntMsg] = useState("");
    const [cmntDialog, setCmntDialog] = useState(false);

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

    const handleClose = () => {
      setCmntDialog(false);
  };

  const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const AddComment = async(e) =>{
       e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    };
    let bodyContent = JSON.stringify({
      "postedBy": postedBy,
      "QuesId":QuestionId,
      "AnswerId": AnsId,
      "token": Token,
      "comment":comment,
      "ansPostedBy":ansPostedBy,
      "ans":ans
    });

    let response = await fetch("http://localhost:8000/Answers/comment", {
      method: "post",
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
      setComntMsg(data.message);
      setCmntDialog(true);
      toggleModal()
      //  window.alert(data.message);
       checkAvailable();
       getAllData();
    }
    console.log(data);
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
            cmntDialog && (
                <DialogBox heading={comntMsg +" Added Successfully"} showNotes={false} notes="" btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={handleClose} showDialogBox={true}/>
            )
        }</Modal>
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