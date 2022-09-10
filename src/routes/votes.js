require('env2')('.env');
const voteRoute = require('express').Router();

const { votes } = require('../controllers');
const { authenticateToken } = require('../middleware');

voteRoute.post('/vote', authenticateToken, votes);

module.exports = voteRoute;
