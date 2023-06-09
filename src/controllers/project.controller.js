const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { projectService } = require('../services');

const createProject = catchAsync(async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(httpStatus.CREATED).send(project);
});

const getParticularProject = catchAsync(async (req, res) => {
  const project = await projectService.getParticularProject(req.params.projectId);
  res.status(httpStatus.FOUND).send(project);
});

const getAllProjects = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const project = await projectService.getAllProjects(filter, options);
  res.send(project);
});

module.exports = {
  createProject,
  getParticularProject,
  getAllProjects,
};
