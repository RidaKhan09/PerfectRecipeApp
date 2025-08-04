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
      const token = localStorage.getItem("token"); // redux version uses 'token'
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

      // ✅ Update Redux + localStorage
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
    <div className="pt-24 max-w-xl mx-auto mt-20 px-4 pb-12">
      <h1 className="text-2xl font-bold mb-4">AI Recipe Generator</h1>

      <p className="mb-2">Available Coins: {user?.coins || 0}</p>

      <textarea
        className="w-full p-3 border rounded-md"
        placeholder="Enter your preferences e.g. 'vegan, spicy, dinner'"
        value={preferences}
        onChange={(e) => setPreferences(e.target.value)}
      ></textarea>

      <button
        onClick={generateRecipe}
        className="bg-green-600 text-white px-4 py-2 rounded mt-3"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Recipe (100 Coins)"}
      </button>

      {recipe && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
          {recipe.image && (
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-auto mb-4 rounded-md border"
            />
          )}
          <div className="mb-4">
            <h3 className="font-semibold mb-1">Ingredients:</h3>
            <ul className="list-disc pl-5">
              {recipe.ingredients?.length > 0 ? (
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-1">Instructions:</h3>
            <p>{recipe.instructions || "Instructions not available."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;
