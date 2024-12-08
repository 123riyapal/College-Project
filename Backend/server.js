const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', contactRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000,  // Increase timeout duration
    socketTimeoutMS: 45000  // Set socket timeout
  })
    .then(() => {
      console.log('MongoDB connected successfully');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
