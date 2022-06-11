const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
    link: {
        type: String,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
    },
    username: {
        type: String,
    },
    score: {
        type: Number,
        default: 0,
    },
    comments: {
        type: Array,
    },
    upvotedBy: {
        type: Array,
    },
    downvotedBy: {
        type: Array,
    },
});

postSchema.methods.upvotePost = function upvotePost(post) {
    var newPost = post;
    newPost.score += 1;
    // newPost.upvotedBy.push(User);
    return newPost;
}
  
postSchema.methods.downvotePost = function downvotePost(post) {
    var newPost = post;
    newPost.score -= 1;
    // newPost.downvotedBy.push(User);
    return newPost;
}

postSchema.methods.commentOnPost = function commentOnPost(content) {
    const comment = {
        text: content,
        created: Date.now(),
        score: 0,
        upvotedBy: [],
        downvotedBy: [],
        // author: User,
        // username: User.username,
    }
    return comment;
}

module.exports = mongoose.model('Post', PostSchema)