import React from "react";
import { FaStar, FaFireAlt } from "react-icons/fa";
import { recipes } from "../../../../data/index";

const RecentRecipe = () => {
  return (
    <section className="space-y-5">
      <h3 className="text-lg font-semibold text-gray-800">Recent Recipes</h3>

      {recipes.slice(3, 6).map(({ id, img, title, calories, }) => (
        <div key={id} className="flex gap-3 items-start">
          <img
            src={img}
            alt={title}
            className="w-20 h-16 object-cover rounded"
          />
          <div className="flex flex-col">
            <h4 className="text-sm font-medium text-gray-900">{title}</h4>
            <div className="flex text-xs text-gray-500 items-center gap-2 mt-1">
              <span className="flex items-center gap-1 text-[#C46C5F]">
                {/* {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))} */}
                <FaStar className="text-gray-300" />
              </span>
              <span className="flex items-center gap-1">
                <FaFireAlt /> {calories} cals
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};


export default RecentRecipe;
