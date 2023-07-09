import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {GetProfileData} from "../Component/GetProfileData";
import DialogBox from './DialogBox';
import Modal from 'react-modal';

const UserProfile = () => {
    const Navigator = useNavigate();
    const [dltConfrmDialog, setDltConfrmDialog] = useState(false);
    const [deletedDialog, setDeletedDialog] = useState(false);
    const [deleteAcc, setDeleteAcc] = useState(false);
    const handleClose = () => {
      setDltConfrmDialog(false);
      setDeletedDialog(false);
    };

    const Logout = () => {
        localStorage.removeItem("Details");
    };
    
    const ConfirmDeletion= ()=>{
        setDeleteAcc(true);
        handleClose()
        DeleteAcc();
    }
    const DltAccDialogBox= ()=>{
        toggleModal()
        setDltConfrmDialog(true);
    }
    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    const DeleteAcc = async () => { 
        try{
        if (deleteAcc) {
            const user = GetProfileData();

            console.log(user)
            let headersList = {
                "Accept": "*/*"
            };
            let response = await fetch(`http://localhost:8000/delete/${user._id}`, {
                method: "DELETE",
                headers: headersList
            });
            const data = await response.json();
            if (response.status === 200) {
                setDeletedDialog(true)
                
                // window.alert("Account Deleted");
                localStorage.removeItem("Details");
                // Navigator("/signup");
            }
            else {
                window.alert(data.error);
            }
        }
    }catch(e){
        console.log(e);
    }

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
        {dltConfrmDialog && (
            <DialogBox heading="Are you sure you want to delete your account?" showNotes={true} notes="Once Account is Deleted then all your queries, answer and comments will also be deleted automatically." btnData="Yes" cancelBtn={true} cancelBtnData="No" btnFunct={ConfirmDeletion} showDialogBox={true}/>    
      )}
      {deletedDialog && (
            <DialogBox heading="Account Deleted Successfully" showNotes={false} notes="" btnData="OK" cancelBtn={false} cancelBtnData="" btnFunct={Navigator("/signup")} showDialogBox={true}/>
        )}</Modal>
        <div class="dropdown">
            <button class="btn text-white rounded-full  bg-red-900 ring-4 ring-gray-400 dark:ring-gray-300 hover:bg-red-700 focus:bg-red-900 ml-3  dropdown-toggle" type="button" id="dropdownMenuButton"
                data-mdb-toggle="dropdown" aria-expanded="false">
                <img class="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/image/boy1.jpg" alt="Bordered avatar" />
            </button>
            <ul class="dropdown-menu text-center py-2 text-white hover:text-black font-bold bg-red-900" aria-labelledby="dropdownMenuButton">
                <li>
                    <NavLink to="/profile" class="dropdown-item" href="a">
                        <button className='py-2'>Profile</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile/edit" class="dropdown-item" href="a">
                        <button className='py-2'>Edit Profile</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signin" class="dropdown-item" href="a">
                        <button className='py-2' onClick={Logout}>Logout</button>
                    </NavLink>
                </li>
                <li>
                    <NavLink class="dropdown-item" href="a">
                        <button className='py-2 hover:text-red-600' onClick={DltAccDialogBox}>Delete Account</button>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    );
};


export default UserProfile;
