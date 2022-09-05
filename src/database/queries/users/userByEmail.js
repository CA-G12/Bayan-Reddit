const connection = require('../../config/connection');

const userByEmail = ({ Email }) => connection.query('SELECT * FROM users WHERE email = $1', [Email]);

module.exports = { userByEmail };
