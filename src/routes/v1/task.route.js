const express = require('express');
const validate = require('../../middlewares/validate');
const taskValidation = require('../../validations/task.validation');
const taskController = require('../../controllers/task.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(taskValidation.createTask), taskController.createTask)
  .get(validate(taskValidation.getAllTasks), taskController.getAllTasks);

router.route('/:taskId').get(validate(taskValidation.getTaskById), taskController.getTaskById);
module.exports = router;
