// routes/recipeRoutes.js
const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');


router.get('/byType/:type/:amount', recipeController.getRecipesByTypeAndAmount);

module.exports = router;
