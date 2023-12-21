const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Body parsing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your route files
const recipeRoutes = require('./routes/recipeRoutes');
const imageRoutes = require('./routes//imageRoutes');
// Use your routes
app.use('/recipes', recipeRoutes); // Adjust the base path as needed
app.use('/api', imageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
