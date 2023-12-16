const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import your route files
const recipeRoutes = require('./routes/recipeRoutes');

// Use your routes
app.use('/recipes', recipeRoutes); // Adjust the base path as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
