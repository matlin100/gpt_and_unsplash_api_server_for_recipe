const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const upload = require('../utils/multerConfig'); // Use the configured Multer instance


router.post('/byType', recipeController.getRecipesByTypeAndAmount);

router.post('/byMood', recipeController.getRecipesFromMood);

router.post('/analyze-image', upload.single('image'), recipeController.getRecipesFromImage);

router.post('/byIngredients', recipeController.getRecipesByIngredients);

module.exports = router;
