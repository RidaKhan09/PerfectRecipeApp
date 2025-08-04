import React from "react";
import {Exploreecipes} from '../../../data/index'
import RecipeCard from "../../../components/cards/RecipeCard";

// Main Component
const Explore_Recipe = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Explore Recipes</h2>
        <a href="#" className="text-[#C46C5F] hover:underline font-medium text-sm">
          View more
        </a>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Exploreecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
};

export default Explore_Recipe;
