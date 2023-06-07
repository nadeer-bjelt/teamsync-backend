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
  res.status(httpStatus.NO_CONTENT).send('department deleted');
})


const getDepartmentById = catchAsync(async (req, res) => {
  const department = await departmentService.getDepartmentById(req.params.departmentId);
  if (!department) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Department not found');
  }
  res.send(department);
});

const getDepartments=catchAsync(async(req,res)=>{
  const filter=pick(req.query,['name']);
  const options=pick(req.query,['sortBy','limit','page']);
  const result=await departmentService.queryDepartments(filter,options);
  res.send(result)
})
module.exports = {
  createDepartment,
  getDepartmentById,
  deleteDepartment,
  getDepartments
};
