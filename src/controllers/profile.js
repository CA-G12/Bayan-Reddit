const { profilePosts } = require('../database/queries');

const profile = (req, res, next) => {
  const { id } = req.body;
  profilePosts(id)
    .then((data) => res.json(data.rows))
    .catch((err) => next(err));
};
module.exports = profile;
