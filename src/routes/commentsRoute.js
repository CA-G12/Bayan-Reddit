require('env2')('.env');
const commentsRoute = require('express').Router();
const {createComment, auth, getPostById, getCommentsById } = require('../controllers')

const { authenticateToken } = require('../middleware');

commentsRoute.get('/auth', auth);

commentsRoute.get('/post/:id', getPostById);
commentsRoute.get('/comments/:id', getCommentsById);

commentsRoute.post('/comment', authenticateToken, createComment);

module.exports = commentsRoute;
