const joi = require('joi');

const signInSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().min(8).required(),
});

module.exports = signInSchema;
