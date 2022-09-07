require('env2').apply('.env');
const { CustomError, verifyToken } = require('../utils');

const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw CustomError('unauthorized', 400);
  } else {
    verifyToken(token, process.env.SECRET_KEY)
      .then((decoded) => {
        req.body.id = decoded.id;
        next();
      })
      .catch((err) => next(err));
  }
};

module.exports = authenticateToken;
