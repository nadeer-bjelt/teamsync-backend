const httpStatus = require('http-status');
const { Task, Project } = require('../models');
const ApiError = require('../utils/ApiError');
const { projectService } = require('.');
/**
 * create new task
 * @param {Object} taskBody
 * @returns {Promise<Task>}
 */

const createTask = async (taskBody) => {
  const newTask = await Task.create(taskBody);
  await Project.findByIdAndUpdate(newTask.projectId, { $push: { tasks: newTask._id } }, { new: true });
  console.log(newTask);
  return newTask;
};
/**
 * get task by its Id
 * @param {ObjectId} taskId
 * @returns {Promise<taskId>}
 */
const getTaskById = async (taskId) => {
  return Task.findById(taskId);
};
/**
 *
 * @param {Object} filter
 * @param {Object} options
 * @param {String} [options.sortBy]
 * @param {number} [options.limit]
 * @param {number} [options.page]
 * @returns {Promise<getAllTasks>}
 */
const getAllTasks = async (filter, options) => {
  const tasks = await Task.paginate(filter, options);
  return tasks;
};

/**
 * @param {ObjectId} taskId
 * @param {Object} updateBody
 * @returns {Promise<Task>}
 */
const updateTask = async (taskId, updateBody) => {
  const task = await getTaskById(taskId);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'task not found');
  }
  await Task.findByIdAndUpdate(taskId, { ...updateBody }, { new: true });
  return task;
};
const deleteTask = async (taskId) => {
  const task = await getTaskById(taskId);
  console.log(task);
  if (!task) {
    throw new ApiError(httpStatus.NOT_FOUND, 'task not found');
  }
  await Task.findByIdAndDelete(taskId);
  await Project.findByIdAndUpdate(task.projectId, { $pull: { tasks: task._id } }, { new: true });
};
module.exports = {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask,
};
