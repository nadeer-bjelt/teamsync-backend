const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const projectSchema = new mongoose.Schema(
  {
    title: {
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
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['Planning', 'In Progress', 'Completed'],
      default: 'Planning',
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Medium',
    },
    teamMembers: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'User',
    },
    tasks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Task',
    },
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
    attachments: {
      type: [String],
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
projectSchema.plugin(toJSON);
projectSchema.plugin(paginate);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
