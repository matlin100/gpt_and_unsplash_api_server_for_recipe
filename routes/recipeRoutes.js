// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.post('/byType', recipeController.getRecipesByTypeAndAmount);

module.exports = router;
