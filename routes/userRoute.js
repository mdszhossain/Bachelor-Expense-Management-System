const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const wrapAsync = require("../utils/wrapAsync");
const { validateSignup } = require("../middleware/validateSignup");

router.get("/signup", wrapAsync(userController.renderSignupPage));
router.get("/signin", wrapAsync(userController.renderSigninPage));
router.post("/signup", validateSignup, wrapAsync(userController.signup));

module.exports = router;
