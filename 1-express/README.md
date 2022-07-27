const express = require("express");

const app = express();

app.get("/", (req, res)=>{
console.log("hello");
const result = "some text"
res.status(500).json({ data: result });
console.log("text again")

})

app.listen(3000)


to dowload file

const express = require("express");

const app = express();

app.get("/", (req, res)=>{
console.log("hello");
const result = "some text"
res.download('server.js')

})

app.listen(3000)

# to set up view engine lets install ejs library 
# npm install ejs
# app.set('view engine', 'ejs')  // this is the code we have put to apply the view engine.

# now rename the index.html to index.ejs 
# for syntax higlight make sure to install ejs extension support in vscode


const express = require("express");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{

res.render("index", {qtext: "hello again from server"});

})

app.listen(3000)

# <body> <%= locals.text || "some default value"  %>

# we learn about different way of rendering content in the page

# now imagine we have hundres of route it will be difficult to manage all the route in single page. we handle this situation we will create seperate route folder.

