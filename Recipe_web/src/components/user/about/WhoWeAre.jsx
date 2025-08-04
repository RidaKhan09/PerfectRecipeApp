import React from "react";
import team from "../../../assets/team.jpg";

const WhoWeAre = () => {
  return (
    <div className="pt-12 grid md:grid-cols-2 gap-10 items-center mb-16">
      <img src={team} alt="Our Team" className="w-full rounded-lg shadow-lg" />
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-[#C46C5F]">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          We're a team of foodies, designers, and developers who believe that food should not only taste good — it should be easy to make and fun to explore.
        </p>
        <p className="text-gray-700">
          Our mission is to build a platform where every recipe is a journey, not just a list of steps.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
