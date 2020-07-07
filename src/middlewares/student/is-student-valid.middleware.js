const Joi = require('joi');

const {
  responseStatusCodesEnum: { BAD_REQUEST },
  responseCustomErrorsEnum: { NOT_VALID }
} = require('../../constants');
const { ErrorHandler } = require('../../errors');
const { studentValidationSchema } = require('../../validators');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const student = req.body;
    const { error } = Joi.validate(student, studentValidationSchema);

    if (error) {
      return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));
    }

    next();
  } catch (e) {
    next(e);
  }
};
