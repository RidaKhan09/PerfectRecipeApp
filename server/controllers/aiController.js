const generateRecipeFromSpoonacular = require("../services/spoonacular");
const Recipe = require("../models/Recipe");

generateRecipe = async (req, res) => {
  const { preferences } = req.body;
const userEmail = req.email; // ✅ coming from middleware
const userId = req.user?.id || null;

  try {
    const recipe = await generateRecipeFromSpoonacular(preferences);

    const newRecipe = new Recipe({
      ...recipe,
      userEmail,
      userId
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

module.exports = generateRecipe;
