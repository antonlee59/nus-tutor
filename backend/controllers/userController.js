const User = require('../models/User')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require("express");

const app = express();

// dummy function
const dummy = (req, res , next) => {
    res.json({message: "dummy"});
}

const getAllUsers = (req,res) => {
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

//update function not exactly working... 
const updateUser =
    async (req, res) => {
      User.findByIdAndUpdate(req.body.id, req.body, {
        useFindAndModify: false,
      })
        .then(user => res.status(200).json({ msg: 'User updated', user }))
        .catch(err =>
          res.status(400).json({ msg: 'Failed to update user', err })
        );
    };

const getUser = async (req, res) => {
    User.findById(req.params.id)
    .exec()
    .then(user => res.status(200).json({ user }))
    .catch(err =>
        res.status(400).json({ msg: 'Failed to get info of user', err })
    );
};

const deleteUser = async (req, res) => {
    User.findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
        if (!doc) { return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
}
    //     .then(=> res.status(200).json({ msg: 'User deleted' }))
    //     .catch(err =>
    //       res.status(400).json({ msg: 'Failed to delete user', err })
    //     );
    // };



module.exports = {dummy, getAllUsers, addUser, updateUser, getUser, deleteUser}