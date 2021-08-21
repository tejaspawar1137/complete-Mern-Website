const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')

require("../db/conn");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send("hello from the auth.js"); 
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(428).json({
      error: "plz filled the property",
    });
  }
    //auth part if email is same
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(428).json({ error: "Email Already Exist" });
      }

      const user = new User({ name, email, phone, work, password, cpassword });
      user.save()
        .then(() => {
          res.status(201).json({ message: "user register succesfully" });
        })
        .catch((err) =>
          res.status(500).json({ error: "Failed to registered" })
        );
    })
    .catch((err) => {
      console.log(err);
    });
});

// login code 
router.post("/signin", async (req, res) => {
  try {
  
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "please fill the data" });
    }
    else if(password !== password){
      return res.status(422).json({error: "password are not matching"})
    } else {
       console.log('show error')
    }
      
      // generate token 
    const userLogin = await User.findOne({ email: email });
      
    if(userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password)
      const token = await userLogin.generateAuthToken();
         res.cookie("jwtoken", token, {
           expires: new Date(Date.now() + 25892000000),
           httpOnly:true
         })
    if (!isMatch) {
      res.status(400).json({ error: "user Error" });
    } else {
      res.json({ message: "user signup success" });
    } 
      }else {
        res.status(400).json({error: "Invalid Credientials"})
      }

  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
