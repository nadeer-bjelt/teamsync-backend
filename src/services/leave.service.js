// const httpStatus = require('http-status');
const httpStatus = require('http-status');
const { Leave } = require('../models');
const ApiError = require('../utils/ApiError');
// const ApiError = require('../utils/ApiError');

/**
 * get a particular leave
 * @param {ObjectId} leaveId
 * @returns {Promise<leave>}
 */
const getParticularLeaveById = async (leaveId) => {
  return Leave.findById(leaveId);
};
/**
 * delete a leave
 * @param {ObjectId} leaveId
 * @returns {Promise<leave>}
 */
const deleteLeave = async (leaveId) => {
  return Leave.findByIdAndDelete(leaveId);
};
// /**
//  *
//  * @param {ObjectId} user
//  * @returns {Promise<leaves>}
//  */
// const getLeavesByUserId = async (user) => {
//   // console.log(userId);
//   const leaves = await Leave.find({ user });
//   console.log('server', leaves);
//   return leaves;
// };
/**
 * update leave
 * @param {ObjectId} leaveId
 * @param {ObjectId} leaveBody
 * @returns {Promise<leave>}
 */
const updateLeave = async (leaveId, updateBody) => {
  const leave = await getParticularLeaveById(leaveId);
  if (!leave) {
    throw new ApiError(httpStatus.NOT_FOUND);
  }
  await Leave.findByIdAndUpdate(leaveId, { ...updateBody }, { new: true });
  return leave;
};
/**
 * get all leaves
 * @param {object} filter
 * @param {object}options
 * @param {object} [options.sortBy]
 * @param {object} [options.limit]
 * @param {object} [options.page]
 * @returns {promise<leaves>}
 */
const getAllLeave = async (filter, options) => {
  const leaves = await Leave.paginate(filter, options);
  return leaves;
};
module.exports = {
  getParticularLeaveById,
  deleteLeave,
  getAllLeave,
  // getLeavesByUserId,
  updateLeave,
};
