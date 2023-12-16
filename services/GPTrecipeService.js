require('dotenv').config();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getRecipesIngredientsByGPT(query, maxRecipes = 10) {
    // Construct the prompt for GPT
    const prompt = `List of ${maxRecipes} recipes ingredients and Instructions for ${query}`;
  
    // Call the GPT API
    const response = await openai.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: 'gpt-3.5-turbo',
      });
  
    return response.choices[0].message;
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