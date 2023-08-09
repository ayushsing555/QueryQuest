const Query = require('../model/Query');
const User = require('../model/User');
const comment = require('../model/Comment');
const Transporter = require('./TransporterFun');
const {Password, Token} = require('../helperFunction/Token');
const {EmailContent,followEmail} = require("../EmailTemplate/EmailContent");
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
            <h1 class="heading" style="color: #333; text-align: center; margin-bottom: 30px; font:bold; font-size: 20px;"><strong> Welcome to <span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭!!</span></strong></h1>
            <p style="font-size: 18px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${userName}</span>,</p>
            <p style="font-size: 16px;">We are delighted to welcome you to <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭!</strong> This email is to confirm that your account has been successfully created.</p>
            <h2 style="color: black; margin-top: 30px;margin-bottom: 3px; font-weight: bold;">Account Details:</h2>
            <ul style="list-style-type: none; padding-left: 0;">
              <li style="font-size: 16px; margin-bottom: 10px;"><strong>Username:</strong> ${userName}</li>
              <li style="font-size: 16px; margin-bottom: 10px;"><strong>Email address:</strong> ${email}</li>
              <li style="font-size: 16px; margin-bottom: 10px;"><strong>Password:</strong>${password}</li>
            </ul>
            <p style="font-size: 16px;">Your account grants you access to a wide range of features and services, designed to enhance your <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> experience.</p>
            <p style="font-size: 16px;">To get started, we recommend logging in to your account and exploring the various sections. If you have any questions or need assistance, our support team is here to help.</p>
            <p style="font-size: 16px;">Thank you for choosing <a href="http://localhost:3001/"><strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong></a> . We look forward to serving you!</p>
            <p  style="font-size: 16px; margin-top: 30px; text-align: center; color: #555;">Best regards,</p>
            <p  style="font-size: 16px; margin-top: 5px; text-align: center; color: #555;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
  `;
            const mailOptions = {
                from: 'queryquest750@gmail.com',
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
      </head>
      <body style="font-family: Arial, Helvetica, sans-serif;">
    <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    <h1 style="color:rgb(126, 25, 25);font-size: larger; text-align: center; font-weight: bold;">Welcome to Our Platform!</h1>
    <br>
    <p style="margin-bottom: 16px; margin-top: 20px;">Congratulations on creating your new account!</p>
    <p>As a new user, we are pleased to offer you a free license for our platform. With this license, you can explore and utilize essential features for your email communication needs.</p>
    <p>If you find our platform beneficial and wish to unlock more advanced features, we encourage you to check out our range of premium licenses. These licenses provide access to additional powerful features such as advanced analytics, personalized templates, and priority support.</p>
    <p>Visit our website to learn more about our license options and find the perfect fit for your requirements.</p>
    <p>We're excited to have you on board and look forward to assisting you with your email communication goals!</p>
    <br>
    <p  style="font-size: 16px; margin-top: 30px; text-align: center; color: #555;">Best regards,</p>
    <p  style="font-size: 16px; margin-top: 5px; text-align: center; color: #555;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
  </div>
  </body>
    </html>
  `;
            const mailOptions = {
                from: 'queryquest750@gmail.com',
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
        <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <h2 style="color:rgb(126, 25, 25);text-align: center; font-size: 24px; margin: 0;font-weight: bold;">New Answer Notification</h2>
        <br>
        <p>Hello,<span style="color:rgb(126, 25, 25);font-weight: bold;"> ${user.userName}</span></p>
        <br>
        <p style="margin-left: 20px;">A new answer has been posted on your question: <strong> ${ExistingQues.Question}</strong></p>
        <p style='color:blue;margin-left: 20px;'>Answer By <a href='http://localhost:3001/user/${postedBy}'><strong style="color: red;">${postedBy}</strong></a> </p>
        <p style="margin-left: 20px; margin-top: 20px;">Here is the content of the answer:</p>
        <blockquote style="margin-left: 20px; margin-top: 10px; margin-bottom: 20px;"><pre style="background-color: #f9f9f9; border-left: 4px solid #ddd; margin: 0; padding: 10px;">${Ans}</pre></blockquote>
        <p>Thank you for using our platform!</p>
        <p>Sincerely,<br>The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>
  `;
        const mailOptions = {
            from: 'queryquest750@gmail.com',
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
            {_id: QuesId, 'answers._id': AnsId}, 
            {$pull: {'answers.$[elem].likedBy': name}}, 
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
        const emailContent = `<div style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <p style="font-size: 18px;">Hello <span style="color:rgb(126, 25, 25); font-weight: bold;"></span>,</p>
        <p style="margin-top: 20px; margin-left: 20px;">Your OTP for registration is: <span style="font-size: larger; color: red; font-weight: bold;">${otp}</span> </p>
        <p  style="font-size: 16px; margin-top: 30px;color: #555;">Best regards,</p>
              <p  style="font-size: 16px; margin-top: 5px;color: #555;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>`;
        const mailOptions = {
            from: 'queryquest750@gmail.com',
            to: Email,
            subject: 'Account Verification - OTP',
            html: emailContent,
        };
        await transporter.sendMail(mailOptions);
        return res.status(200).send({otp: otp});
    } catch (e) {
        console.log('error', e);
    }
};

const payment = async (req, res) => {
    try {
        let {Price, Validity, Ticket, _id, invoiceNo} = req.body;
        let user = await User.findOne({_id: _id});
        if (Ticket == 'year') {
            Validity = 12;
        }
        let validDate;
        if (Ticket == "monthly") {
            validDate = new Date(new Date().getFullYear(), new Date().getMonth() + Validity, new Date().getDate());
        } else {
            validDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate());
        }
        const Payment = await User.findByIdAndUpdate({_id: _id}, {
            $set: {
                validUpTo: new Date(Date.now() + (Validity * 30 * 24 * 60 * 60 * 1000)),
                ticket: Ticket,
                CurrentQueryPosted: 0
            }
        }, {
            new: true
        });
        res.status(200).send({message: "Ticket successfully Subscribed"});
        if (Payment) {
            const transporter = Transporter();
            const emailContent = `<div style="background-color:  #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <nav style="background-color: rgb(126, 27, 27); padding: 10px; border-radius: 20px;">
    <img style="padding: 10px; border-radius: 30px;" src="QueryQuest.png" alt="">
  </nav>
<h1 style="color:rgb(126, 25, 25); text-align: center; margin-top: 30px; font-weight: bold; font-size: larger;">Thanks for trusting 𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭, ${user.fullName},</h1>
<br>
<div>
  <h2 style="text-align: center;">Invoice number <span>#${invoiceNo}</span></h2>
  <p style="text-align: center; font-size: 12px;">Order received on <span> ${new Date().getMonth().toString()} ${new Date().getDate().toString()}, ${new Date().getFullYear().toString()}</span></p>
  <br/>
</div>
<hr>
<div style="margin-top: 30px; margin-left: 20px; background-color: rgb(234, 234, 234);">
  <p style="background-color: rgb(126, 25, 25); color: white; padding: 10px; " class="text-xl text-black mb-1 font-bold">Billed To:</p>
  <p style="margin-left: 20px; padding: 5px;">${user.fullName}</p>
  <p style="margin-left: 20px; padding: 5px;">${user.email}</p>
</div>

<div class="flex flex-col mx-5 mt-10">
  <table class="min-w-full divide-y divide-slate-500">
    <thead>
      <tr>
        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-black sm:pl-6 md:pl-0">
          Ticket
        </th>
        <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-bold text-black sm:table-cell">
          Months
        </th>
        <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-bold text-black sm:table-cell">
          Price/Month
        </th>
        <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-bold text-black sm:pr-6 md:pr-0">
          Amount
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-slate-200">
        <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
          <div class="font-medium text-slate-700">QueryQuest</div>
          
        </td>
        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          ${Validity}
        </td>
        <td class="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
          Rs ${Ticket == "monthly" ? "10" : "84"}
        </td>
        <td class="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
          Rs ${Price}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row" colspan="3" class="hidden pt-4 pl-6 pr-3 text-sm font-bold text-right text-slate-700 sm:table-cell md:pl-0">
          Total
        </th>
        <td class="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
          Rs ${Price}
        </td>
      </tr>
    </tfoot>
  </table>
</div>

<p style="margin-left: 20px;font-size: small;">Starts: ${new Date().getMonth().toString()} ${new Date().getDate().toString()}, ${new Date().getFullYear().toString()}</p>
  <p style="margin-left: 20px;font-size: small;">Expires: ${validDate}</p>
  <hr style="margin: 10px; margin-bottom: 20px;">
<p style="font-size: 14px;margin-left: 10px; margin-top: 10px; font-family: serif;">Once again, thank you for choosing 𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭 and for upgrading to our Popular Plan. We are excited to embark on this premium journey together and support you every step of the way.</p>
<p style="font-size: 16px; margin-top: 30px; text-align: center; color: #555; font-family: serif;">Best regards,</p>
<p style="font-size: 16px; margin-top: 5px; text-align: center; color: #555;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
</div>`;
            const mailOptions = {
                from: 'queryquest750@gmail.com',
                to: user.email,
                subject: 'Thank You for Upgrading to the Popular Plan!',
                html: emailContent,
            };
            await transporter.sendMail(mailOptions);
            await user.addPayment(validDate, Ticket, Validity);

        }

    }
    catch (e) {
        console.log(e);
    }

};

const TimeAdd = async (req, res) => {
    const {userName, time, QuesId, _id} = req.body;
    console.log(_id + "ayush");
    Query.findById(QuesId)
        .then(question => {
            if (!question) {
                console.error('Question not found');
                return;
            }
            const userViews = question.views.find(view => view.userName === userName);
            if (userViews) {
                userViews.Session.push({
                    SpendTimes: time,
                    startsAt: new Date()
                });
                userViews.totalTimeSpend = userViews.totalTimeSpend + time;
                return question.save();
            } else {
                const newUser = {
                    userName: userName,
                    totalTimeSpend: time,
                    Session: [
                        {
                            SpendTimes: time,
                            startsAt: new Date()
                        }
                    ]
                };
                question.views.push(newUser);
                return question.save();
            }
        })
        .then(savedQuestion => {
            console.log('View recorded successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    await Query.updateOne({_id: QuesId},
        {$inc: {totalTimeSpend: time}});
    User.findById(_id)
        .then(user => {
            if (!user) {
                console.error('user not found');
                return;
            }
            const UserTimeSpend = user.TimeSpend.find(Time => Time.QuestionId === QuesId);
            if (UserTimeSpend) {
                UserTimeSpend.Time.push({
                    SpendTimes: time,
                    startsAt: new Date()
                });
                UserTimeSpend.TotaltimeSpend = UserTimeSpend.TotaltimeSpend + time;
                return user.save();
            } else {
                const newQues = {
                    QuestionId: QuesId,
                    TotaltimeSpend: time,
                    Time: [
                        {
                            SpendTimes: time,
                            startsAt: new Date()
                        }
                    ]
                };
                user.TimeSpend.push(newQues);
                return user.save();
            }
        })
        .then(savedUser => {
            console.log('View recorded aa successfully');
        })
        .catch(error => {
            console.error('Error:', error);
        });

};

const ForgotPassword = async (req, res) => {
    const {email} = req.body;
    const isExistEmail = await User.findOne({email: email});
    if (isExistEmail) {
        let newPassword = Password();
        let token = Token();

        const updatePassword = await User.findOneAndUpdate({email}, {
            $set: {
                password: newPassword,
                forgotPasswordToken: token
            }
        }
            , {
                new: true
            });
        if (updatePassword) {
            res.status(200).send({Message: "Password sent to email id"});
            const transporter = Transporter();
            const emailContent = `<div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;">Forgot Password</h3>
      <hr>
      <p style="font-size: 18px; margin-top: 30px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${isExistEmail.userName}</span>,</p>
      <p style="font-size: 16px;margin-top: 5px;">Forgot your password?</p>
      <p style="font-size: 16px;">If yes, use below password to login or click on Reset password to reset the password your own.</p>
      <h2 style="color: black; margin-top: 30px;margin-bottom: 10px; font-weight: bold;">Account Details:</h2>
      <ul style="list-style-type: none; padding-left: 0;">
        <li style="font-size: 16px; margin-bottom: 2px;"><strong>Email address:</strong> ${email}</li>
        <li style="font-size: 16px; margin-bottom: 10px;"><strong>New Password:</strong> ${newPassword}</li>
      </ul>
      <a href = http://localhost:3001/newPassword/${token}>
      <button style="color: white;padding: 10px; background-color: rgb(126, 25, 25); margin-left: 200px;  border-radius: 5px; margin-top: 10px;">Reset Password</button></a>
      <p style="font-size: 16px; margin-top: 30px;">Thank you for choosing <a href="http://localhost:3001/"><strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong></a> . We look forward to serving you!</p>
      <p  style="font-size: 16px; margin-top: 10px; text-align: center; color: #555;">Best regards,</p>
      <p  style="font-size: 16px; margin-top: 5px; text-align: center; color: #555;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
</div>`;
            const mailOptions = {
                from: 'queryquest750@gmail.com',
                to: email,
                subject: 'Forgot Password',
                html: emailContent,
            };
            await transporter.sendMail(mailOptions);
        }
    }
    else {
        return res.status(300).send({Error: "Email not found"});
    }
};

const changePassword = async (req, res) => {
    const {email, pwd, token} = req.body;
    const isExistEmail = await User.findOne({email});
    if (!isExistEmail) {
        return res.status(300).send({Error: "Email doesn't exist..."});
    }
    if (isExistEmail.forgotPasswordToken !== token) {
        return res.status(300).send({Error: "Link has been expired for this account... Click on Forgot Password to generate new link for this account.."});
    }
    const updatePassword = await User.findOneAndUpdate({email}, {
        $set: {
            password: pwd,
            forgotPasswordToken: "undefined"
        }
    }
        , {
            new: true
        });

    if (updatePassword) {
        res.status(200).send({Message: "Password Set Successfully"});
        const transport = Transporter();
        const emailContent = `
         <div  style="background-color: #f9f9f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h1 class="heading" style="color: #333; text-align: center; font:bold; font-size: 30px;"><strong><span style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</span></strong></h1>
      <h3 style="color:rgb(126, 25, 25); text-align: center; font-family: sans-serif; margin-bottom: 20px;">Password changed successfully</h3>
      <p style="font-size: 18px; margin-top: 30px; margin-bottom: 20px;">Dear <span style="color:rgb(126, 25, 25); font-weight: bold;"> ${isExistEmail.userName}</span>,</p>
      <h1 style="color: rgb(12, 83, 12); text-align: center; font-size: 20px; font-weight: bold;margin-bottom: 15px;">PASSWORD CHANGED SUCCESSFULLY</h1>
      <p style="font-size: 16px;">We hope this email finds you well. We are writing to inform you that the password for your account on QueryQuest has been <span style="font-weight: bold;"> successfully changed.</span></p>
      <p style="font-size: 16px; margin-top: 10px;">Your account security is of utmost importance to us, and we understand the significance of protecting your personal information. If you were responsible for this password change, please disregard this email.</p>
      <p style="font-size: 16px; margin-top: 10px;">If you require any further assistance or have any concerns about the security of your account, please don't hesitate to <span style="color: blue; font-weight: bold;"> contact our customer support team </span> by replying to this mail.</p>
      <p style="font-size: 16px; margin-top: 10px;">Thank you for being a valued member of our community. We are committed to ensuring your experience on QueryQuest remains safe and secure.</p>
      
      <p  style="font-size: 16px; margin-top: 20px; color: #555; text-align: center;">Best regards,</p>
      <p  style="font-size: 16px; color: #555; text-align: center;">The <strong style="color:rgb(126, 25, 25);">𝐐𝐮𝐞𝐫𝐲𝐐𝐮𝐞𝐬𝐭</strong> Team</p>
    </div>`;
        const mailOptions = {
            from: 'queryquest750@gmail.com',
            to: email,
            subject: 'Forgot Password',
            html: emailContent,
        };
        await transport.sendMail(mailOptions);
    }
};

const QueryDelete = async (req, res) => {
    const id = req.params.id;
    const user = req.params.user;
    const query = await Query.findOne({_id: id});
    let Title = query.Question;
    const userDetail = await User.findOne({userName: user});
    const deleteQuery = await Query.findByIdAndDelete({_id:id}, {
        new: true
    });
    if (deleteQuery) {
        res.status(200).send({Message: "Succesfully deleted"});
        const transport = Transporter();
        const emailContent = EmailContent(Title, user);
        const mailOptions = {
            from: 'queryquest750@gmail.com',
            to: userDetail.email,
            subject: 'Query Deletion',
            html: emailContent,
        };
        await transport.sendMail(mailOptions);
    }
    else {
        res.status(300).send({Error: "something went wrong"});
    }
};

const addFollow = async(req,res)=>{
    const {followed,user} = req.body;
    const userDetail = await User.findOne({userName:user})
    const followingUser = await User.findOne({userName:followed}) 
    const addFollowed = await User.findOneAndUpdate({userName:followed},{
        $push:{
            "followedBy":user,
            "followedEmail":userDetail.email
        }
    });
    const addFollowing = await User.findOneAndUpdate({userName:user},{
        $push:{
            "follwing":followed,
            "followingEmail":followingUser.email
        }
    })
    if(addFollowed&&addFollowing){
        res.status(200).send({Mesage:"Successfully connected"});
        const transport = Transporter();
        const emailContent = followEmail(followed,user);
        const mailOptions = {
            from: 'queryquest750@gmail.com',
            to: userDetail.email,
            subject: 'Account Following Info',
            html: emailContent,
        };
        await transport.sendMail(mailOptions);
    }
    else{
        return res.status(200).send({Error:"something went wrong"});
    }
    
}
module.exports = {
    user,
    data,
    changePassword,
    TimeAdd,
    QueryDelete,
    payment,
    generateOtp,
    ForgotPassword,
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
    addFollow
};
