export function GetProfileData() {
    let user={
        username:""

    }
    let userDetail = localStorage.getItem('Details');
    if (userDetail!== null) {
        userDetail=JSON.parse(userDetail);
        user.username=userDetail.UserName;
    }
    return user;
}