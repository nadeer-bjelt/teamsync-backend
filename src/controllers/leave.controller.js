const httpStatus = require('http-status');
// const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { leaveService } = require('../services');
const pick = require('../utils/pick');

const getParticularLeaveById = catchAsync(async (req, res) => {
  const leaves = await leaveService.getParticularLeaveById(req.params.leaveId);
  res.status(httpStatus.FOUND).send(leaves);
});
const deleteLeave = catchAsync(async (req, res) => {
  await leaveService.deleteLeave(req.params.leaveId);
  res.status(httpStatus.NO_CONTENT).send();
});
// const getLeavesByUserId = catchAsync(async (req, res) => {
//   const leaves = await leaveService.getLeavesByUserId(req.params.userId);
//   console.log('leavedata by user', leaves);
//   res.status(httpStatus.FOUND).send(leaves);
// });
const updateLeave = catchAsync(async (req, res) => {
  const leave = await leaveService.updateLeave(req.params.leaveId, req.body);
  res.send(leave);
});
const getAllLeave = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['user']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const leaves = await leaveService.getAllLeave(filter, options);
  res.status(httpStatus.FOUND).send(leaves);
});
module.exports = {
  getParticularLeaveById,
  deleteLeave,
  getAllLeave,
  // getLeavesByUserId,
  updateLeave,
};
