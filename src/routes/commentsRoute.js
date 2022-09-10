require('env2')('.env');
const commentsRoute = require('express').Router();
const {
  createComment, auth, getPostById, getCommentsById,
} = require('../controllers');

const { authenticateToken } = require('../middleware');

commentsRoute.get('/auth', auth);

commentsRoute.get('/post/:id', getPostById);
commentsRoute.get('/comments/:id', getCommentsById);

commentsRoute.post('/comment', authenticateToken, createComment);
commentsRoute.get('/postpage/:id', (req, res, next) => {
  const { id } = req.body.params;
  postById(id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
});

module.exports = commentsRoute;
