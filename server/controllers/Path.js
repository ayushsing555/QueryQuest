const Query = require("../model/Query");
const User = require("../model/User");
const user = async (req, res) => {
    const allUser = await User.find();
    res.send(allUser);
};

const data = async (req, res) => {
    const data = await Query.find();
    res.send(data);
};

const IndividualData = async (req, res) => {
    const _id = req.params.id;
    const data = await Query.find({_id: _id});
    res.send(data);
};

const IndividualUser = async(req,res) =>{
    const _id = req.params.id;
    const data  = await User.findOne({_id:_id});
    res.send(data);
}

const NewQuery = async (req, res) => {
    const entry = new Query(req.body);
    await entry.save();
    res.send(entry);
};

const Home = async (req, res) => {
    res.send("it isn Home page");
};

const signIn = async (req, res) => {
    try {
        const {email,password} = req.body;

        if(email==""||password==""){
            return res.status(400).send({error:"Please Fill all the field"});
        }
        let isExisting = await User.findOne({email:email});

        if(!isExisting){
            return res.status(400).send({error:"User not exist please signUp"});
        }
        if(password===isExisting.password){
                const token = await  isExisting.generateToken();
               return res.status(200).send({message:"Successfully logged in",token:token,userName:isExisting.userName});
        }else{
            return res.status(400).send({error:"Invalid Credentials"});
        }
    } catch (error) {
        
    }
};


const signUp = async (req, res) => {
    try {
        const {userName, email, instagram, linkdin, github, password,gender, identification, detail} = req.body;
        if (userName == "" || email == "" || instagram == "" || linkdin == "" || github == "" || password == "" || identification == "" || detail == ""||gender=="") {
            return res.status(400).send({error: "Please fill all the field"});
        }
        let isExiting = await User.findOne({email: email});
        if (isExiting) {
            console.log(isExiting);
            return res.status(400).send({error: "Email Already Exist"});
        }
        let isUserNameExisting = await User.findOne({userName:userName});
        if(isUserNameExisting){
            return res.status(400).send({error:"UserName is already taken"})
        }
        const newUser = new User({
            userName, email, instagram, linkdin,gender, github, password, identification, detail
        });
        const newUserData = await newUser.save();
        return res.status(200).send({"Message": 'Successfully registered'});
    } catch (e) {
        console.log(e+"ayush");
    }
};
module.exports = {user, data, signIn, signUp, IndividualData, NewQuery, Home,IndividualUser};