require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const { appConfigs: { PORT } } = require('./config');
const { connectToDB } = require('./db');
const { logger } = require('./helpers');
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

connectToDB();

app.use(router);

app.use('*', (err, req, res, next) => {
    logger.error({
        method: req.method,
        url: req.path,
        data: req.body,
        time: new Date(),
        message: err.message
    })

    next(err);
});

app.use('*', (err, req, res, next) => {
  res
    .status(err.status || 400)
    .json({
      message: err.message,
      code: err.customCode
    });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}...`);
});
