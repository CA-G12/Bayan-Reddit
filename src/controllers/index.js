const { notFound, serverError } = require('./error');
const signup = require('./signup');
const login = require('./login');

module.exports = {
  notFound, serverError, signup, login,
};
