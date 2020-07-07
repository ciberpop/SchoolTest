const { model, Schema } = require('mongoose');

const { tableNamesEnum: { GROUP } } = require('../constants');

const groupSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = model(GROUP, groupSchema);
