const { model, Schema } = require('mongoose');

const { tableNamesEnum: { GROUP, STUDENT } } = require('../constants');

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  groupId: {
    type: Schema.Types.ObjectId,
    ref: GROUP,
    required: true
  }
});

module.exports = model(STUDENT, studentSchema);
