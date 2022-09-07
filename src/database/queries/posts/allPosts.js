const connection = require('../../config/connection');

const allPosts = () => connection.query(
  'select p.id, p.title, p.content, p.img, p.date, u.id ,u.user_name, (select count(c.id) from comments c where c.post_id =p.id) as commentCount from posts as p JOIN users as u on u.id = p.user_id;',
);

module.exports = allPosts;
