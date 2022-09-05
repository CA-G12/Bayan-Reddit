const bcrypt = require('bcryptjs');

const comparePass = (password, hash) => bcrypt.compare(password, hash);

module.exports = comparePass;
