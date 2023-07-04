const Query = require('../model/Query');
const User = require('../model/User');
const auth = require('../Authentication/auth');
const comment = require('../model/Comment');
const nodemailer = require('nodemailer');
const Transporter = require('./TransporterFun');
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
    } catch (e) {
        console.log(e);
    }
};

const GetAllComment = async (req, res) => {
    try {
        const data = await comment.find();
        res.send(data);
    } catch (e) {
        console.log(e);
    }
};

const IndividualUser = async (req, res) => {
    const _id = req.params.id;
    const data = await User.findOne({userName: _id});
    res.send(data);
};

const Home = async (req, res) => {
    res.send('it isn Home page');
};

const signIn = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (email == '' || password == '') {
            return res.status(400).send({error: 'Please Fill all the field'});
        }
        let isExisting = await User.findOne({email: email});

        if (!isExisting) {
            return res.status(400).send({error: 'User not exist please signUp'});
        }
        if (password === isExisting.password) {
            const token = await isExisting.generateToken();
            return res
                .status(200)
                .send({
                    message: 'Successfully logged in',
                    token: token,
                    identification: isExisting._id,
                    userName: isExisting.userName,
                    id: isExisting.identification,
                });
        } else {
            return res.status(400).send({error: 'Invalid Credentials'});
        }
    } catch (error) {}
};

const GetUserQuery = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await Query.find({identification: id});
    res.send(data);
};

const signUp = async (req, res) => {
    try {
        const {
            userName,
            email,
            fullName,
            instagram,
            linkdin,
            github,
            password,
            gender,
            identification,
            detail,
        } = req.body;
        if (
            userName == '' ||
            email == '' ||
            instagram == '' ||
            linkdin == '' ||
            github == '' ||
            password == '' ||
            fullName == '' ||
            identification == '' ||
            detail == '' ||
            gender == ''
        ) {
            return res.status(400).send({error: 'Please fill all the field'});
        }
        let isExiting = await User.findOne({email: email});
        if (isExiting) {
            console.log(isExiting);
            return res.status(400).send({error: 'Email Already Exist'});
        }
        let isUserNameExisting = await User.findOne({userName: userName});
        if (isUserNameExisting) {
            return res.status(400).send({error: 'UserName is already taken'});
        }
        const newUser = new User({
            userName,
            fullName,
            email,
            instagram,
            linkdin,
            gender,
            github,
            password,
            identification,
            detail,
        });
        const newUserData = await newUser.save();
        res.status(200).send({Message: 'Successfully registered'});
        if (newUserData) {
            const transporter = Transporter();
            const emailContent = `
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h1 class="heading" style="color: #333; text-align: center; margin-bottom: 30px;">Welcome to Community Solutions!</h1>
        <p style="font-size: 18px;">Dear ${userName},</p>
        <p style="font-size: 16px;">We are delighted to welcome you to <strong style="color:red;">Community Solutions</strong>! This email is to confirm that your account has been successfully created.</p>
        <h2 style="color: #333; margin-top: 30px;">Account Details:</h2>
        <ul style="list-style-type: none; padding-left: 0;">
          <li style="font-size: 16px; margin-bottom: 10px;"><strong>Username:</strong> ${userName}</li>
          <li style="font-size: 16px; margin-bottom: 10px;"><strong>Email address:</strong> ${email}</li>
          <li style="font-size: 16px; margin-bottom: 10px;"><strong>Password:</strong>${password}</li>
        </ul>
        <p style="font-size: 16px;">Your account grants you access to a wide range of features and services, designed to enhance your <strong style="color:red;">Community Solutions</strong> experience.</p>
        <p style="font-size: 16px;">To get started, we recommend logging in to your account and exploring the various sections. If you have any questions or need assistance, our support team is here to help.</p>
        <p style="font-size: 16px;">Thank you for choosing <a href="http://localhost:3001/"><strong style="color:red;">Community Solutions</strong></a> . We look forward to serving you!</p>
        <p  style="font-size: 16px; margin-top: 30px; text-align: center; color: #555;">Best regards,</p>
        <p  style="font-size: 16px; margin-top: 5px; text-align: center; color: #555;">Asifa Khan<br>Community Solutions</p>
</div>
  `;
            const mailOptions = {
                from: 'solutionscommunity190@gmail.com',
                to: email,
                subject: 'Account Created',
                html: emailContent,
            };
            await transporter.sendMail(mailOptions);
        }

        if (newUserData) {
            const transporter = Transporter();
            const emailContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
          }

          h1 {
            color: #007bff;
          }

          p {
            margin-bottom: 16px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Our Platform!</h1>
        <p>Congratulations on creating your new account!</p>
        <p>As a new user, we are pleased to offer you a free license for our platform. With this license, you can explore and utilize essential features for your email communication needs.</p>
        <p>If you find our platform beneficial and wish to unlock more advanced features, we encourage you to check out our range of premium licenses. These licenses provide access to additional powerful features such as advanced analytics, personalized templates, and priority support.</p>
        <p>Visit our website to learn more about our license options and find the perfect fit for your requirements.</p>
        <p>We're excited to have you on board and look forward to assisting you with your email communication goals!</p>
        <p>Best regards,</p>
        <p>Your Team</p>
      </body>
    </html>
  `;
            const mailOptions = {
                from: 'solutionscommunity190@gmail.com',
                to: email,
                subject: 'Welcome to Our Platform!',
                html: emailContent,
            };
            await transporter.sendMail(mailOptions);
        }
    } catch (e) {
        console.log(e + 'ayush');
    }
};

const AnswerAdd = async (req, res) => {
    const {identification, Ans, postedBy} = req.body;
    if (Ans == '') {
        return res.status(400).send({error: 'Please provide an answer'});
    }
    console.log(identification);
    let a = '';
    for (i = 0; i < 4; i++) {
        a += Math.floor(Math.random() * 100);
    }
    const ExistingQues = await Query.findOne({_id: identification});
    const user = await User.findOne({
        identification: ExistingQues.identification,
    });
    let email = user.email;
    if (ExistingQues) {
        NewAns = await ExistingQues.addData(Ans, a, postedBy);
        res.status(200).send({message: 'AnswerAdded'});
    }

    if (NewAns) {
        const transporter = Transporter();
        const emailContent = `
    <h2 style="color: red; font-size: 24px; margin: 0;">New Answer Notification</h2>
    <p style='color:blue'>Hello,${user.userName}</p>
    <p>A new answer has been posted on your question: <strong> ${ExistingQues.Question}</strong></p>
    <p style='color:blue'>Answer By <a href='http://localhost:3001/user/${postedBy}'><strong>${postedBy}</strong></a> </p>
    <p>Here is the content of the answer:</p>
    <blockquote><pre style="background-color: #f9f9f9; border-left: 4px solid #ddd; margin: 0; padding: 10px;">${Ans}</pre></blockquote>
    <p>Thank you for using our platform!</p>
    <p>Sincerely,<br>Community Solutions</p>
  `;
        const mailOptions = {
            from: 'solutionscommunity190@gmail.com',
            to: email,
            subject: 'New Answer Notification',
            html: emailContent,
        };
        await transporter.sendMail(mailOptions);
    }

    console.log(identification + 'ayush');
};

const updateQueryNum = async (req, res) => {
    const userName = req.params.userName;
    const ExistingUser = await User.findOne({userName: userName});
    const result = await ExistingUser.updateOne(
        {
            QueryPosted: ExistingUser.QueryPosted + 1,
        },
        {
            new: true,
        }
    );
    if (result) {
        return res.status(200).send({message: 'Successfully updated'});
    }
};

const AnswerDelete = async (req, res) => {
    console.log('ayush');
    const {identification} = req.body;
    const QuesId = req.params.QuesId;
    const ansId = req.params.AnsId;
    const ans = await Query.findByIdAndUpdate(
        {_id: QuesId},
        {$pull: {answers: {_id: ansId}}} // Specify the object to remove
    );
    let deleteComments = await comment.deleteMany(
        {AnsId: ansId},
        {
            new: true,
        }
    );
    if (ans && deleteComments) {
        return res.status(200).send({message: 'ans deleted'});
    } else {
        console.log('wome t');
    }
};

const CommentDelete = async (req, res) => {
    const _id = req.params.id;
    let updateComment = await comment.findByIdAndDelete(
        {_id},
        {
            new: true,
        }
    );
    if (updateComment) {
        return res.status(200).send({message: 'Comment Deleted'});
    } else {
        return res.status(400).send({error: 'something went wrong'});
    }
};

const updateLiked = async (req, res) => {
    try {
        const {name} = req.body;
        const QuesId = req.params.QuesId;
        const AnsId = req.params.AnsId;
        console.log(name);
        const result = await Query.updateOne(
            {_id: QuesId, 'answers._id': AnsId}, // Filter to match the document and specific answer
            {$addToSet: {'answers.$[elem].likedBy': name}}, // Update operation
            {arrayFilters: [{'elem._id': AnsId}], upsert: true}
        );
        await Query.updateOne({_id: QuesId}, {$inc: {likes: 1}}, {new: true});
        if (result) {
            console.log(result);
            return res.status(200).send({message: 'AddedLiked'});
        } else {
            return res.status(400).send({error: 'something went error'});
        }
    } catch (e) {
        console.log(e);
    }
};
const deleteLike = async (req, res) => {
    try {
        const {name} = req.body;
        const QuesId = req.params.QuesId;
        const AnsId = req.params.AnsId;
        console.log(name);
        const result = await Query.updateOne(
            {_id: QuesId, 'answers._id': AnsId}, // Filter to match the document and specific answer
            {$pull: {'answers.$[elem].likedBy': name}}, // Update operation
            {arrayFilters: [{'elem._id': AnsId}], upsert: true}
        );
        await Query.updateOne({_id: QuesId}, {$inc: {likes: -1}}, {new: true});
        if (result) {
            console.log(result);
            return res.status(200).send({message: 'AddedLiked'});
        } else {
            return res.status(400).send({error: 'something went error'});
        }
    } catch (e) {
        console.log(e);
    }
};
const commentLike = async (req, res) => {
    const {name} = req.body;
    console.log(name);
    const id = req.params.id;
    const update = await comment.updateOne(
        {
            _id: id,
        },
        {$push: {likedBy: name}},
        {new: true}
    );
    if (update) {
        console.log(update);
        return res.status(200).send({message: 'liked'});
    } else {
        return res.status(400).send({error: 'something went wrong'});
    }
};

const deleteCommentLike = async (req, res) => {
    const {name} = req.body;
    console.log(name);
    const id = req.params.id;
    const update = await comment.updateOne(
        {
            _id: id,
        },
        {$pull: {likedBy: name}},
        {new: true}
    );
    if (update) {
        console.log(update);
        return res.status(200).send({message: 'liked'});
    } else {
        return res.status(400).send({error: 'something went wrong'});
    }
};

const answerUpdate = async (req, res) => {
    const {QuesId, AnsId, Answer} = req.body;
    const updateAns = await Query.updateOne(
        {_id: QuesId, 'answers._id': AnsId},
        {$set: {'answers.$.ans': Answer}},
        {
            new: true,
        }
    );
    if (updateAns) {
        return res.status(200).send({message: 'successfully updated'});
    } else {
        return res.status(400).send({error: 'something went wrong'});
    }
};

const commentUpdate = async (req, res) => {
    const {CommentId, Comment} = req.body;
    const updateComment = await comment.updateOne(
        {
            _id: CommentId,
        },
        {
            $set: {
                comment: Comment,
            },
        }
    );
    if (updateComment) {
        return res.status(200).send({message: 'successfully updated'});
    } else {
        return res.status(400).send({error: 'something went wrong'});
    }
};

const generateOtp = async (req, res) => {
    try {
        const {Email} = req.body;
        const transporter = Transporter();
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const mailOptions = {
            from: 'solutionscommunity190@gmail.com',
            to: Email,
            subject: 'Account Verification - OTP',
            text: `Your OTP for registration is: ${otp}`,
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).send({otp: otp});
    } catch (e) {
        console.log('error', e);
    }
};
module.exports = {
    user,
    data,
    generateOtp,
    signIn,
    commentUpdate,
    deleteCommentLike,
    answerUpdate,
    commentLike,
    deleteLike,
    updateLiked,
    AnswerDelete,
    GetAllComment,
    CommentDelete,
    updateQueryNum,
    GetUserQuery,
    AnswerAdd,
    signUp,
    IndividualData,
    Home,
    IndividualUser,
};
