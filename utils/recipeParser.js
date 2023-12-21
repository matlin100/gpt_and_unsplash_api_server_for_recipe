
function parseRecipesToJson(text) {
    const recipes = [];
    const recipeParts = text.split(/Recipe \d+/);

    recipeParts.forEach((part, index) => {
        if (part.trim() !== "") {
            const ingredientsLabel = "Ingredients:";
            const instructionsLabel = "Instructions:";

            const ingredientsIndex = part.indexOf(ingredientsLabel);
            const instructionsIndex = part.indexOf(instructionsLabel);

            if (ingredientsIndex !== -1 && instructionsIndex !== -1) {
                const ingredients = part.substring(ingredientsIndex + ingredientsLabel.length, instructionsIndex).trim();
                const instructions = part.substring(instructionsIndex + instructionsLabel.length).trim();
                recipes.push({ 
                    number: index, 
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