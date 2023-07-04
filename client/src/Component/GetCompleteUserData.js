import { GetProfileData } from "./GetProfileData";

export  function GetCompleteUserData() {
    let userData={
        userName: "", email: "", instagramLink: "", linkdinLink: "",
        password: "", gender: "", identification:"", detail: "", 
        gitHubLink: "", ticket: "", queryPosted:"", createdDate:""
    }
    const fetchData=async()=>{
        const user=GetProfileData();

        const res =  await fetch(`http://localhost:8000/user/${user.username}`);
        const data = await res.json();

        userData.userName=data.userName;
        userData.gender=data.gender;
        userData.email=data.email;
        userData.instagramLink=data.instagram;
        userData.linkdinLink=data.linkdin;
        userData.gitHubLink=data.github;
        userData.detail=data.detail;
        userData.queryPosted=data.QueryPosted;
        userData.createdDate=data.createdDate;
        userData.identification=data.identification;
        userData.password=data.password;
        userData.ticket=data.ticket;
    
    return userData;
    }
    
    userData =  fetchData();
    console.log(userData)
    return userData
    
}