require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.set("view engine","ejs");


app.use("/home",indexRouter)
app.listen(process.env.PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running on port ${process.env.PORT}`);
})