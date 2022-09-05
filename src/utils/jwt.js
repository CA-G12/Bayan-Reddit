require('env2')('.env');
const { sign, verify } = require('jsonwebtoken');

const jwtAsync = (payLoad) => new Promise((resolve, reject) => {
  sign(payLoad, process.env.SECRET_KEY, (err, token) => {
    if (err) {
      return reject(err);
    }

    return resolve(token);
  });
});
const verifyToken = (token, privateKey) => new Promise((resolve, reject) => {
  verify(token, privateKey, (err, decoded) => {
    if (err) return reject(err);

    return resolve(decoded);
  });
});

module.exports = { jwtAsync, verifyToken };
