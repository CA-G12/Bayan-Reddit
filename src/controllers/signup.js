/* eslint-disable camelcase */
const {
  addUser, userByEmail,
} = require('../database/queries');
const {
  CustomError, hashing, signupSchema, jwtAsync,
} = require('../utils');

const signup = (req, res, next) => {
  const {
    // eslint-disable-next-line no-unused-vars
    username, Email, password, confirmPassword,
  } = req.body;
  signupSchema.validateAsync(req.body)
    .then(() => userByEmail(req.body))
    .then((data) => {
      if (data.rowCount) {
        throw CustomError('Email is already Exists', 409);
      }
      return password;
    })
    .then((pass) => hashing(pass))
    .then((hash) => addUser(req.body, hash))
    .then((data) => {
      const { id } = data.rows[0];
      const { user_name } = data.rows[0];
      return jwtAsync({ id, user_name });
    })
    .then((token) => res.status(201)
      .cookie('token', token, { httpOnly: true })
      .json({ message: 'Success', status: 201 }))
    .catch((err) => {
      if (err.details) {
        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = signup;
