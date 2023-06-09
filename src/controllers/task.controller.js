const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { taskService } = require('../services');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');

const createTask = catchAsync(async (req, res) => {
  const task = await taskService.createTask(req.body);
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
module.exports = {
  createTask,
  getTaskById,
  getAllTasks,
};
