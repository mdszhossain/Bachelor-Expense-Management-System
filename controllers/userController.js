const User = require("../models/userModel");

module.exports.renderSignupPage = async (req, res) => {
  res.render("signup.ejs");
};
module.exports.renderSigninPage = async (req, res) => {
  res.render("signin.ejs");
};
module.exports.signup = async (req, res) => {
  const { fullname, username, email, phone, password } = req.body;
  const newUser = new User({fullname, username, email, phone});
  const registeredUser = await User.register(newUser, password);
  res.send(`User Data Registered`);
};
module.exports.signin = async(req, res) => {
  res.send("Signin Successful. Session Started");
}
