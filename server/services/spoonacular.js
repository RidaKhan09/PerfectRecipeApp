const axios = require("axios");

const generateRecipeFromSpoonacular = async (preferences) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const query = preferences || "pasta";

  try {
    // Step 1: Search recipe by preference
    const searchUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=1&apiKey=${apiKey}`;
    const searchResponse = await axios.get(searchUrl);
    const recipeList = searchResponse.data.results;

    if (!recipeList || recipeList.length === 0) {
      throw new Error("No recipe found");
    }

    const recipeId = recipeList[0].id;

    // Step 2: Fetch detailed info using recipe ID
    const infoUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`;
    const infoResponse = await axios.get(infoUrl);
    const recipe = infoResponse.data;

    const ingredients = recipe.extendedIngredients?.map(i => i.original) || ["No ingredients found"];
    const instructions =
      recipe.analyzedInstructions?.[0]?.steps?.map(step => step.step) || ["Instructions not available"];

    return {
      title: recipe.title,
      image: recipe.image,
      ingredients,
      instructions,
    };

  } catch (error) {
    console.error("🔥 Spoonacular API Error:", error.message);
    throw error;
  }
};

module.exports = generateRecipeFromSpoonacular;


