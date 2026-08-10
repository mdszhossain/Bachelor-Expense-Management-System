const Joi = require("joi");
const signinSchema = Joi.object({
  username: Joi.string()
    .trim()
    .required()
    .min(3)
    .max(20)
    .pattern(/^[a-zA-Z0-9@]+$/),
  password: Joi.string()
    .trim()
    .min(8)
    .max(30)
    .invalid(" ")
    .required()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`])/,
    ),
});

module.exports = { signinSchema };
