const { userByName } = require('../database/queries');
const {
  comparePass, CustomError, jwtAsync, signInSchema,
} = require('../utils');

const login = (req, res, next) => {
  const { username, password } = req.body;
  let id;
  signInSchema.validateAsync(req.body)
    .then(() => userByName(req.body))
    .then((data) => {
      if (!data.rowCount) {
        throw CustomError('username not found', 400);
      } else {
        // res.json(data)
        id = data.rows[0].id;
        const hash = data.rows[0].password;
        return comparePass(password, hash);
      }
    }).then((compared) => {
      if (compared) {
        return jwtAsync({ id, username });
      }
      throw CustomError('passwords does not match', 400);
    })
    .then((token) => res.status(201)
      .cookie('token', token, { httpOnly: true })
      .json({ message: 'Success', status: 200}))
    .catch((err) => {
      if (err.details) {
        next(CustomError(err.details[0].message, 400));
      } else {
        next(err);
      }
    });
};

module.exports = login;
