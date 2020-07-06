const { Router } = require('express');

const lessonRouter = Router();

const { lessonController } = require('../controllers');
const { lessonMiddlewares: { isLessonExist, isLessonValid } } = require('../middlewares');

lessonRouter.post('/', isLessonValid, lessonController.create);
lessonRouter.get('/', lessonController.getAll);
lessonRouter.get('/:id', isLessonExist, lessonController.getOne);
lessonRouter.put('/:id', isLessonExist, isLessonValid, lessonController.update);
lessonRouter.delete('/:id', isLessonExist, lessonController.delete);

module.exports = lessonRouter;
