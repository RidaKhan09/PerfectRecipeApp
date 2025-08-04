// src/pages/MyGeneratedRecipes.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyRecipes } from "../../redux/slices/recipeSlice";
import RecipeCard from "../cards/RecipeCard";

const MyGeneratedRecipes = () => {
  const dispatch = useDispatch();

  const { myRecipes, loading, error } = useSelector((state) => state.recipe);
  const user = useSelector((state) => state.user.user); // ✅ from Redux now

  useEffect(() => {
    if (user) {
      dispatch(fetchMyRecipes());
    }
  }, [user, dispatch]);

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto pb-12">
      <h1 className="text-2xl font-bold mb-6">My Generated Recipes</h1>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : myRecipes.length === 0 ? (
        <p>No recipes generated yet.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myRecipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              id={recipe._id}
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
