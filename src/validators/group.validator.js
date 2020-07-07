const Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string().trim().min(2).max(15)
    .required()
});
