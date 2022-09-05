const userRoute = require('express').Router();
const { signup } = require('../controllers');

userRoute.post('/signup', signup);

module.exports = userRoute;
