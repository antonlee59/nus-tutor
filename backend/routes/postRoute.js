const express = require("express");
const userModel = require("../models/User");
const postModel = require("../models/Post");
const app = express();

const router = express.Router();
const postController = require("../controllers/postController");


router.get("/", postController.getAllPosts);
router.get("/:id",postController.getPost);
router.post("/add", postController.addPost);
router.delete("/delete/:id", postController.deletePost);

module.exports = router;