const { responseStatusCodesEnum: { CREATED, NO_CONTENT } } = require('../constants');
const { services: { groupService } } = require('../db');

module.exports = {
  create: async (req, res, next) => {
    try {
      const group = req.body;

      await groupService.create(group);

      res.sendStatus(CREATED);
    } catch (e) {
      next(e);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const groups = await groupService.getAll();

      res.json(groups);
    } catch (e) {
      next(e);
    }
  },

  getOne: async (req, res, next) => {
    try {
      res.json(req.group);
    } catch (e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedGroup = req.body;

      await groupService.update(id, updatedGroup);

      res.json(updatedGroup);
    } catch (e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      await groupService.delete(id);

      res.sendStatus(NO_CONTENT);
    } catch (e) {
      next(e);
    }
  }
};
