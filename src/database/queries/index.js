const {
  addUser, userById, userByName, userByEmail,
} = require('./users');
const { allPosts, addPost, postById } = require('./posts');
const { addComment } = require('./commets')

const commentsByPostId = require('./commets/comments');
const { postsByUserId } = require('./users');
const profilePosts = require('./profile')


module.exports = {
  addUser, userById, userByName, userByEmail, allPosts, addPost, postById, addComment, commentsByPostId,postsByUserId, profilePosts
};
