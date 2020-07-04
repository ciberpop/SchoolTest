const { model, Schema } = require('mongoose');

const { tableNamesEnum: { GROUP, STUDENT } } = require('../constants');

const groupSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  students: [
    {
      studentId: {
        type: Schema.Types.ObjectId,
        ref: STUDENT,
        required: true
      }
    }
  ]
});

module.exports = model(GROUP, groupSchema);
