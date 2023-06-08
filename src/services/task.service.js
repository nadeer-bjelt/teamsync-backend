const httpStatus = require('http-status');
const { Task } = require('../models');

/**
 * create new task
 * @param {Object} taskBody
 * @returns {Promise<Task>}
 */

const createTask = async (taskBody) => {
  return Task.create(taskBody);
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
