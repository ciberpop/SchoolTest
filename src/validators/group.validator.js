const Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string().trim().min(2).max(15)
    .required(),
  students: Joi.array().items(Joi.object({ studentId: Joi.string() }))
    .required()
});
