const { GroupModel } = require('../../models');

module.exports = {
  create: (group) => {
    const groupToCreate = new GroupModel(group);

    return groupToCreate.save();
  },

  getAll: () => GroupModel.find(),

  getOne: (id) => GroupModel.findById(id),

  update: (group, update) => GroupModel.findByIdAndUpdate(group, update),

  delete: (params) => GroupModel.findByIdAndDelete(params)
};
