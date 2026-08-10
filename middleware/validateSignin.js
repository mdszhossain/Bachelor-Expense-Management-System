const { signinSchema } = require("../validation/signinValidation");
const ExpressError = require("../utils/ExpressError");

const validateSignin = async (req, res, next) => {
  const result = signinSchema.validate(req.body);
  const { error } = result;
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next();
};

module.exports = { validateSignin };
