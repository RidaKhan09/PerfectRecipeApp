const express = require('express');
const { generateRecipe, getRecipeBySlug } = require('../controllers/aiController');
const Recipe = require('../models/Recipe.js');
const auth = require('../middleware/auth');

const router = express.Router();

// 🔥 fixed route
router.post('/generate', auth, generateRecipe);

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipes." });
  }

  
});
router.get('/my-recipes', auth, async (req, res) => {
  try {
    const recipes = await Recipe.find({ userEmail: req.email }).sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user recipes." });
  }

});
// Get a single recipe by ID
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (err) {
    console.error("Error fetching recipe by ID:", err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get('/slug/:slug', getRecipeBySlug);


module.exports = router;
