import React from "react";
import {TrendingTags} from '../../../../data/index'

const RightTags = () => {
  return (
    <section className="bg-gray-50 rounded p-4 shadow-md">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Trending Tags</h3>

      <div className="flex flex-wrap gap-2">
        {TrendingTags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-[#E8F5E9] text-[#388E3C] rounded-full px-3 py-1 text-xs font-semibold cursor-pointer hover:bg-green-200 transition"
          >
            #{tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default RightTags;