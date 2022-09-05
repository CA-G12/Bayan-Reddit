const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().required(),
  Email: joi.string().email().required(),
  password: joi.string().min(8).required(),
  confirmPassword: joi.string().required().valid(joi.ref('password')),
});

module.exports = signupSchema;
