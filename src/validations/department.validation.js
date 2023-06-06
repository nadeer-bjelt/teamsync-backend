const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createDepartment = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    managerId: Joi.string().required(),
    members: Joi.array(),
    projects: Joi.array(),
    tasks: Joi.array(),
  }),
};

module.exports = { createDepartment };