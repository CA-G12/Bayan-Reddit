const {
  addUser, userById, userByName, userByEmail,
} = require('./users');
const { allPosts, addPost } = require('./posts');

module.exports = {
  addUser, userById, userByName, userByEmail, allPosts, addPost,
};
