const { allPosts, addPost } = require('../database/queries');

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

module.exports = { getAllPosts, createPost };
