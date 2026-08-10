const { signupSchema } = require("../validation/signupValidation");
const ExpressError = require("../utils/ExpressError");
const validateSignup = async (req, res, next) => {
  const result = signupSchema.validate(req.body);
  const { error } = result;
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  }
  next()
};

module.exports = { validateSignup };
