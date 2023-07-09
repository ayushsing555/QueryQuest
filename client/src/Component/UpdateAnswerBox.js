import React, {useState} from 'react';
import {RxUpdate} from 'react-icons/rx';
import DialogBox from './DialogBox';
import Modal from 'react-modal';

const UpdateAnswerBox = ({answer,QuesId,getAllData}) => {
    const [haveAns, setHaveAns] = useState(false);
    const [comment, setComment] = useState("");
    const [ansMsg, setAnsMsg] = useState("");
    const [ansDialog, setAnsDialog] = useState(false);
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

    const handleClose = () => {
      setAnsDialog(false);
  };

  const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
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
      setAnsMsg(data.message);
      setAnsDialog(true);
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
            ansDialog && (
                <DialogBox heading={ansMsg} showNotes={false} notes="" btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={handleClose} showDialogBox={true}/>
            )
        }</Modal>
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