// File: models/Log.js

const mongoose = require('mongoose');

// Define the Logs schema
const logSchema = new mongoose.Schema({
  action: {
    type: String,
    required: true,
  },
  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  details: {
    type: String,
    required: false,
  },
});

// Create the Log model
const Log = mongoose.model('Log', logSchema);

module.exports = Log;
