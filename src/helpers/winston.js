const path = require('path');
const winston = require('winston');

const options = {
  errorFile: {
    filename: path.join(__dirname, '..', 'logs', 'error.log'),
    handleExceptions: true,
    json: true
  }
};

module.exports = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File(options.errorFile)
  ],
  exitOnError: true
});
