
import React from "react";
import MixGreenRecipePage from "./MixGreenRecipePage";
import TodoPageComponent from "./TodoPageComponent";
import RecipeCommentPage from "./RecipeCommentPage";
import MightLikePage from "./MightLikePage";


const RecipeMain = ({ recipe }) => {
  return (
    <div className="lg:col-span-3 space-y-12">
    <MixGreenRecipePage recipe={recipe} />
    <TodoPageComponent recipe={recipe} />
    <RecipeCommentPage recipe={recipe}/>
    <MightLikePage recipe={recipe}/>
  </div>
  );
};

export default RecipeMain;
