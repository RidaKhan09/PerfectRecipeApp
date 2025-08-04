const express = require("express");
const generateRecipe = require("../controllers/aiController"); // Import your controller function
const auth = require("../middleware/auth"); // Import the authentication middleware
const router = express.Router();

router.post("/generate", auth, async (req, res) => {
  const { preferences } = req.body;
  console.log("Received preferences:", preferences);

  try {
    const recipeData = await generateRecipe(req, res); // Call the controller function
    res.status(200).json({ recipe: recipeData });
  } catch (err) {
    console.error("Recipe Generation Error:", err.message);
    res.status(500).json({ message: "Recipe generation failed." });
  }
});

module.exports = router;
