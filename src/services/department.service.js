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

module.exports = { createDepartment };
