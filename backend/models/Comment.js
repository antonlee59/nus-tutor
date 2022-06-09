const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({});

module.exports = mongoose.model("Comment", CommentSchema);
