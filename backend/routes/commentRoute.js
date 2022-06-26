const express = require("express");
const commentModel = require("../models/Comment");
const postModel = require("../models/Post");
const app = express();

const router = express.Router();
const commentController = require("../controllers/commentController");


router.get("/", commentController.getAllComments);
router.get("/:id", commentController.getComment);
router.post("/add", commentController.addComment);
router.put("/update/:id", commentController.updateComment);
router.delete("/delete/:id", commentController.deleteComment);

module.exports = router;