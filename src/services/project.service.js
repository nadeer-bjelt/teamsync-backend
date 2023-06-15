const httpStatus = require('http-status');
const { Project, Department } = require('../models');
const ApiError = require('../utils/ApiError');
const { departmentService } = require('../services');

/**
 * Create a new Project
 * @param {Object} projectBody
 * @returns {Promise<Project>}
 */
const createProject = async (projectBody) => {
  const newProject = await Project.create(projectBody);
  await Department.findByIdAndUpdate(newProject.departmentId, { $push: { projects: newProject._id } }, { new: true });
  console.log('newProject', newProject);
  return newProject;
};

/**
 * get a particular project
 * @param {ObjectId} projectId
 * @returns {Promise<Project>}
 */
const getParticularProject = async (projectId) => {
  const result = await Project.findById(projectId);
  return result;
};

/**
 * get a project by department id
 * @param {ObjectId} departmentId
 * @returns {Promise<Project>}
 */
const getProjectByDepartmentId = async (departmentId) => {
  console.log(departmentId);
  const result = await Project.find({ departmentId });
  console.log(result);
  return result;
};
module.exports = {
  createProject,
  getParticularProject,
  getProjectByDepartmentId,
};
