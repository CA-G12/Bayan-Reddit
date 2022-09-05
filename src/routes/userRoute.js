const userRoute = require('express').Router();
const { signup, login } = require('../controllers');

userRoute.post('/signup', signup);
userRoute.post('/login', login);

module.exports = userRoute;
