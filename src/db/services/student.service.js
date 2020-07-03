const { StudentModel } = require('../../models');

module.exports = {
  create: (student) => {
    const studentToCreate = new StudentModel(student);

    return studentToCreate.save();
  },

  getAll: () => {
    return StudentModel.find();
  },

  getOne: (id) => {
    return StudentModel.findById(id);
  },

  update: (teacher, update) => {
    return StudentModel.findByIdAndUpdate(teacher, update);
  },

  delete: (params) => {
    return StudentModel.findByIdAndDelete(params);
  }
};
