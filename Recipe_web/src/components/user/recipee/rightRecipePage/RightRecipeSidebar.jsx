import React from "react";
import FactsPage from './FactsPage'
import RightTrendingRecipePage from './RightTrendingRecipePage'
import RightStayConnected from './RightStayConnected'
import RelatedRecipePage from './RelatedRecipePage'
import RecentRecipe from "./RecentRecipe";
import RelatedProduct from "./RelatedProduct";
import RightTags from "./RightTags"


const RightRecipeSidebar = ({ rightrecipe }) => {
  return (
    <div>
      <aside className="space-y-8 pt-33">
        <FactsPage rightrecipe={rightrecipe} />
        <RightTrendingRecipePage rightrecipe={rightrecipe}/>
        <RightStayConnected rightrecipe={rightrecipe}/>
        <RelatedRecipePage rightrecipe = {rightrecipe}/>
        <RecentRecipe rightrecipe = {rightrecipe}/>
        <RelatedProduct rightrecipe={rightrecipe}/>
        <RightTags rightrecipe ={rightrecipe}/>
      </aside>
    </div>
  );
};


export default RightRecipeSidebar



