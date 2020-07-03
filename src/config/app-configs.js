module.exports = {
  PORT: process.env.PORT || 5000,

  DB_NAME: process.env.DB_NAME || 'name',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || 'root',

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/'
};
