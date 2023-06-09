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

const getParticularProject = {
  params: Joi.object().keys({
    projectId: Joi.string().custom(objectId),
  }),
};

const getAllProjects = {
  query: Joi.object().keys({
    title: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const updateProject = {
  params: Joi.object().keys({
    projectId: Joi.string().custom(objectId),
  }),
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
  getParticularProject,
  getAllProjects,
  updateProject,
};
