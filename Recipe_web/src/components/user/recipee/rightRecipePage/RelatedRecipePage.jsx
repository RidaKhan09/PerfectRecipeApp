import React from "react";
import { recipes } from "../../../../data/index";

const RelatedRecipes = () => {
  return (
    <section className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Related Recipes
      </h3>

      {/* Grid: 2 columns, 3 rows (vertical layout per card) */}
      <div className="grid grid-cols-2 gap-4">
        {recipes.slice(0, 6).map(({ title, img }, id) => (
          <div
            key={id}
            className="space-y-2 hover:shadow-md transition rounded overflow-hidden"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-24 object-cover rounded"
            />
            <p className="text-sm font-medium text-gray-800">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedRecipes;
