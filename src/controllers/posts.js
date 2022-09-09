const {
  allPosts, addPost, postById, commentsByPostId,
} = require('../database/queries');

const getAllPosts = (req, res, next) => {
  allPosts()
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

const createPost = (req, res, next) => {
  const {
    title, content, img, id,
  } = req.body;
  addPost({
    title, content, img, id,
  })
    .then(() => res.json({ massage: 'Post added successfully' }));
};
// for comments page
const getPostById = (req, res, next) => {
  const { id } = req.params;
  postById(id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};

const getCommentsById = (req, res, next) => {
  const { id } = req.params;
  commentsByPostId(id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};
module.exports = {
  getAllPosts, createPost, getPostById, getCommentsById,
};
