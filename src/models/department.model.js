const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const departmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    managerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    members: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
    },
    projects: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Project',
    },
    tasks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Task',
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
departmentSchema.plugin(toJSON);
departmentSchema.plugin(paginate);

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
