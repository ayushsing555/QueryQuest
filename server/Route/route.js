const express = require("express");
const router = express.Router();
const Transporter = require('../controllers/TransporterFun');
const {signIn, signUp, user, data, commentLike,TimeAdd, payment, generateOtp, commentUpdate, answerUpdate, deleteCommentLike, CommentDelete, deleteLike, updateLiked, IndividualData, GetAllComment, AnswerDelete, GetUserQuery, CommentAdd, updateQueryNum, AnswerAdd, Home, IndividualUser} = require("../controllers/Path");
const auth = require("../Authentication/auth");
const Query = require("../model/Query");
const User = require("../model/User");
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
router.route("/payment").post(payment);
router.route("/add/time").post(TimeAdd)
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
        const updation = await User.updateOne({_id: req.id},
          {$inc: {CurrentQueryPosted: 1, TotalQueryPosted: 1}});
        return res.status(200).send({message: "Query posted Successfully"});
      }
    } else {
      if (newQuery) {
        await User.updateOne({_id: req.id},
          {$inc: {CurrentQueryPosted: 1, TotalQueryPosted: 1}});
        return res.status(200).send({message: "Query posted successfully"});
      }
    }
  }
  catch (e) {
    console.log(e);
  }
});
router.post("/Answers/comment", async (req, res) => {
  const { AnswerId, comment, QuesId, postedBy, ansPostedBy, ans } = req.body;
  const Question = await Query.findOne({ _id: QuesId });
  const AnswerUser = await User.findOne({ userName: ansPostedBy });
  const newComment = new Comment({
    AnsId: AnswerId,
    comment: comment,
    postedBy: postedBy,
    QuesId: QuesId,
    postedOn: Date.now()
  });
  const newcomment = await newComment.save();
  if (newcomment) {
    res.status(200).send({ message: "Commented" });
    const transporter = Transporter();
    const emailContent = `
    <html>
      <head>
      </head>
      <body>
      <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color:rgb(126, 25, 25);text-align: center; font-size: 24px; margin: 0;font-weight: bold;">New Comment Notification</h2>
      <br>
      <p>Hello,<span style="color:rgb(126, 25, 25);font-weight: bold;"> ${AnswerUser.userName}</span></p>
      <br>
      <p style="margin-left: 20px;">A new comment has been posted on one of your answers. We encourage you to stay engaged and keep the conversation going.</p>
      <p style="margin-top: 10px;">Here are the details of the comment:</p>
      <ul style="margin-top: 10px;">
        <li><strong>Question:</strong> ${Question.Question}</li>
        <li><strong>Answer:</strong><span style="color:rgb(126, 25, 25);font-weight: bold;"> ${ans}</span> </li>
        <li style="color: red;"><strong style='color:blue;'>Answered by:</strong> ${ansPostedBy}</li>
        <li><strong>Comment:</strong><blockquote style="margin-left: 20px; margin-top: 10px; margin-bottom: 20px;"><pre style="background-color: #f1f1f1; border-left: 4px solid #d7d4d4; margin: 0; padding: 10px;">${comment}</pre></blockquote></li>
        <li style="color: red;"><strong style='color:blue;'>Commented by:</strong> ${postedBy}</li>
      </ul>
      <p>Visit our platform to view and respond to the comment.</p>
        <p>Thank you for your continued engagement in our community.</p>
        <br>
      <p>Best regards,<br>The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
  </div>
      </body>
    </html>
  `;
    const mailOptions = {
      from: 'solutionscommunity190@gmail.com',
      to: AnswerUser.email,
      subject: 'New Comment Notification',
      html: emailContent,
    };
    await transporter.sendMail(mailOptions);
  }
  else {
    return res.status(400).send({ message: "Something wrong" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ _id: id });
    const deletes = await User.findByIdAndDelete({ _id: id });
    const answerDelete = await Query.deleteOne({ identification: user.identification });
    if (deletes && answerDelete) {
      res.status(200).send({ message: "Account Successfully deleted" });
      const transporter = Transporter();
      const emailContent = `
    <html>
      <head>
      </head>
      <body>
      <div style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 style="color:rgb(126, 25, 25); text-align: center; margin-bottom: 30px; font-weight: bold; font-size: larger;">Account Deletion Confirmation</h1>
        <p>Dear <span style="color:rgb(126, 25, 25);font-weight: bold;">${user.name},</span></p>
        <br>
        <p style="font-size: 16px; margin-left: 10px;">We want to inform you that your account has been <span style="color: red;">successfully deleted.</span> </p>
        <p style="font-size: 16px;margin-left: 10px;">We appreciate the time you spent with us, and we're sorry to see you go. If you have any feedback or suggestions regarding our services, please feel free to share them with us.</p>
        <p style="font-size: 16px;margin-left: 10px;">If you did not initiate this account deletion, please <span style="color: blue;">contact our support team</span> immediately.</p>
        <p style="font-size: 16px;margin-left: 10px;">Thank you for being a part of our community. We wish you all the best in your future endeavors.</p>
        <p style="font-size: 16px; margin-top: 30px; text-align: center; color: #555;">Best regards,</p>
        <p style="font-size: 16px; margin-top: 5px; text-align: center; color: #555;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
      </div>
      </body>
    </html>
  `;
      const mailOptions = {
        from: 'queryquest750@gmail.com',
        to: user.email,
        subject: 'Account Deletion Message',
        html: emailContent,
      };
      await transporter.sendMail(mailOptions);
    }
  }
  catch (e) {
    console.log(e);
  }
});

module.exports = router;