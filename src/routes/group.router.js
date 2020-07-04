const { Router } = require('express');

const groupRouter = Router();

const { groupController } = require('../controllers');
const { groupMiddlewares: { isGroupExist, isGroupValid } } = require('../middlewares');

groupRouter.post('/', isGroupValid, groupController.create);
groupRouter.get('/', groupController.getAll);
groupRouter.get('/:id', isGroupExist, groupController.getOne);
groupRouter.put('/:id', isGroupExist, isGroupValid, groupController.update);
groupRouter.delete('/:id', isGroupExist, groupController.delete);

module.exports = groupRouter;
