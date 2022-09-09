const connection = require('../../config/connection');

const addComment = ({ content, id, postId }) => {
  console.log(content, id, postId);
  const sql = {
    text: ' INSERT INTO comments(content, user_id, post_id) VALUES($1, $2, $3) RETURNING *, (select u.user_name from users u where u.id = comments.user_id) as user_name',
    values: [content, id, postId],
  };
  return connection.query(sql);
};
module.exports = { addComment };
