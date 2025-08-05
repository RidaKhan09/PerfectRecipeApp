const generateRecipeFromSpoonacular = require("../services/spoonacular");
const Recipe = require("../models/Recipe");
const slugify = require("../utils/slugify");

generateRecipe = async (req, res) => {
  const { preferences } = req.body;
  const userEmail = req.email; // ✅ coming from middleware
  const userId = req.user?.id || null;

  try {
    const recipe = await generateRecipeFromSpoonacular(preferences);
    // Check for duplicate slug
    const slug = slugify(recipe.title);

    const existing = await Recipe.findOne({ slug });
    if (existing) {
      return res
        .status(400)
        .json({ message: "Recipe with similar title exists" });
    }
    const newRecipe = new Recipe({
      ...recipe,
      userEmail,
      userId,
      slug, // 👈 Save slug
    });
    await newRecipe.save();

    // ✅ Deduct 100 coins from the user
    const User = require("../models/User");
    const user = await User.findOne({ email: userEmail });

    if (!user || user.coins < 100) {
      return res.status(400).json({ message: "Insufficient coins" });
    }

    user.coins -= 100;
    await user.save();

    res.status(200).json({ recipe, updatedUser: user });
  } catch (error) {
    console.error("Error generating recipe:", error.message);
    res.status(500).json({ error: "Failed to generate and save recipe." });
  }
};
// 👇 Slug se recipe get karne wala function
const getRecipeBySlug = async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ slug: req.params.slug });
    if (!recipe) return res.status(404).json({ message: 'Not found' });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {generateRecipe,getRecipeBySlug};
