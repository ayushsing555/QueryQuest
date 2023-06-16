const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"});
require("./db/conn");
const routerPath = require("./Route/route");
app.use(express.json());
const cookieparser = require("cookie-parser");
app.use(cookieparser());
const Query = require("./model/Query");
const User = require("./model/User");
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
    console.log(id);
    try {
        const deletes = await User.deleteMany({});
        console.log(deletes);
        res.send(deletes);
    }
    catch (e) {
        console.log(e);
    }
});


app.get("/sort",async(req,res)=>{
    const data = await Query.find().sort({likes:-1});
    res.send(data);
})
app.listen(port,"0.0.0.0", () => {
    console.log("listen Successful");
});