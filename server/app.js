const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cookieparser = require("cookie-parser");
app.use(cookieparser());
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
require("./db/conn");
const routerPath = require("./Route/route");
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

const Query = require("./model/Query");
const User = require("./model/User");
const Comment = require("./model/Comment")
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))



app.use("/",routerPath);
app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
   
    try {
        const deletes = await User.deleteMany({});
        console.log(deletes);
        res.send(deletes);
    }
    catch (e) {
        console.log(e);
    }
});

app.delete("/delete/Ques/:id",async(req,res)=>{
    const deletes = await Query.deleteMany({});
    res.send(deletes);
})


app.get("/sort",async(req,res)=>{
    const data = await Query.find().sort({likes:-1});
    res.send(data);
})
app.listen(port,"0.0.0.0", () => {
    console.log("listen Successful");
});