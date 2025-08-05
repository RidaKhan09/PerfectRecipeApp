import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/slices/userSlice";
import BASE_URL from "../../../api/BaseURL";

const RecipeGenerator = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [preferences, setPreferences] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    if (!user) return alert("Please log in first.");
    if (user.coins < 100) return alert("Not enough coins! Please buy more.");

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${BASE_URL}/api/recipes/generate`,
        { preferences, userEmail: user.email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setRecipe(res.data.recipe);

      if (res.data.updatedUser) {
        dispatch(updateUser(res.data.updatedUser));
        localStorage.setItem("user", JSON.stringify(res.data.updatedUser));
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Error generating recipe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto pt-32 px-4 pb-16 font-sans text-gray-800">
      <div className="bg-gray-100 shadow-lg rounded-xl p-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#C46C5F] mb-4 text-center">
          AI Recipe Generator
        </h1>

        <p className="text-center text-sm mb-6">
          Use your coins to generate a delicious recipe with AI.
        </p>

        <div className="mb-4 text-right text-sm font-medium text-[#C46C5F]">
          Available Coins: {user?.coins || 0}
        </div>

        <textarea
          className="w-full border border-gray-300 rounded-md p-4 resize-none focus:ring-2 focus:ring-[#C46C5F] focus:outline-none"
          rows={4}
          placeholder="Enter preferences like 'vegan, spicy, dinner'..."
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        />

        <button
          onClick={generateRecipe}
          disabled={loading}
          className="mt-4 w-full bg-[#C46C5F] hover:bg-[#b1584e] transition text-white font-semibold py-3 px-6 rounded-md shadow-md disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Recipe (100 Coins)"}
        </button>
      </div>

      {recipe && (
        <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-[#C46C5F] text-center">{recipe.title}</h2>

          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto mb-6 rounded-lg border"
            />
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">🧂 Ingredients</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {recipe.ingredients?.length > 0 ? (
                recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">👨‍🍳 Instructions</h3>
            <p className="text-gray-700 leading-relaxed">
              {recipe.instructions || "Instructions not available."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;
