const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv')
  
      //config secure
dotenv.config({path: "./config.env"})
const PORT = process.env.PORT

 //mongoose connection
require('./db/conn')

app.use(express.json())
 
//const User = require('./model/userSchema')

//we link to router files to make our route easy
app.use(require('./router/auth'))


//  middleware
const middleware = (req, res, next) => { 
  console.log("hello my middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send("hello from the home app.js");
// });
app.get("/about", middleware, (req, res) => {
  console.log("hello from the about ");
  res.send("hello from the about page");
});
app.get("/contact", (req, res) => {
  res.send("hello from the contact page");
});
app.get("/login", (req, res) => {
  res.send("hello from the login page");
});
app.get("/signup", (req, res) => {
  res.send("hello from the signup page");
});

app.listen(PORT, (err) => {
  console.log("server is listening on localhost " + PORT);
});
