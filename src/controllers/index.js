const { notFound, serverError } = require('./error');
const signup = require('./signup');
const login = require('./login');
const { getAllPosts, createPost, getPostById, getCommentsById } = require('./posts');
const auth = require('./auth');
const createComment = require('./comments.js')
const profile = require('./profile');
const votes = require('./votes');

module.exports = {
  notFound, serverError, signup, login, getAllPosts, auth, createPost, getPostById, getCommentsById, createComment, profile, votes
};
