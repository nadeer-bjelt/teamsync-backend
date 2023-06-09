// const httpStatus = require('http-status');
const { Task, Project } = require('../models');

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
module.exports = {
  createTask,
  getTaskById,
};
