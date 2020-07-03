const { Router } = require('express');
const teacherRouter = Router();

const { teacherController } = require('../controllers');
const { teacherMiddlewares: { isTeacherValid, isTeacherExist } } = require('../middlewares');

teacherRouter.post('/', isTeacherValid, teacherController.create);
teacherRouter.get('/', teacherController.getAll);
teacherRouter.get('/:id', isTeacherExist, teacherController.getOne);
teacherRouter.put('/:id', isTeacherExist, isTeacherValid, teacherController.update);
teacherRouter.delete('/:id', isTeacherExist, teacherController.delete);

module.exports = teacherRouter;
