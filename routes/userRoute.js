const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const wrapAsync = require("../utils/wrapAsync");

router.get("/signup", wrapAsync(userController.renderSignupPage));
router.get("/signin", wrapAsync(userController.renderSigninPage));

module.exports = router;