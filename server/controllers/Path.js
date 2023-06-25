const Query = require("../model/Query");
const User = require("../model/User");
const auth = require("../Authentication/auth");
const user = async (req, res) => {
    const allUser = await User.find();
    res.send(allUser);
};

const data = async (req, res) => {
    const data = await Query.find();
    res.send(data);
};

const IndividualData = async (req, res) => {
    try {
        const _id = req.params._id;
        let data = await Query.findOne({_id: _id});
        res.send(data);
    }
    catch (e) {
        console.log(e);
    }

};

const IndividualUser = async (req, res) => {
    const _id = req.params.id;
    const data = await User.findOne({_id: _id});
    res.send(data);
};



const Home = async (req, res) => {
    res.send("it isn Home page");
};

const signIn = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (email == "" || password == "") {
            return res.status(400).send({error: "Please Fill all the field"});
        }
        let isExisting = await User.findOne({email: email});

        if (!isExisting) {
            return res.status(400).send({error: "User not exist please signUp"});
        }
        if (password === isExisting.password) {
            const token = await isExisting.generateToken();
            return res.status(200).send({message: "Successfully logged in", token: token, identification: isExisting._id, userName: isExisting.userName, id: isExisting.identification});
        } else {
            return res.status(400).send({error: "Invalid Credentials"});
        }
    } catch (error) {

    }
};

const GetUserQuery = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await Query.find({identification: id});
    res.send(data);
};


const signUp = async (req, res) => {
    try {
        const {userName, email, instagram, linkdin, github, password, gender, identification, detail} = req.body;
        if (userName == "" || email == "" || instagram == "" || linkdin == "" || github == "" || password == "" || identification == "" || detail == "" || gender == "") {
            return res.status(400).send({error: "Please fill all the field"});
        }
        let isExiting = await User.findOne({email: email});
        if (isExiting) {
            console.log(isExiting);
            return res.status(400).send({error: "Email Already Exist"});
        }
        let isUserNameExisting = await User.findOne({userName: userName});
        if (isUserNameExisting) {
            return res.status(400).send({error: "UserName is already taken"});
        }
        const newUser = new User({
            userName, email, instagram, linkdin, gender, github, password, identification, detail
        });
        const newUserData = await newUser.save();
        return res.status(200).send({"Message": 'Successfully registered'});
    } catch (e) {
        console.log(e + "ayush");
    }
};

const AnswerAdd = async (req, res) => {
    const {identification, Ans, postedBy} = req.body;
    if (Ans == "") {
        return res.status(400).send({error: "Please provide an answer"});
    }
    console.log(identification);
    let a = "";
    for (i = 0; i < 4; i++) {
        a += (Math.floor(Math.random() * 100));
    }
    const ExistingQues = await Query.findOne({_id: identification});
    if (ExistingQues)
        NewAns = await ExistingQues.addData(Ans, a, postedBy);
    if (NewAns) {
        console.log(NewAns);
        return res.status(200).send({message: "AnswerAdded"});
    }

    console.log(identification + "ayush");
};

const updateQueryNum = async (req, res) => {
    const userName = req.params.userName;
    const ExistingUser = await User.findOne({userName: userName});
    const result = await ExistingUser.updateOne({
        QueryPosted: ExistingUser.QueryPosted + 1
    }, {
        new: true
    });
    if (result) {
        return res.status(200).send({message: "Successfully updated"});
    }
};

const AnswerDelete = async (req, res) => {
    console.log("ayush");
    const {identification} = req.body;
    const QuesId = req.params.QuesId;
    const ansId = req.params.AnsId;
    const ans = await Query.findByIdAndUpdate(
        {_id: QuesId},
        {$pull: {answers: {_id: ansId}}} // Specify the object to remove
    );
    if (ans) {
        return res.status(200).send({message: "ans deleted"});
        console.log(ans);
    }
    else {
        console.log("wome t");
    }
};

const CommentDelete = async (req, res) => {
    const QuesID = req.params.QuesID;
    const commentId = req.params.commentId;
    const ansId = req.params.ansId;
    console.log(QuesID + " " + commentId + " " + ansId);
    const update = Query.findByIdAndUpdate(
        {_id: QuesID, 
       " answers._id": ansId}
    ,
    {
        $pull: {
            comments: {
                _id: commentId
            }
        }
    }
);
if (update) {
    return res.status(200);
}

};



module.exports = {user, data, signIn, AnswerDelete, CommentDelete, updateQueryNum, GetUserQuery, AnswerAdd, signUp, IndividualData, Home, IndividualUser};