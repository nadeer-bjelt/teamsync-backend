const express = require('express');
const validate = require('../../middlewares/validate');
const leaveValidation = require('../../validations/leave.validation');
const leaveController = require('../../controllers/leave.controller');

const router = express.Router();
router.route('/').get(validate(leaveValidation.getAllLeaves), leaveController.getAllLeave);
router
  .route('/:leaveId')
  .get(validate(leaveValidation.getParticularLeaveById), leaveController.getParticularLeaveById)
  .delete(validate(leaveValidation.deleteLeave), leaveController.deleteLeave)
  .patch(validate(leaveValidation.updateLeave), leaveController.updateLeave);
// router.route('/user/:user').get(validate(leaveValidation.getLeavesByUserId), leaveController.getLeavesByUserId);
module.exports = router;
