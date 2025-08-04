import React from "react";
import LeftRecipeMain from "../../components/user/recipee/leftRecipePage/LeftRecipeMain";
import RightRecipeSidebar from "../../components/user/recipee/rightRecipePage/RightRecipeSidebar";

import {RecipesPage,RecipesImage,TrendingTags} from '../../data/index'


const Recipes = () => {
  return (
    <div className="pt-32 min-h-screen bg-white text-gray-900 font-sans">
      <main className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <LeftRecipeMain recipe={RecipesPage} />
        <RightRecipeSidebar relatedRecipes={RecipesImage} trendingTags={TrendingTags}rightrecipe={{}}/>
      </main>
    </div>
  );
};

export default Recipes;
