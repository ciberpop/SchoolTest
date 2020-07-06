const Joi = require('joi');

module.exports = Joi.object().keys({
  theme: Joi.string().trim().min(2).max(150)
    .required(),
  teacherId: Joi.string().trim().min(2).max(60)
    .required(),
  groupId: Joi.string().trim().min(2).max(60)
    .required(),
  classroom: Joi.number().min(1).max(10000).required(),
  startAt: Joi.string().min(2).max(20).required(),
  endAt: Joi.string().min(2).max(20).required()
});
