const Joi = require('joi');

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
module.exports = {
  createTask,
};
