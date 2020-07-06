const { responseStatusCodesEnum: { CREATED, NO_CONTENT } } = require('../constants');
const { services: { lessonService } } = require('../db');

module.exports = {
  create: async (req, res, next) => {
    try {
      const lesson = req.body;

      await lessonService.create(lesson);

      res.sendStatus(CREATED);
    } catch (e) {
      next(e);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const lessons = await lessonService.getAll();

      res.json(lessons);
    } catch (e) {
      next(e);
    }
  },

  getOne: async (req, res, next) => {
    try {
      res.json(req.lesson);
    } catch (e) {
      next(e);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedLesson = req.body;

      await lessonService.update(id, updatedLesson);

      res.json(updatedLesson);
    } catch (e) {
      next(e);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      await lessonService.delete(id);

      res.sendStatus(NO_CONTENT);
    } catch (e) {
      next(e);
    }
  }
};
