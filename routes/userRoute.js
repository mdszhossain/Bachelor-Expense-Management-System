const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const wrapAsync = require("../utils/wrapAsync");
const { validateSignup } = require("../middleware/validateSignup");
const { validateSignin } = require("../middleware/validateSignin");
const passport = require("passport");

router.get("/signup", wrapAsync(userController.renderSignupPage));
router.get("/signin", wrapAsync(userController.renderSigninPage));
router.post("/signup", validateSignup, wrapAsync(userController.signup));
router.post(
  "/signin",
  validateSignin,
  passport.authenticate("local", { failureRedirect: "/bems/signin" }),
  wrapAsync(userController.signin),
);

module.exports = router;
