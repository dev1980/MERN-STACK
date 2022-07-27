const express = require('express');
const app = express();
const useRoute = require('./routes/users')

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("index", {textno: "data from object"});
})

app.use("/users", useRoute);

app.listen(8080)

//http method (get, post, update, delete) CRUD