module.exports.renderSignupPage = async(req, res) => {
    res.render("signup.ejs")
}
module.exports.renderSigninPage = async(req, res) => {
    res.render("signin.ejs");
}