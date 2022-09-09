const connection = require('../../config/connection');

const commentsByPostId = (postId) => connection.query({
  // text: 'select *from comments where   post_id = ($1);',
  text: ' SELECT comments.* ,(select u.user_name from users u where u.id = comments.user_id) as user_name from comments  WHERE post_id =($1);',
  values: [postId],
});
// SELECT comments.* ,(select user_name from user where u.id = comments.user_id) as user_name from comments  WHERE post_id = ($1);

module.exports = commentsByPostId;
