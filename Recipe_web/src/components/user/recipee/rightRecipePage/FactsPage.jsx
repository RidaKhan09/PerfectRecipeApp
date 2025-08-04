// src/components/user/recipee/rightRecipePage/RecipeFacts.jsx
import React from "react";

const FactsPage = () => {
   
  return (
    <div className="border rounded bg-gray-50 p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Nutrition Facts</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        <li className="flex justify-between"><span>Calories</span><span className="font-semibold">494</span></li>
        <li className="flex justify-between"><span>Carbs</span><span>80g</span></li>
        <li className="flex justify-between"><span>Fat</span><span>18g</span></li>
        <li className="flex justify-between"><span>Protein</span><span>24g</span></li>
        <li className="flex justify-between"><span>Fiber</span><span>23g</span></li>
        <li className="flex justify-between"><span>Net carbs</span><span>56g</span></li>
        <li className="flex justify-between"><span>Sodium</span><span className="font-semibold">444mg</span></li>
        <li className="flex justify-between"><span>Cholesterol</span><span>0mg</span></li>
      </ul>
    </div>
  );
};

export default FactsPage;
