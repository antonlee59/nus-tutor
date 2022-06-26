const express = require("express");
const userModel = require("../models/User");
const app = express();

const router = express.Router();
const userController = require("../controllers/userController");

router.get("/test", userController.dummy);
router.get("/", userController.getAllUsers);
router.get("/:id",userController.getUser);
router.post("/addUser", userController.addUser);
router.post("/update", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);


module.exports = router;