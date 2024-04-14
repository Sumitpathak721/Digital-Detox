const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const userSchema1 = require("../model/reportModel");
const sendToken = require("../utils/jwtToken");


// Example usage:
const apiUrl = 'http://127.0.0.1:5000/api/toxicScore';
const imagePath = 'path/to/image.jpg';

exports.reportUser = catchAsyncErrors(async (req, res, next) => {
    // http://127.0.0.1:5000/api/toxicScore
    console.log("storing in db")
    
    let user = await userSchema1.find(aggressorID)
    if(user){
      user.vote+=1
      await user.save()
    }else{
      const user = await userSchema1.create({
        aggressorID,
      });
    }
    // sendToken(user, 201, res);
    res.send({"success":"ok"});
  });
