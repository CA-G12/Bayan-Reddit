const connection = require('../../config/connection');

const addPost = ({ title, content, img, id }) => {
  const sql = {
    text: 'INSERT INTO posts(title , content , img, user_id) VALUES($1, $2, $3, $4) RETURNING *',
    values: [title, content, img, id],
  };
  return connection.query(sql);
};
module.exports = addPost;
