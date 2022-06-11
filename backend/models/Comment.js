const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({  
    text: {
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
    upvotedBy: {
        type: Array,
    },
    downvotedBy: {
        type: Array,
    },
});

commentSchema.methods.upvoteComment = function upvoteComment(comment) {
    var newComment = comment;
    newComment.score += 1;
    // newComment.upvotedBy.push(User)
    return newComment;
}
  
commentSchema.methods.downvoteComment = function downvoteComment(comment) {
    var newComment = comment;
    newComment.score -= 1;
    // newComment.downvotedBy.push(User)
    return newComment;
}

module.exports = mongoose.model("Comment", commentSchema);
