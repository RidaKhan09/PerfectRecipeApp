import React from 'react'

import food from "../../../assets/food.png"
import userAvatar from '../../../assets/userAvatar.jpg'

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-white via-white to-[#FFD4D0] pt-40 py-16 overflow-hidden">
      {/* Curved SVG Background */}
      <div className="absolute right-0 top-0 h-full w-1/2">
        <svg
          viewBox="0 0 500 1000"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,0 C200,150 300,850 500,1000 L500,0 Z"
            fill="#FFD4D080"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-10 relative z-10 translate-x-8">
        {/* Left Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            Your Daily Dish,
            <br />
            A <span className="text-[#C46C5F]">Food</span> Journey
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            Maecenas vitae enim pharetra, venenatis nunc eget,<br />
            finibus est.
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#C46C5F] text-white font-semibold rounded-md hover:bg-[#b1584e] transition">
            Sign up
          </button>
        </div>

        {/* Right Image + Testimonial */}
        <div className="hidden md:block lg:w-1/2 relative translate-x-6">
          {/* Food Image */}
          <img
            src={food}
            alt="Delicious Dish"
            className="relative z-20 w-full max-w-sm mx-auto rounded-2xl object-cover"
          />

          {/* Testimonial Card */}
          <div className="absolute bottom-8 left-5 transform -translate-x-1/4 -translate-y-1/4 bg-white p-5 rounded-xl shadow-xl w-72 z-30">
            <div className="flex items-center mb-3">
              <img
                src={userAvatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <p className="font-semibold">Sara Johnson</p>
                <p className="text-yellow-400 text-sm">
                  ★ ★ ★ ★ ★ <span className="text-gray-400 text-xs">4.8/5</span>
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              “Wow, this recipe is a flavor explosion in my mouth! Very delicious.”
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
