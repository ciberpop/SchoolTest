const { model, Schema } = require('mongoose');

const { tableNamesEnum: { TEACHER } } = require('../constants');

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    }
});

module.exports = model(TEACHER, teacherSchema);
