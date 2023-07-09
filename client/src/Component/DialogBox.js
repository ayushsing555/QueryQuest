import React,{useState} from "react";

const DialogBox = ({heading, showNotes,notes, btnData, cancelBtn,cancelBtnData,btnFunct,showDialogBox}) => {
    const [showDialog, setShowDialog] = useState(showDialogBox);
    
  const handleClose = () => {
    setShowDialog(false);
  };
  console.log(showDialog)
    return (
        <>
        {showDialog ? 
            <div className="fixed inset-0 flex items-center justify-center w-1/2 ml-auto mr-auto">
          <div className="bg-white border-4 border-red-900 p-8 rounded shadow">
            <div className="flex justify-end">
              <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
                    <p className="text-xl font-bold ml-6">{heading}</p>
                    <br />
                    {showNotes=== true ? <p className='font-serif mb-4 mt-4 ml-12'><span className='font-bold text-red-500 -ml-12'>Note: </span>{notes}</p> : ``}

                    <button className='ml-28 btn btn-lg bg-red-900 hover:bg-green-800 hover:font-bold text-white' onClick={btnFunct}>{btnData}</button>
                    {cancelBtn === true ? <button className='ml-24 btn btn-lg btn-info hover:font-bold hover:bg-cyan-700' onClick={handleClose}>{cancelBtnData}</button>: ``}
                    </div>
        </div>
        : ``
        }
            
        </>
    )
}

export default DialogBox;