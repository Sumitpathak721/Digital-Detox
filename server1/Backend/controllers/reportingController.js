const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const userSchema1 = require("../model/reportModel");
const sendToken = require("../utils/jwtToken");

exports.reportUser = catchAsyncErrors(async (req, res, next) => {


    const { aggressorID, desc} = req.body;
  
    const user = await userSchema1.create({
      aggressorID,
      desc,
      
    });
  
    sendToken(user, 201, res);
  });
