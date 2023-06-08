const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createProject = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    managerId: Joi.string(),
    startDate: Joi.date(),
    endDate: Joi.date(),
    status: Joi.string(),
    priority: Joi.string(),
    teamMembers: Joi.array(),
    tasks: Joi.array(),
    departmentId: Joi.string(),
    attachments: Joi.array(),
  }),
};

module.exports = {
  createProject,
};
