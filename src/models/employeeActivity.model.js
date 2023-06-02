const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const employeeActivitySchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    activityType: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    attachments: {
      type: [String],
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
employeeActivitySchema.plugin(toJSON);
employeeActivitySchema.plugin(paginate);

const EmployeeActivity = mongoose.model('EmployeeActivity', employeeActivitySchema);

module.exports = EmployeeActivity;
