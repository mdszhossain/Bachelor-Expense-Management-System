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
  (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).render("error.ejs", {
          message: "Password or username incorrect",
          returnTo: "/bems/signin",
        });
      }
      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.redirect("/bems/dashboard");
      });
    })(req, res, next);
  },
);
router.post("/signout", wrapAsync(userController.signout));

module.exports = router;
