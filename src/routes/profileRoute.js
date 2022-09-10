require('env2')('.env');
const profileRoute = require('express').Router();
const { profile, auth } = require('../controllers');

const { authenticateToken } = require('../middleware');

profileRoute.get('/auth', auth);

// profileRoute.get('/profile/id', profile);
profileRoute.get('/profile', authenticateToken, profile);

module.exports = profileRoute;
