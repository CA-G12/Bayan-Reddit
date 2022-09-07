const { notFound, serverError } = require('./error');
const signup = require('./signup');
const login = require('./login');
const { getAllPosts, createPost } = require('./posts');
const auth = require('./auth');

module.exports = {
  notFound, serverError, signup, login, getAllPosts, auth, createPost,
};
