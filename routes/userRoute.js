const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/signup", userController.renderSignupPage);

module.exports = router;