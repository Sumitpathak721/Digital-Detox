const app =require('./app');
const dotenv =require('dotenv');
const connectDatabase = require("./config/database"); 

//config
dotenv.config({path:"Backend/config/config.env"})

//connecting to database
connectDatabase();
app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
})
