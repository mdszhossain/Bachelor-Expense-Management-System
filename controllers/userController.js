const User = require("../models/userModel");

module.exports.renderSignupPage = async (req, res) => {
  res.render("signup.ejs");
};
module.exports.renderSigninPage = async (req, res) => {
  res.render("signin.ejs");
};
module.exports.signup = async (req, res) => {
  const { fullname, username, email, phone, password } = req.body;
  const newUser = new User({ fullname, username, email, phone });
  const registeredUser = await User.register(newUser, password);
  res.redirect("/bems/signin");
};
module.exports.signin = async (req, res) => {
  res.redirect("/bems/dashboard");
};
module.exports.signout = async (req, res) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
  });
  res.redirect("/bems/signin");
};
