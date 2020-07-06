const groupValidationSchema = require('./group.validator');
const idValidationSchema = require('./id.validator');
const lessonValidationSchema = require('./lesson.validator');
const studentValidationSchema = require('./student.validator');
const teacherValidationSchema = require('./teacher.validator');

module.exports = {
  groupValidationSchema,
  idValidationSchema,
  lessonValidationSchema,
  studentValidationSchema,
  teacherValidationSchema
};
