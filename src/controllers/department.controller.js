const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { departmentService } = require('../services');

const createDepartment = catchAsync(async (req, res) => {
  const department = await departmentService.createDepartment(req.body);
  res.status(httpStatus.CREATED).send(department);
});

const deleteDepartment = catchAsync(async (req, res) => {
  await departmentService.deleteDepartmentById(req.params.departmentId)
  res.status(httpStatus.NO_CONTENT).send();
})

module.exports = { createDepartment, deleteDepartment };
