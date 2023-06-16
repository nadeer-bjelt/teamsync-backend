const Joi = require('joi');
const { objectId } = require('./custom.validation');

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

const deleteDepartment = {
  params: Joi.object().keys({
    departmentId: Joi.string().custom(objectId),
  }),
};

const getDepartmentById = {
  params: Joi.object().keys({
    departmentId: Joi.string().custom(objectId),
  }),
};

const updateDepartment = {
  params: Joi.object().keys({
    departmentId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
  }),
};

const getDepartments = {
  query: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
module.exports = {
  createDepartment,
  getDepartmentById,
  deleteDepartment,
  updateDepartment,
  getDepartments,
};
