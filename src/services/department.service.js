const httpStatus = require('http-status');
const { Department } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a new department
 * @param {Object} departmentBody
 * @returns {Promise<Department>}
 */
const createDepartment = async (departmentBody) => {
  // console.log(departmentBody);
  return Department.create(departmentBody);
};

/**
 * delete department by Id
 * @param {Object} departmentId
 * @returns {Promise<User>}
 */
const deleteDepartmentById = async (departmentId) => {
  //   department=await getDepartmentById( departmentId)
  // if(!department){
  //   throw new ApiError(httpStatus.NOT_FOUND,' not found');
  // }

  return Department.findByIdAndDelete(departmentId);
};

/**
 Get department by ID
 @param {ObjectId} departmentId
 @returns {Promise<Department>}
 */
const getDepartmentById = async (departmentId) => {
  return Department.findById(departmentId);
};

/**
 * Update a particular department
 * @param {ObjectId} departmentId
 * @param {Object} updateBody
 * @returns {Promise<Department>}
 */
const updateDepartment = async (departmentId, updateBody) => {
  const department = await getDepartmentById(departmentId);
  if (!department) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Department not Found');
  }
  await Department.findByIdAndUpdate(departmentId, { ...updateBody }, { new: true });
  return department;
};

/**
 * get departments
 * @param {Object} filter
 * @param {Object} options
 * @param {string} [options.sortBy]
 * @param {number} [options.limit]
 * @param {number} [option.page]
 * @returns {Promise<QueryResult>}
 */
const queryDepartments = async (filter, options) => {
  const departments = await Department.paginate(filter, options);
  return departments;
};

module.exports = {
  createDepartment,
  getDepartmentById,
  deleteDepartmentById,
  updateDepartment,
  queryDepartments,
};
