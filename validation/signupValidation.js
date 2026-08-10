const Joi = require("joi");
const signupSchema = Joi.object({
  fullname: Joi.string()
    .trim()
    .min(3)
    .max(20)
    .required()
    .pattern(/^[a-zA-Z\s]+$/),
  username: Joi.string()
    .trim()
    .min(3)
    .max(20)
    .required()
    .pattern(/^[a-zA-Z0-9@]+$/),
  email: Joi.string()
    .trim()
    .lowercase()
    .required()
    .pattern(/^[a-zA-Z0-9.]+@(gmail\.com|yahoo\.com|outlook\.com)$/),
  phone: Joi.string()
    .trim()
    .required()
    .pattern(/^[0-9]{11}$/),
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

module.exports = { signupSchema };
