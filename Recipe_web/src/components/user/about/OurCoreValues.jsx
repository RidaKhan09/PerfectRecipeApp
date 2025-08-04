import React from "react";

const OurCoreValues = () => {
  const values = [
    { title: "Passion for Food", desc: "We love food and everything around it — cooking, sharing, celebrating." },
    { title: "Simplicity First", desc: "From UI to ingredients — we believe in keeping things clean and effortless." },
    { title: "Community Driven", desc: "Our users shape the platform with reviews, ratings, and love." },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-[#C46C5F] text-center">Our Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((val, i) => (
          <div key={i} className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-[#C46C5F]">{val.title}</h3>
            <p className="text-gray-600 text-sm">{val.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCoreValues;
