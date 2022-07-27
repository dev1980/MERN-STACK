const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require("dotenv").config();
const app = express();

// app.get("/", (req, res)=>{
//     res.send("get all data")
// })

const couserRouter = require("./routes/course");


app.use(bodyParser.json())
app.use("/api/v1/courses", couserRouter);

const port = process.env.PORT


mongoose.connect(process.env.DB_CONNECTION_URL, ()=>{
    console.log("database connected")
})
app.listen(port, (req, res)=>{
console.log("hello world")
})