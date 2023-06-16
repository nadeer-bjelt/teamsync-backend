const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTask = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    projectId: Joi.string(),
    assigneeId: Joi.string().required(),
    managerId: Joi.string().required(),
    startDate: Joi.date().required(),
    dueDate: Joi.date().required(),
    priority: Joi.string(),
    status: Joi.string(),
    progress: Joi.number(),
    estimatedHours: Joi.number(),
    actualHours: Joi.number(),
    attachments: Joi.array(),
    comments: Joi.array(),
  }),
};
const getTaskById = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
};
const getAllTasks = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
const updateTask = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
  }),
};
const deleteTask = {
  params: Joi.object().keys({
    taskId: Joi.string().custom(objectId),
  }),
};
module.exports = {
  createTask,
  getTaskById,
  getAllTasks,
  updateTask,
  deleteTask,
};
