const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment')

const jwt = require('jsonwebtoken');
const cors = require('cors');
const express = require("express");

const app = express();

const getAllComments = (req,res) => {
    Comment.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

const addComment = async (req,res) => {
    const comment = req.body;
    const newComment = new Comment(comment);
    await newComment.save();

    res.json(comment);
};

//update function not exactly working... 
const updateComment =
    async (req, res) => {
      Comment.findByIdAndUpdate(req.body.id, req.body, {
        useFindAndModify: false,
      })
        .then(comment => res.status(200).json({ msg: 'Comment updated', comment }))
        .catch(err =>
          res.status(400).json({ msg: 'Failed to update comment', err })
        );
    };

const getComment = async (req, res) => {
    Comment.findById(req.params.id)
    .exec()
    .then(comment => res.status(200).json({ comment }))
    .catch(err =>
        res.status(400).json({ msg: 'Failed to get info of comment', err })
    );
};

const deleteComment = async (req, res) => {
    Comment.findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
        if (!doc) { return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
}

module.exports = {getAllComments, getComment, addComment, deleteComment, updateComment};