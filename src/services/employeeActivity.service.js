const httpStatus = require('http-status');
const { EmployeeActivity } = require('../models');
const ApiError = require('../utils/ApiError');
const { filter } = require('compression');
const { options } = require('joi');

/**
 * Create a employee activity
 * @param {object} employeeBody
 * @returns {Promise<EmployeeActivity>}
 */
const createEmployeeActivity = async (employeeBody) => {
  return await EmployeeActivity.create(employeeBody);
};

/**
 * get a particular EmployeeActivity
 * @param {ObjectId} employeeActivityId
 * @returns {Promise<EmployeeActivity>}
 */
const getEmployeeActivityById = async (employeeActivityId) => {
  return await EmployeeActivity.findById(employeeActivityId);
};

/**
 * delete a employee activity by id
 * @param {ObjectId} employeeActivityId
 * @returns {Promise<EmployeeActivity>}
 */
const deleteEmployeeActivityById = async (employeeActivityId) => {
  const employee = await getEmployeeActivityById(employeeActivityId);
  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'employee activity by this id is not founded');
  }
  return await EmployeeActivity.findByIdAndDelete(employeeActivityId);
};

/**
 * @param {ObjectId} employeeActivityId
 * @param {object} updateBody
 * @returns {Promise<EmployeeActivity>}
 */
const updateEmployeeActivity = async (employeeActivityId, updateBody) => {
  const employee = await getEmployeeActivityById(employeeActivityId);
  if (!employee) {
    throw new ApiError(httpStatus.NOT_FOUND, 'employee activity by this id is not founded');
  }
  return await EmployeeActivity.findByIdAndUpdate(employeeActivityId, { ...updateBody }, { new: true });
};

/**
 * get all employeeActivity
 *@param {object} filter
 * @param {object} options
 * @param {string} [options.sortBy]
 * @param {number} [options.limit]
 * @param {number} [option.page]
 * @returns {Promise<EmployeeActivity>}
 */
const getAllEmployeeActivity = async (filter, options) => {
  const employee = await EmployeeActivity.paginate(filter, options);
  return employee;
};

module.exports = {
  createEmployeeActivity,
  getEmployeeActivityById,
  deleteEmployeeActivityById,
  updateEmployeeActivity,
  getAllEmployeeActivity,
};
