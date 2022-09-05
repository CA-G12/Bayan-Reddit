const bcrypt = require('bcryptjs');

const hashing = (password) => bcrypt.hash(password, 10);

module.exports = hashing;
