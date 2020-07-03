const mongoose = require('mongoose');

const { appConfigs: { DB_NAME, MONGODB_URL } } = require('../config');

module.exports = () => {
  mongoose.connect(MONGODB_URL + DB_NAME);

  const db = mongoose.connection;

  db.on('error', (err) => {
    console.log(err);
  });
};
