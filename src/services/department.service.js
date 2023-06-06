const httpStatus = require('http-status');
const { Department } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a new department
 * @param {Object} departmentBody
 * @returns {Promise<Department>}
 */
const createDepartment = async (departmentBody) => {
  console.log(departmentBody);
  return Department.create(departmentBody);
};

/**
 *Get department by ID
 @param {string} id
 @returns {Promise<Department>}
 */
const getDepartmentById = async (id) => {
  return Department.findById(id);
};

module.exports = {
  createDepartment,
  getDepartmentById,
};
