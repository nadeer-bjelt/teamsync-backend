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
  await Department.findByIdAndUpdate(projectBody.departmentId, { $push: { projects: newProject._id } }, { new: true });
  console.log('newProject', newProject);
  return newProject;
};

/**
 * get a particular project
 * @param {ObjectId} projectId
 * @returns {Promise<Project>}
 */
const getParticularProject = async (projectId) => {
  return await Project.findById(projectId);
};

module.exports = {
  createProject,
  getParticularProject,
};
