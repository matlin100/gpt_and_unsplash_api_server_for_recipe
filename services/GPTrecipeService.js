const { parseRecipesToJson } = require('../utils/recipeParser');
require('dotenv').config();
const OpenAI = require('openai');

const token_per_Recipes = 200

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getRecipesIngredientsByGPT(query, maxRecipes) {
  
    // Construct the prompt for GPT
    const prompt = `List of ${maxRecipes} recipes ingredients and Instructions for ${query} Each recipe will have ingredients: instructions: words fore ingredients and instructions
    Each recipe will start with a recipe number: = the number of the recipe `;
  
    // Call the GPT API
    const response = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
        max_tokens: (token_per_Recipes * maxRecipes)  
      });
     
     // Extract the response text
     const textResponse = response.choices[0].message.content;

     // Parse the response into a structured JSON format
     return parseRecipesToJson(textResponse);
  }


module.exports = {
    getRecipesIngredientsByGPT
};




//async function main() {
    //   const chatCompletion = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: 'good pizza recipe' }],
    //     model: 'gpt-3.5-turbo',
    //   });
    //   console.log(chatCompletion);
    // }
    
    // main();