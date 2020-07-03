const { responseStatusCodesEnum: { CREATED, NO_CONTENT } } = require('../constants');
const { services: { studentService } } = require('../db');

module.exports = {
  create: async (req, res, next) => {
    try {
      const student = req.body;

      await studentService.create(student);

      res.sendStatus(CREATED);
    } catch(e) {
      next(e);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const students = await studentService.getAll();

      res.json(students);
    } catch(e) {
      next(e);
    }
  },

  getOne: async (req, res, next) => {
    try {
      res.json(req.student);
    } catch(e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedStudent = req.body;

      await studentService.update(id, updatedStudent);

      res.json(updatedStudent);
    } catch(e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      await studentService.delete(id);

      res.sendStatus(NO_CONTENT);
    } catch(e) {
      next(e);
    }
  }
};
