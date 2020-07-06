const { Router } = require('express');

const router = Router();

const groupRouter = require('./group.router');
const lessonRouter = require('./lesson.router');
const studentRouter = require('./student.router');
const teacherRouter = require('./teacher.router');

router.use('/groups', groupRouter);
router.use('/lessons', lessonRouter);
router.use('/students', studentRouter);
router.use('/teachers', teacherRouter);

module.exports = router;
