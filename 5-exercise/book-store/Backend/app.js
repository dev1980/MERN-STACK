
const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes")
const cors = require('cors');
const app = express();

//Middleware
// app.use('/', (req, res, next)=>{
// res.send('app is started')
// })
app.use(express.json() )
app.use(cors())
app.use("/books", router) // localhost:5000/books

mongoose.connect('mongodb+srv://admin:Rr0NKhT1VsxVIxPj@cluster0.pgysccv.mongodb.net/bookStore?retryWrites=true&w=majority')
.then(()=> console.log("connected to the databaes")).then(()=>{
    app.listen(5000)
}).catch((error)=> console.log(error));
