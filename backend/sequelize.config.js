require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'password',
    database: process.env.DB_NAME || 'atendly_db',
    host: process.env.DB_HOST || 'db',
    dialect: 'mysql'
  }
};
