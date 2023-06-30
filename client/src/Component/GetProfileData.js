import { json } from "react-router-dom";

export function GetProfileData() {
    let user={
        username:"",
        id:"",

    }
    let userDetail = localStorage.getItem('Details');
    if (userDetail!== null) {
        userDetail=JSON.parse(userDetail);
        user.username=userDetail.UserName;
    }
    return user;
}