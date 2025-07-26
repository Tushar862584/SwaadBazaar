// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(cors());
app.use(express.json());

// Define a main route for the API
// All routes defined in authRoutes will be prefixed with /api/auth
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});