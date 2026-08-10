const isAuthentication = async (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/bems/signin");
  }
  next();
};

module.exports = {isAuthentication};