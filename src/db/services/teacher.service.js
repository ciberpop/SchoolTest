const { TeacherModel } = require('../../models');

module.exports = {
  create: (teacher) => {
    const teacherToCreate = new TeacherModel(teacher);

    return teacherToCreate.save();
  },

  getAll: () => {
    return TeacherModel.find();
  },

  getOne: (id) => {
    return TeacherModel.findById(id);
  },

  update: (teacher, update) => {
    return TeacherModel.findByIdAndUpdate(teacher, update);
  },

  delete: (params) => {
    return TeacherModel.findByIdAndDelete(params);
  }
};
