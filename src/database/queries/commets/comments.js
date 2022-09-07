const connection = require('../../config/connection');

const commentsByPostId = ({ postId }) => connection.query({
  text: 'SELECT * FROM comments WHERE post_id = $1;',
  value: [postId],
});

module.exports = commentsByPostId;
