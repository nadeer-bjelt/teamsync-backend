const httpStatus = require('http-status');
const { Project, Department } = require('../models');
const ApiError = require('../utils/ApiError');
const { departmentService } = require('../services');
const { options } = require('joi');

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
  return await Project.findById(projectId);
};

/**
 * get all departments
 * @param {object} filter
 * @param {object} options
 * @param {object} [options.sortBy]
 * @param {object} [option.limit]
 * @param {object} [options.page]
 */
const getAllProjects = async (filter, options) => {
  const projects = await Project.paginate(filter, options);
  return projects;
};

module.exports = {
  createProject,
  getParticularProject,
  getAllProjects,
};
