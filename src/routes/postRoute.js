require('env2')('.env');
const postRoute = require('express').Router();

const { getAllPosts, auth, createPost } = require('../controllers');

const { authenticateToken } = require('../middleware');

postRoute.get('/posts', getAllPosts);
postRoute.get('/auth', auth);
postRoute.post('/posts', authenticateToken, createPost);

module.exports = postRoute;
