const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;
mongoose.connect(url).then(()=>{
    console.log("successfully connected")
}).catch((err)=>{
    console.log(err)
})