require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, DATABASE_URL, DEV_DB_URL, TEST_DB_URL,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'prod':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'dev':
    connectionString = DEV_DB_URL;
    break;
  case 'test':
    connectionString = TEST_DB_URL;
    break;
  default:
    throw new Error('invalid db url');
}

const connection = new Pool({
  connectionString,
  ssl,
  
});

module.exports = connection;
('commet 1 content',1,2),
('commet 2 content',2,3),
('commet 3 content for post 1',1,1),
('commet 4 content',2,1),
('commet 5 content for post 2',1,2),
('commet 6 content',2,3);