import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import DialogBox from '../Component/DialogBox';

const NewQuery = () => {
  const navigators = useNavigate();
  const [haveAns, setHaveAns] = useState(false);
  const [QueryStatus, setQueryStatus] = useState("Have An comment about this Query?");
  const [QueryDetail, setQueryDetail] = useState({
    Query: "", QueryAns: ""
  });
  const [showDialog, setShowDialog] = useState(false);

  const UserDetail = localStorage.getItem("Details");
  const UserObjDetail = JSON.parse(UserDetail);
  if (UserDetail === null) {
    setShowDialog(true)
    // window.alert("Please login to post Query");
    // navigators("/signin");
  }
  const checkAvailable = () => {
    setHaveAns(!haveAns);
    if (QueryStatus === "Have An comment about this Query?") {
      setQueryStatus("I don't have comment about this");
    }
    else {
      setQueryStatus("Have An comment about this Query?");
      QueryDetail.QueryAns = "";
    }
  };
  const handleChange = (e) => {
    if(UserDetail==null){
      navigators("/signin");
    }
    let name = e.target.name;
    let value = e.target.value;
    setQueryDetail({...QueryDetail, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    };
    let bodyContent = JSON.stringify({
      "postedBy": UserObjDetail.UserName,
      "Question": QueryDetail.Query,
      "Answer": QueryDetail.QueryAns,
      "token": UserObjDetail.token
    });

    let response = await fetch("http://localhost:8000/new", {
      method: "POST",
      body: bodyContent,
      headers: headersList
    });
    const data = await response.json();
    console.log(response);
    console.log(data);
    if (response.status !== 200) {
      window.alert(data.message);
    }
    else {
       window.alert(data.message);
       await fetch(`http://localhost:8000/updateQueryNumber/${UserObjDetail.UserName}`, {
        method: "PUT",
      });
      navigators("/myQuery");
    }
    console.log(data);
  };
  return (
    <>
    {showDialog && (
            <DialogBox heading="Please login to post Query..." showNotes={false} notes="" btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={navigator("/signin")} showDialogBox={true}/>
      )}
      <div className=' shadow-2xl border-2 border-dotted  border-red-800 m-3'>
        <div class="m-6 p-4">
          <label for="exampleFormControlInput1 " class="form-label text-base">Query</label>
          <input type="email" class="form-control" name='Query' value={QueryDetail.Query} onChange={handleChange} id="exampleFormControlInput1" placeholder="Enter Your Query" />
        </div>
        <button className='btn bg-red-400  ml-12 mb-3' onClick={checkAvailable}>{QueryStatus}</button>
        <hr />
        {
          haveAns ? <div class="m-6 p-4 ">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" name='QueryAns' value={QueryDetail.QueryAns} onChange={handleChange} rows="3"></textarea>
          </div> : ""
        }
        <button className='btn bg-red-400  ml-12 mb-3 mt-3' onClick={handleSubmit} >Post Query</button>
      </div>
    </>
  );
};

export default NewQuery;