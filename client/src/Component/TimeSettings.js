import { GetProfileData } from "./GetProfileData";
export function TimeChange(time){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date(time);
    time = date.getHours()+":"+date.getMinutes()+", "+dayNames[date.getDay()]+" "+date.getDate()+" "+mS[date.getMonth()]+" "+ date.getFullYear()
    return time;
}
export function TimeSaving (time,id){
    const UserDetail = GetProfileData();
    const sendTimes =  async (time,id,userName,_id)=>{
        try{
         let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            QuesId:id,
            time:time,
            userName:userName,
            _id:_id

        });

        let response = await fetch("http://localhost:8000/add/time", {
            method: "post",
            body: bodyContent,
            headers: headersList
        });
        }
        catch(e){
            console.log(e);
        }
         
        
    }
    sendTimes(time,id,UserDetail.username,UserDetail._id);
}