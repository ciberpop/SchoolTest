const { Router } = require('express');
const router = Router();

const studentRouter = require('./student.router');
const teacherRouter = require('./teacher.router');

router.use('/students', studentRouter);
router.use('/teachers', teacherRouter);

module.exports = router;
