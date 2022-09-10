const connection = require('../../config/connection');

const addVote = ({ voteValue, id, postId }) => connection.query({
  text: ' INSERT INTO votes (vote_value, user_id, post_id) VALUES ($1, $2 ,$3) RETURNING *;',
  values: [voteValue, id, postId],
});

module.exports = addVote;
