const { addVote } = require('../database/queries');

const votes = (req, res, next) => {
  const {
    voteValue, id, postId,
  } = req.body;
  addVote({ voteValue, id, postId }).then(res.status(200).json({
    status: 200,
    message: 'your voted Saved successfully',
  }))
    .catch((err) => next(err));
};

module.exports = votes;
