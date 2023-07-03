const express = require("express");
const router = express.Router();
const {signIn, signUp, user, data, commentLike,generateOtp,commentUpdate,answerUpdate,deleteCommentLike,CommentDelete,deleteLike,updateLiked,IndividualData, GetAllComment,AnswerDelete,GetUserQuery,CommentAdd, updateQueryNum, AnswerAdd, Home, IndividualUser} = require("../controllers/Path");
const auth = require("../Authentication/auth");
const Query = require("../model/Query");
const Comment = require("../model/Comment");
router.route("/signin").post(signIn);
router.route("/").get(Home);
router.route("/signup").post(signUp);
router.route("/user").get(user);
router.route("/data").get(data);
router.route("/updateQueryNumber/:userName").put(updateQueryNum);
router.route("/Ques/answer").post(AnswerAdd);
router.route("/data/:_id").get(IndividualData);
router.route("/user/:id").get(IndividualUser);
router.route("/user/Queries/:id").get(GetUserQuery);
router.route("/Query/answer/delete/:QuesId/:AnsId").delete(AnswerDelete);
router.route("/Query/answer/likes/:QuesId/:AnsId").put(updateLiked);
router.route("/Query/answer/likes/delete/:QuesId/:AnsId").put(deleteLike);
router.route("/comment").get(GetAllComment);
router.route("/comment/delete/:id").delete(CommentDelete);
router.route("/comment/like/:id").put(commentLike);
router.route("/comment/like/delete/:id").put(deleteCommentLike);
router.route("/Answers/update").put(answerUpdate);
router.route("/Answers/Comment/update").put(commentUpdate);
router.route("/verify").post(generateOtp);
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
router.post("/Answers/comment", async (req, res) => {
    const { AnswerId, comment,QuesId, postedBy} = req.body;
    console.log(comment)
    const newComment = new Comment({
        AnsId:AnswerId,
        comment:comment,
        postedBy:postedBy,
        QuesId:QuesId,
        postedOn:Date.now()
    })
    const newcomment = await newComment.save();
    if(newcomment){
        return res.status(200).send({message:"Commented"});
    }
    else{
        return res.status(400).send({message:"Something wrong"})
    }
});


module.exports = router;