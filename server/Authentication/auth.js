const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const authentication = async (req, res, next) => {
  let {token} = req.body;
  if (token != undefined) {
    const verifyId = await jwt.verify(token, process.env.SECRECT_KEY);
    const userData = await User.findOne({ _id: verifyId._id });
    req.identification = userData.identification;
    req.user = userData;
    req.id = userData._id;
    if(userData.ticket=="Free"&&userData.CurrentQueryPosted==5){
       return res.status(404).send({message:"You have completed 5 Query of this month..Buy a ticket to upload more Queries"})
    }
    const today = new Date();
    if(userData.validUpTo<today){
       return res.status(404).send({message:"Your ticket has expired..please buy now another to continue"})
    }
    next();
  } else {
    console.log("not logged in")
     return res.status(404).json({ message: "Please login first" });
  }
};
module.exports = authentication;