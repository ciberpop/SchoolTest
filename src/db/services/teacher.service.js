const { TeacherModel } = require('../../models');

module.exports = {
  create: (teacher) => {
    const teacherToCreate = new TeacherModel(teacher);

    return teacherToCreate.save();
  },

  getAll: () => TeacherModel.find(),

  getOne: (id) => TeacherModel.findById(id),

  update: (teacher, update) => TeacherModel.findByIdAndUpdate(teacher, update),

  delete: (params) => TeacherModel.findByIdAndDelete(params)
};
