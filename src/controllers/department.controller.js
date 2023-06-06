const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { departmentService } = require('../services');

const createDepartment = catchAsync(async (req, res) => {
  const department = await departmentService.createDepartment(req.body);
  res.status(httpStatus.CREATED).send(department);
});

module.exports = { createDepartment };
