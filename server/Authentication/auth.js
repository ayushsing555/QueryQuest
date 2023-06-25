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
    next();
  } else {
    console.log("not logged in")
     return res.status(404).json({ message: "Please login first" });
  }
};
module.exports = authentication;