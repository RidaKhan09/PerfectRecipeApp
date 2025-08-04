import React from "react";

const StayConnectedBox = () => {
  return (
    <div className="bg-[#FBEAE7] rounded-md p-4 space-y-3">
      <h4 className="text-base font-semibold text-gray-800">Stay connected with our Recipes updates</h4>
      <p className="text-sm text-gray-700">for the latest health tips and delicious recipes</p>
      <input
        type="email"
        placeholder="Enter Your Email"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C46C5F]"
      />
      <button className="w-full bg-[#C46C5F] hover:bg-[#a34e49] text-white py-2 rounded transition">
        Sign up
      </button>
    </div>
  );
};

export default StayConnectedBox;
