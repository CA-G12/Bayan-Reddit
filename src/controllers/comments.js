const { addComment } = require('../database/queries');

const createComment = (req, res, next) => {
  const {
    content, id, postId,
  } = req.body;
  console.log(content, id, postId);
  addComment({
    content, id, postId,
  })
    .then(() => res.json({ massage: 'comment added successfully' }))
    .catch((err) => console.log(err));
};

module.exports = createComment;
