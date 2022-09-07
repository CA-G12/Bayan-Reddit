require('env2').apply('.env');

const { CustomError, verifyToken } = require('../utils');

const auth = (req, res, next) => {
  let userName;
  const { token } = req.cookies;
  if (!token) {
    res.json({ authorized: 'false' });
  } else {
    verifyToken(token, process.env.SECRET_KEY)
      .then((decoded) => {
        req.body.id = decoded.id;
        userName = decoded.username;
        res.json({ authorized: 'true', userName });
      })
      .catch((err) => {
        res.json({ authorized: 'false' });
      });
  }
};

module.exports = auth;
