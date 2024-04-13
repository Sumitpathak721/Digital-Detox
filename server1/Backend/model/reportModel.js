const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const sendToken = require("../utils/jwtToken");
const userSchema1 = new mongoose.Schema({
  aggresorID:{
    type:String
  },
  desc:{
    type:String
  },
});
userSchema1.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
module.exports = mongoose.model("repoUser", userSchema1);