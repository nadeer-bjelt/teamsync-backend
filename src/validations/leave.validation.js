const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getParticularLeaveById = {
  params: Joi.object().keys({
    leaveId: Joi.string().custom(objectId),
  }),
};
const deleteLeave = {
  params: Joi.object().keys({
    leaveId: Joi.string().custom(objectId),
  }),
};
const getLeavesByUserId = {
  params: Joi.object().keys({
    user: Joi.string().custom(objectId),
  }),
};
const updateLeave = {
  params: Joi.object().keys({
    leaveId: Joi.string().custom(objectId),
  }),
  body: Joi.object().keys({
    year: Joi.number(),
    totalLeaves: Joi.number(),
    casualLeaves: Joi.number(),
    sickLeaves: Joi.number(),
    balanceLeaves: Joi.number(),
    leavesTaken: Joi.array().items(
      Joi.object({
        date: Joi.date().required(),
        leaveType: Joi.string().required(),
        duration: Joi.number(),
      })
    ),
  }),
};
const getAllLeaves = {
  query: Joi.object().keys({
    user: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};
module.exports = {
  getParticularLeaveById,
  deleteLeave,
  getLeavesByUserId,
  updateLeave,
  getAllLeaves,
};
