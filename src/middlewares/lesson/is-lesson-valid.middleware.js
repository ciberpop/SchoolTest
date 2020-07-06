const Joi = require('joi');

const {
  responseStatusCodesEnum: { BAD_REQUEST },
  responseCustomErrorsEnum: { NOT_VALID }
} = require('../../constants');
const { ErrorHandler } = require('../../errors');
const { lessonValidationSchema } = require('../../validators');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const lesson = req.body;
    const { error } = Joi.validate(lesson, lessonValidationSchema);

    if (error) {
      return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));
    }

    next();
  } catch (e) {
    next(e);
  }
};
