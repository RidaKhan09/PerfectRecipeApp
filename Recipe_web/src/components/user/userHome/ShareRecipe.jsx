import React from 'react'

import shareImg from '../../../assets/share-recipe.png';
import { Link } from "react-router-dom";


const ShareRecipe = () => {
  return (
    <section className="pt-30 bg-white">
      <div className="max-w-[1400px] px-6 lg:px-10 mx-auto flex flex-col md:items-center lg:flex-row lg:items-start">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-start lg:translate-x-8">
          <img
            src={shareImg}
            alt="Share Recipe"
            className="w-[220px] sm:w-[260px] md:w-[300px]"
          />
        </div>

        {/* Right Text */}
        <div className="py-20 w-full lg:w-[80%] lg:ml-auto text-center lg:text-left">
          <h2 className="text-3xl sm:text-3xl font-bold mb-6">
            Share Your <span className="text-[#C46C5F]">Recipes</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8 md:max-w-[600px] md:mx-auto lg:mx-0 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
          </p>
          <Link to="/AddRecipe"><button className="bg-[#C46C5F] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#a74e45] transition">
    Create New Recipe
  </button>
</Link>
        </div>
      </div>
    </section>
  )
}

export default ShareRecipe
