import React, { useState, useRef } from "react";
import {brandColor} from '../.././../../data/index'
import {
  FaCalendarAlt,
  FaUtensils,
  FaComments,
  FaBookmark,
} from "react-icons/fa";

const MixGreenRecipePage = ({ recipe }) => {
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [checkedInstructions, setCheckedInstructions] = useState([]);

  const toggleIngredient = (idx) => {
    setCheckedIngredients((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const toggleInstruction = (idx) => {
    setCheckedInstructions((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
  const printRef = useRef();
  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Recipe</title>');
    printWindow.document.write('<style>body{font-family:sans-serif;padding:20px;} img{max-width:100%;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(printContents);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };
  
  return (
    <article className="lg:col-span-3">
    <div ref={printRef} className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>

        {/* Meta Info */}
        <div className="flex items-center text-sm text-gray-600 mb-4 gap-4 flex-wrap">
          <span className="flex items-center gap-1"><FaUtensils /> Author name</span>
          <span className="flex items-center gap-1"><FaCalendarAlt /> Sep 26, 2023</span>
          <span className="flex items-center gap-1"><FaComments /> 22 comments</span>
          <span className="flex items-center gap-1"><FaBookmark /> 9 Saves</span>
          <span className="flex items-center gap-1" style={{ color: brandColor }}>
            ★★★★☆ <span className="text-xs text-gray-500">(4.0 / 10 Reviews)</span>
          </span>
        </div>

        {/* Image */}
        <figure className="mb-3 rounded overflow-hidden">
          <img src={recipe.image} alt="Salad" className="w-200 h-130  object-cover rounded-md" />
        </figure>

        {/* Time/Servings */}
        <div className="flex justify-center text-center text-sm text-gray-700 mb-6 border-b gap-10 pb-4">
          <div><p className="font-semibold">Prep time:</p><p>5 mins</p></div>
          <div><p className="font-semibold">Cook time:</p><p>5 mins</p></div>
          <div><p className="font-semibold">Serving</p><p>4 Serving</p></div>
          <div>
          <button
  onClick={() => handlePrint()}
  className="px-3 py-1 border rounded transition"
  style={{
    borderColor: brandColor,
    color: brandColor,
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = brandColor;
    e.currentTarget.style.color = "#fff";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = brandColor;
  }}
>
  🖨️ Print Recipe
</button>

          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">{recipe.description}</p>

        {/* ✅ Ingredients Section */}
        <section className="mb-8 pt-10">
          <h3 className="text-xl font-semibold mb-3" style={{ color: brandColor }}>🧂 Ingredients</h3>
          <ul className="space-y-2">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={checkedIngredients.includes(idx)}
                  onChange={() => toggleIngredient(idx)}
                  className="w-4 h-4"
                  style={{ accentColor: brandColor }}
                />
                <span
                  className={`text-gray-800 ${
                    checkedIngredients.includes(idx) ? "line-through text-gray-400" : ""
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ✅ Instructions Section */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3" style={{ color: brandColor }}>👨‍🍳 Instructions</h3>
          <ol className="space-y-3 list-decimal list-inside">
            {recipe.instructions.map((step, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={checkedInstructions.includes(idx)}
                  onChange={() => toggleInstruction(idx)}
                  className="mt-1 w-4 h-4"
                  style={{ accentColor: brandColor }}
                />
                <span
                  className={`text-gray-800 ${
                    checkedInstructions.includes(idx) ? "line-through text-gray-400" : ""
                  }`}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
};

export default MixGreenRecipePage;
