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
  // console.log('newProject', newProject);
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
  // console.log(departmentId);
  const result = await Project.find({ departmentId });
  // console.log(result);
  return result;
};

/**
 * get all Projects
 * @param {object} filter
 * @param {object} options
 * @param {object} [options.sortBy]
 * @param {object} [option.limit]
 * @param {object} [options.page]
 * @returns {Promise<Project>}
 */
const getAllProjects = async (filter, options) => {
  const projects = await Project.paginate(filter, options);
  return projects;
};
/**
 * update a particular project
 * @param {ObjectId} projectId
 * @param {object} projectBody
 * @returns {Promise<Project>}
 */
const updateProject = async (projectId, projectBody) => {
  const project = await getParticularProject(projectId);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not Found');
  }
  await Project.findByIdAndUpdate(projectId, { ...projectBody }, { new: true });
  return project;
};
/**
 * delete project by
 * @param {ObjectId} projectId
 * @returns {Promise<Project>}
 */
const deleteProject = async (projectId) => {
  const project = await getParticularProject(projectId);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'project not found to delete');
  }
  await Project.findByIdAndDelete(projectId);
  await Department.findByIdAndUpdate(project.departmentId, { $pull: { projects: project._id } }, { new: true });
  return project;
};
module.exports = {
  createProject,
  getParticularProject,
  getProjectByDepartmentId,
  getAllProjects,
  updateProject,
  deleteProject,
};
