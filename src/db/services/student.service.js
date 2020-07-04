const { StudentModel } = require('../../models');

module.exports = {
  create: (student) => {
    const studentToCreate = new StudentModel(student);

    return studentToCreate.save();
  },

  getAll: () => StudentModel.find(),

  getOne: (id) => StudentModel.findById(id),

  update: (student, update) => StudentModel.findByIdAndUpdate(student, update),

  delete: (params) => StudentModel.findByIdAndDelete(params)
};
