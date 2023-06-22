const { objectId } = require('./custom.validation');
const Joi = require('joi');

const createEmployeeActivity = {
  body: Joi.object().keys({
    employeeId: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    activityType: Joi.string().required(),
    date: Joi.date().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    attachments: Joi.array(),
  }),
};

const getEmployeeActivityById = {
  params: Joi.object().keys({
    employeeActivityId: Joi.string().custom(objectId),
  }),
};

const deleteEmployeeActivityById = {
  params: Joi.object().keys({
    employeeActivityId: Joi.string().custom(objectId),
  }),
};

const updateEmployeeActivity = {
  params: Joi.object().keys({
    employeeActivityId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    activityType: Joi.string().required(),
    date: Joi.date().required(),
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    attachments: Joi.array(),
  }),
};
module.exports = {
  createEmployeeActivity,
  getEmployeeActivityById,
  deleteEmployeeActivityById,
  updateEmployeeActivity,
};
