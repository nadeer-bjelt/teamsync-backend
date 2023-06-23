const express = require('express');
const validate = require('../../middlewares/validate');
const employeeActivityValidation = require('../../validations/employeeActivity.validation');
const employeeActivityController = require('../../controllers/employeeActivity.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(employeeActivityValidation.createEmployeeActivity), employeeActivityController.createEmployeeActivity)
  .get(validate(employeeActivityValidation.getALLEmployeeActivity), employeeActivityController.getAllEmployeeActivity);

router
  .route('/:employeeActivityId')
  .get(validate(employeeActivityValidation.getEmployeeActivityById), employeeActivityController.getEmployeeActivityById)
  .delete(
    validate(employeeActivityValidation.deleteEmployeeActivityById),
    employeeActivityController.deleteEmployeeActivityById
  )
  .patch(validate(employeeActivityValidation.updateEmployeeActivity), employeeActivityController.updateEmployeeActivity);

module.exports = router;
