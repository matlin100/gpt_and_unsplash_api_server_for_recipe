// controllers/recipeController.js
const GPTrecipeService = require('../services/GPTrecipeService');
const imageUnsplashServer = require('../services/imageUnsplashServer')


async function getRecipesByTypeAndAmount(req, res) {
    try {
        const { type, amount } = req.body;
        const recipes = await GPTrecipeService.getRecipesIngredientsByGPT(type, amount);
        const imageUrl = await imageUnsplashServer.getImageUrlForType(type, amount);
        res.json({recipes,imageUrl});
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
      }
}

module.exports = {
  getRecipesByTypeAndAmount,
};
