const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const productRouter = require("./routes/product")

const app = express();

app.get("/", (req, res)=>{
    res.send("local host 3030");
})



app.use(bodyParser.json());

app.use("/product", productRouter);


mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("database is connected")
});

app.listen(process.env.PORT);