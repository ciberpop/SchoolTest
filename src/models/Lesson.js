const { model, Schema } = require('mongoose');

const { tableNamesEnum: { GROUP, LESSON, TEACHER } } = require('../constants');

const lessonSchema = new Schema({
    theme: {
        type: String,
        required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: TEACHER,
        required: true
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: GROUP,
        required: true
    },
    classroom: {
        type: Number,
        required: true
    },
    startAt: {
        type: String,
        required: true
    },
    endAt: {
        type: String,
        required: true
    }
});

module.exports = model(LESSON, lessonSchema);
