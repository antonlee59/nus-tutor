const User = require('../models/User')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require("express");

const app = express();

// dummy function
const dummy = (req, res , next) => {
    res.json({message: "dummy"});
}

const getUser = (req,res) => {
    User.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const addUser = async (req,res) => {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();

    res.json(user);
};



// app.post("/add_user", async (request, response) => {
//     const user = new userModel(request.body);
  
//     try {
//       await user.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });

// app.get('/h', (req, res) => res.send('Hello World!'));

// app.get("/users", async (request, response) => {
//     const users = await userModel.find({});
  
//     try {
//       response.send(users);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

module.exports = {dummy, getUser, addUser}