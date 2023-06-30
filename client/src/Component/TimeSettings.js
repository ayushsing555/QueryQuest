export function TimeChange(time){
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const date = new Date(time);
    time = date.getHours()+":"+date.getMinutes()+", "+dayNames[date.getDay()]+" "+date.getDate()+" "+mS[date.getMonth()]+" "+ date.getFullYear()
    return time;
}