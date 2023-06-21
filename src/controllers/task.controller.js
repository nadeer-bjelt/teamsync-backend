const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { taskService } = require('../services');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');

const createTask = catchAsync(async (req, res) => {
  const task = await taskService.createTask(req.body);
  console.log('res');
  res.status(httpStatus.CREATED).send(task);
});

const getTaskById = catchAsync(async (req, res) => {
  const task = await taskService.getTaskById(req.params.taskId);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'task not found');
  }
  res.send(task);
});
const getAllTasks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['title']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await taskService.getAllTasks(filter, options);
  res.send(result);
});
const updateTask = catchAsync(async (req, res) => {
  const task = await taskService.updateTask(req.params.taskId, req.body);
  res.send(task);
});
const deleteTask = catchAsync(async (req, res) => {
  await taskService.deleteTask(req.params.taskId);
  res.status(httpStatus.NO_CONTENT).send();
});
module.exports = {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask,
};
