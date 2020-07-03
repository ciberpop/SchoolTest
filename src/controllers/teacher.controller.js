const { responseStatusCodesEnum: { CREATED, NO_CONTENT } } = require('../constants');
const { services: { teacherService } } = require('../db');

module.exports = {
  create: async (req, res, next) => {
    try {
      const teacher = req.body;

      await teacherService.create(teacher);

      res.sendStatus(CREATED);
    } catch(e) {
      next(e);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const teachers = await teacherService.getAll();

      res.json(teachers);
    } catch(e) {
      next(e);
    }
  },

  getOne: async (req, res, next) => {
    try {
      res.json(req.teacher);
    } catch(e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedTeacher = req.body;

      await teacherService.update(id, updatedTeacher);

      res.json(updatedTeacher);
    } catch(e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      await teacherService.delete(id);

      res.sendStatus(NO_CONTENT);
    } catch(e) {
      next(e);
    }
  }
};
