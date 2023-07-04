export function GetProfileData() {
    let user={
        username:"",
        _id:""

    }
    let userDetail = localStorage.getItem('Details');
    if (userDetail!== null) {
        userDetail=JSON.parse(userDetail);
        user._id= userDetail.identification;
        user.username=userDetail.UserName;
    }
    return user;
}