const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { employeeActivityService } = require('../services');

const createEmployeeActivity = catchAsync(async (req, res) => {
  const employee = await employeeActivityService.createEmployeeActivity(req.body);
  res.status(httpStatus.CREATED).send(employee);
});

const getEmployeeActivityById = catchAsync(async (req, res) => {
  const result = await employeeActivityService.getEmployeeActivityById(req.params.employeeActivityId);
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Employee Activity Not Found');
  }
  res.send(result);
});

const deleteEmployeeActivityById = catchAsync(async (req, res) => {
  const result = await employeeActivityService.deleteEmployeeActivityById(req.params.employeeActivityId);
  res.status(httpStatus.NO_CONTENT).send();
});

const updateEmployeeActivity = catchAsync(async (req, res) => {
  const result = await employeeActivityService.updateEmployeeActivity(req.params.employeeActivityId, req.body);
  res.status(httpStatus.OK).send(result);
});
module.exports = {
  createEmployeeActivity,
  getEmployeeActivityById,
  deleteEmployeeActivityById,
  updateEmployeeActivity,
};
