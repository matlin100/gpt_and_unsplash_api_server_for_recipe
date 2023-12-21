const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const upload = require('../utils/multerConfig'); // Use the configured Multer instance

// Existing recipe routes
router.post('/byType', recipeController.getRecipesByTypeAndAmount);

router.post('/byMood', recipeController.getRecipesFromMood);
// New route for image analysis
router.post('/analyze-image', upload.single('image'), recipeController.getRecipesFromImage);



module.exports = router;
