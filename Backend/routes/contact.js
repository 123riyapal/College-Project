const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Create new message entry
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    // Save message to MongoDB
    await newMessage.save();

    // Respond with success message
    res.status(201).json({ success: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving message, please try again.' });
  }
});

module.exports = router;
