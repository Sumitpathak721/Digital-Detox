const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const User = require("../model/userModel");
exports.ApiFeatures = catchAsyncErrors(async (req, res, next) => {
  
  const { name, ratings, vote} = req.body;
  const user = await User.findOne({ name });
   if (user) {
        // If the user is found, display their ratings
        console.log(`Ratings for user ${name}: ${ratings}:${vote}`);
    } else {
        console.log(`User with ID ${name} not found.`);
    }
    sendToken(user, 201, res);
});
