import React, { useEffect, useState } from "react";
import axios from "axios";
import { UseAuth } from "../common/AuthContext";
import RecipeCard from "../cards/RecipeCard"; // 🔁 adjust the path if needed

const MyGeneratedRecipes = () => {
  const { user } = UseAuth();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyRecipes = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const res = await axios.get("http://localhost:5050/api/recipes/my-recipes", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        setRecipes(res.data);
      } catch (err) {
        console.error("Error fetching user recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchMyRecipes();
  }, [user]);

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto pb-12">
      <h1 className="text-2xl font-bold mb-6">My Generated Recipes</h1>

      {loading ? (
        <p>Loading...</p>
      ) : recipes.length === 0 ? (
        <p>No recipes generated yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe) => (
           <RecipeCard
           key={recipe._id}
           id={recipe._id} // ✅ Yeh line add kro
           title={recipe.title}
           img={recipe.image}
           calories={recipe.calories}
         />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyGeneratedRecipes;
