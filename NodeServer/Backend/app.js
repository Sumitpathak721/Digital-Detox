const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

const errorMiddleware = require("./middleware/error");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());


const user = require("./routes/userRoutes.js");



app.use("/api/v1", user);



// Middleware for Errors
app.use(errorMiddleware);

// Chatbot = require('./chat');
// var readline = require('readline');

// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('You ==> ');
// rl.prompt();
// rl.on('line', function(message) {
//     console.log('Bot ==> '+ Chatbot.ChatbotReply(message))
//     rl.prompt();
// }).on('close',function(){
//     process.exit(0);
// });

module.exports = app;