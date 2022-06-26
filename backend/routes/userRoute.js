const express = require("express");
const userModel = require("../models/User");
const app = express();

const router = express.Router();
const userController = require("../controllers/userController");

router.get("/test", userController.dummy);
router.get("/getUser", userController.getUser);
router.post("/addUser", userController.addUser);


module.exports = router;