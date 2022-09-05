const connection = require('../../config/connection');

const userById = (id) => connection.query('SELECT * FROM users WHERE id = $1', [id]);

module.exports = { userById };
