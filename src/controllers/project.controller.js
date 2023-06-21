const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { projectService } = require('../services');

const createProject = catchAsync(async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(httpStatus.CREATED).send(project);
});

const getAllProjects = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const project = await projectService.getAllProjects(filter, options);
  res.send(project);
});
const getParticularProject = catchAsync(async (req, res) => {
  const project = await projectService.getParticularProject(req.params.projectId);
  res.status(httpStatus.FOUND).send(project);
});
const getProjectByDepartmentId = catchAsync(async (req, res) => {
  const project = await projectService.getProjectByDepartmentId(req.params.departmentId);
  // console.log(project);
  res.status(httpStatus.FOUND).send(project);
});

const updateProject = catchAsync(async (req, res) => {
  // console.log('hi');
  const project = await projectService.updateProject(req.params.projectId, req.body);
  res.send(project);
});

const deleteProject = catchAsync(async (req, res) => {
  const project = await projectService.deleteProject(req.params.projectId);
  res.status(httpStatus.GONE).send('deleted');
});

module.exports = {
  updateProject,
  deleteProject,
  createProject,
  getParticularProject,
  getProjectByDepartmentId,
  getAllProjects,
};
