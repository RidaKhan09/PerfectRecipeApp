const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: String,
  image: String,
  ingredients: [String],
  instructions: [String],
  userEmail: String, // Corrected to store as a string
  userId: String,    // Corrected to store as a string
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Recipe", recipeSchema);
