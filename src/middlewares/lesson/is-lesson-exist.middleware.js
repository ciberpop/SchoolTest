const Joi = require('joi');

const {
  responseStatusCodesEnum: { BAD_REQUEST, NOT_FOUND: NOT_FOUND_CODE },
  responseCustomErrorsEnum: { NOT_VALID, NOT_FOUND }
} = require('../../constants');
const { ErrorHandler } = require('../../errors');
const { services: { lessonService } } = require('../../db');
const { idValidationSchema } = require('../../validators');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { error } = Joi.validate(id, idValidationSchema);

    if (error) {
      return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));
    }

    const lesson = await lessonService.getOne(id);

    if (!lesson) {
      return next(new ErrorHandler(NOT_FOUND.message, NOT_FOUND_CODE, NOT_FOUND.customCode));
    }

    req.lesson = lesson;

    next();
  } catch (e) {
    next(e);
  }
};
