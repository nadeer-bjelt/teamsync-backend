const express = require('express');
const validate = require('../../middlewares/validate');
const taskValidation = require('../../validations/task.validation');
const taskController = require('../../controllers/task.controller');

const router = express.Router();

router.route('/').post(validate(taskValidation.createTask), taskController.createTask);

module.exports = router;
