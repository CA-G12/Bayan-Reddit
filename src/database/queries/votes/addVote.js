const connection = require('../../config/connection');

const addVote = ({ votValue, userId, postId }) => connection.query({
  text: ' INSERT INTO votes (vote_value, user_id, post_id) VALUES ($1, $2 ,$3) RETURNING *;',
  values: [votValue, userId, postId],
});

module.exports = addVote;
