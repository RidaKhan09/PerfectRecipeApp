import React from "react";
import LeftRecipeMain from "../../components/user/recipee/leftRecipePage/LeftRecipeMain";
import RightRecipeSidebar from "../../components/user/recipee/rightRecipePage/RightRecipeSidebar";
import PageHeader from '../../components/common/PageHeader';
import {RecipesPage,RecipesImage,TrendingTags} from '../../data/index'


const Recipes = () => {
  return (
        <div>
      <PageHeader title="Recipe Page" />
      {/* Baqi ka about content */}
    <div className=" min-h-screen bg-white text-gray-900 font-sans">
      <main className="container mx-auto px-20 py-10 grid grid-cols-1 lg:grid-cols-4 ">
        <LeftRecipeMain recipe={RecipesPage} />
        <RightRecipeSidebar relatedRecipes={RecipesImage} trendingTags={TrendingTags}rightrecipe={{}}/>
      </main>
    </div> </div>
  );
};

export default Recipes;
