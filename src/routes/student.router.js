const { Router } = require('express');

const studentRouter = Router();

const { studentController } = require('../controllers');
const { studentMiddlewares: { isStudentExist, isStudentValid } } = require('../middlewares');

studentRouter.post('/', isStudentValid, studentController.create);
studentRouter.get('/', studentController.getAll);
studentRouter.get('/:id', isStudentExist, studentController.getOne);
studentRouter.put('/:id', isStudentExist, isStudentValid, studentController.update);
studentRouter.delete('/:id', isStudentExist, studentController.delete);

module.exports = studentRouter;
