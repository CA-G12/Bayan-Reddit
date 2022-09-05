const { addUser } = require('./addUser');
const { userById } = require('./userById');
const { userByName } = require('./userByName');
const { userByEmail } = require('./userByEmail');

module.exports = {
  addUser, userById, userByName, userByEmail,
};
