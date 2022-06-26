const express = require('express');

const postController = express.Router() 
const User = require('../models/User')
const Post = require('../models/Post')
const Comment = require('../models/Comment')

// get info fr
const getAllPosts = (req,res) => {
    Post.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
};

// [/api/posts] /:id
// GET (PUBLIC)
// get info from a single post
const getPost = async (req, res) => {
    Post.findById(req.params.id)
      .then(post => res.status(200).json({ post }))
      .catch(err =>
        res.status(400).json({ msg: 'Failed to get info of post', err })
      );
  };

const addPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    await newPost.save();

    res.json(post);
}

// delete a post
const deletePost = async (req, res) => {
    Post.findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
        if (!doc) { return res.status(404).end();}
        return res.status(204).end();
    })
    .catch(err => next(err));
}

//     // [/api/posts] /add
//     // POST (PRIVATE)
//     // create a new post
// const addPost = async (req, res) => {
//     const { message, author, topic } = req.body;
//     const newPost = new Post({
//         message,
//         author,
//         topic,
//     });
//     const limit = 10;

//     newPost
//         .save()
//         .then(savedPost => {
//         const post = savedPost.toObject();

//         User.findByIdAndUpdate(
//             author,
//             { $push: { posts: post._id } },
//             { useFindAndModify: false }
//         )
//             .lean()
//             .then(() => {
//             return Topic.findByIdAndUpdate(
//                 topic,
//                 { $set: { lastpost: post._id }, $push: { posts: post._id } },
//                 { useFindAndModify: false }
//             );
//             })
//             .then(updatedTopic => {
//             return Subcategory.findByIdAndUpdate(
//                 updatedTopic.subcategory,
//                 { $set: { lastpost: post._id } },
//                 { useFindAndModify: false }
//             );
//             })
//             .then(() => {
//             return Post.countDocuments({ topic });
//             })
//             .then(count => {
//             post.topicTotalPages = Math.ceil(count / limit);

//             return Post.findById(post._id, 'author')
//                 .lean()
//                 .populate({
//                 path: 'author',
//                 populate: {
//                     path: 'usergroup',
//                     select: '-users',
//                 },
//                 });
//             })
//             .then(populatedPost => {
//             populatedPost.author.topicCount =
//                 populatedPost.author.topics.length;
//             populatedPost.author.postCount = populatedPost.author.posts.length;

//             post.author = populatedPost.author;

//             return res.status(200).json({ post });
//             });
//         })
//         .catch(err => res.json({ msg: 'Failed to add a new post', err }));
//     }
//     ;

//     // [/api/posts] /update
//     // POST (PRIVATE)
//     // update a post
//     postController.post(
//     '/update',
//     passport.authenticate('jwt', { session: false }),
//     (req, res) => {
//     Post.findByIdAndUpdate(req.body.id, req.body, {
//         useFindAndModify: false,
//     })
//         .then(post => res.status(200).json({ msg: 'Post updated', post }))
//         .catch(err =>
//         res.status(400).json({ msg: 'Failed to update post', err })
//         );
//     }
//     );



  module.exports = {getAllPosts, getPost, addPost, deletePost};