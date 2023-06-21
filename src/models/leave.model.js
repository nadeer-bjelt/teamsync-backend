const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const leaveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  totalLeaves: {
    type: Number,
    default: 0,
  },
  casualLeaves: {
    type: Number,
    default: 0,
  },
  sickLeaves: {
    type: Number,
    default: 0,
  },
  balanceLeaves: {
    type: Number,
    default: 0,
  },
  leavesTaken: [
    {
      date: {
        type: Date,
        required: true,
      },
      leaveType: {
        type: String,
        enum: ['Casual', 'Sick'],
        required: true,
      },
      duration: {
        type: Number,
        default: 1,
      },
    },
  ],
  // Add additional advanced level fields as per your requirements
});

// add plugin that converts mongoose to json
leaveSchema.plugin(toJSON);
leaveSchema.plugin(paginate);

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;
