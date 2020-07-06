const { LessonModel } = require('../../models');

module.exports = {
  create: (lesson) => {
    const lessonToCreate = new LessonModel(lesson);

    return lessonToCreate.save();
  },

  getAll: () => LessonModel.find(),

  getOne: (id) => LessonModel.findById(id),

  update: (lesson, update) => LessonModel.findByIdAndUpdate(lesson, update),

  delete: (params) => LessonModel.findByIdAndDelete(params)
};
