function parseRecipesToJson(text) {
    const recipes = [];
    const recipeParts = text.split(/Recipe \d+: /); // Updated to split based on recipe names

    recipeParts.forEach((part, index) => {
        if (part.trim() !== "") {
            const ingredientsLabel = "Ingredients:";
            const instructionsLabel = "Instructions:";
            const nameEndIndex = part.indexOf("\n"); // Find the end of the recipe name

            const name = part.substring(0, nameEndIndex).trim(); // Extract recipe name
            const restOfRecipe = part.substring(nameEndIndex).trim(); // Rest of the recipe text

            const ingredientsIndex = restOfRecipe.indexOf(ingredientsLabel);
            const instructionsIndex = restOfRecipe.indexOf(instructionsLabel);

            if (ingredientsIndex !== -1 && instructionsIndex !== -1) {
                const ingredients = restOfRecipe.substring(ingredientsIndex + ingredientsLabel.length, instructionsIndex).trim();
                const instructions = restOfRecipe.substring(instructionsIndex + instructionsLabel.length).trim();
                recipes.push({ 
                    name, // Add name to each recipe
                    ingredients: ingredients, 
                    instructions: instructions 
                });
            }
        }
    });

    return recipes;
}



module.exports = {
    parseRecipesToJson
};