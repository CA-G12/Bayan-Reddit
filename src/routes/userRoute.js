const userRoute = require('express').Router();
const { signup, login } = require('../controllers');

userRoute.post('/signup', signup);
userRoute.post('/login', login);
userRoute.get('/logout', (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    res.clearCookie(token);
    res.json('logged out ')
  }
});

module.exports = userRoute;
