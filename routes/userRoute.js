const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/signup", userController.renderSignupPage);
router.get("/signin", userController.renderSigninPage);

module.exports = router;