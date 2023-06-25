const express = require("express");
const router = express.Router();
const {signIn, signUp, user, data, IndividualData,CommentDelete, AnswerDelete,GetUserQuery,CommentAdd, updateQueryNum, AnswerAdd, Home, IndividualUser} = require("../controllers/Path");
const auth = require("../Authentication/auth");
const Query = require("../model/Query");
router.route("/signin").post(signIn);
router.route("/").get(Home);
router.route("/signup").post(signUp);
router.route("/user").get(user);
router.route("/data").get(data);
router.route("/updateQueryNumber/:userName").put(updateQueryNum);
router.route("/Ques/answer").post(AnswerAdd);
router.post("/new", auth, async (req, res) => {
    try {
        const {Question, Answer, postedBy} = req.body;
        const identification = req.identification;
        console.log(Answer + " sinh");
        let a = "";
        for (i = 0; i < 5; i++) {
            a += Math.floor((Math.random() * 100));
        }
        if (Question == "") {
            return res.status(400).send({error: "please fill Question"});
        }
        const newQuery = new Query({
            Question, postedBy, identification
        });
        await newQuery.save();
        if (Answer != "") {
            const ExistingQuery = await Query.findOne({_id: newQuery._id});
            const QueryAns = await ExistingQuery.addData(Answer, a, postedBy);
            if (QueryAns && newQuery) {
                return res.status(200).send({message: "Query posted Successfully"});
            }
        } else {
            if (newQuery) {
                return res.status(200).send({message: "Query posted successfully"});
            }
        }
    }
    catch (e) {
        console.log(e);
    }
});
router.put("/Answers/comment", async (req, res) => {
    for(i = 0;i<4;i++){
        a+=Math.floor(Math.random()*100);
    }
    const {QuestionId, AnswerId, Comment, postedBy} = req.body;
    console.log(QuestionId + " " + AnswerId + " " + Comment + ' ' + postedBy);
    const newComment = await Query.updateOne({_id: QuestionId, "answers._id": AnswerId}, {
        $push: {
            "answers.$.comments": {commentId: a, comment: Comment, postedBy: postedBy}
        }
    });
    if(newComment) {
        return res.status(200).send({message:"Commented"})
    }
    else{
        return res.status(300).status({error:"this is server error"})
    }
});

router.route("/data/:_id").get(IndividualData);
router.route("/user/:id").get(IndividualUser);
router.route("/user/Queries/:id").get(GetUserQuery);
router.route("/Query/answer/delete/:QuesId/:AnsId").delete(AnswerDelete);
router.route("/Query/answer/comment/delete/:QuesID/:ansId/:commentId").delete(CommentDelete);
module.exports = router;