const connection = require('../../config/connection');

const postById = (id) => connection.query('SELECT p.*, (SELECT SUM(v.vote_value) FROM votes v WHERE v.post_id = p.id) AS votes_counts, (SELECT u.user_name FROM users u WHERE u.id = p.user_id) AS user_name FROM posts p WHERE id = $1', [id]);

module.exports = postById;
