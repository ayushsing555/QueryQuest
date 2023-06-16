import React, {useState} from 'react';

const NewQuery = () => {
  const [haveAns, setHaveAns] = useState(false);
  const [QueyStatus,setQueryStatus] = useState("Have An comment about this Query?")
  const checkAvailable = () => {
    setHaveAns(!haveAns);
    if(QueyStatus==="Have An comment about this Query?"){
      setQueryStatus("I don't have comment about this")
    }
    else{
      setQueryStatus("Have An comment about this Query?")
    }
  };
  return (
    <>
      <div className=' shadow-2xl border-2 border-dotted  border-red-800 m-3'>
        <div class="m-6 p-4">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <button className='btn bg-red-400  ml-12 mb-3' onClick={checkAvailable}>{QueyStatus}</button>
        <hr />
        {
          haveAns ? <div class="m-6 p-4 ">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div> : ""
        }

        <button className='btn bg-red-400  ml-12 mb-3 mt-3' >Post Query</button>

      </div>

    </>
  );
};

export default NewQuery;