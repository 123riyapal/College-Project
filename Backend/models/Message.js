const mongoose = require('mongoose');

// Create Schema for the Contact form
const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
