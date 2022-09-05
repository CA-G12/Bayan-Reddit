const connection = require('../../config/connection');

const userByName = ({ username }) => connection.query('SELECT * FROM users WHERE user_name = $1 ', [username]);

module.exports = { userByName };
