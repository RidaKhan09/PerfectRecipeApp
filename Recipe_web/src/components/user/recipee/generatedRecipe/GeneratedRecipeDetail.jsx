import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaCalendarAlt,
  FaUtensils,
  FaComments,
  FaStar,
  FaPrint,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";

const GeneratedRecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const printRef = useRef();
  const brandColor = "#C46C5F";

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/api/recipes/${id}`);
        setRecipe(res.data);
      } catch (err) {
        console.error("Error fetching recipe detail:", err);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="pt-24 px-4 pb-24">Loading...</p>;

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

  const handleAddToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const exists = favorites.some((fav) => fav._id === recipe._id);
    if (!exists) {
      favorites.push(recipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert('Recipe added to favorites!');
    } else {
      alert('This recipe is already in favorites!');
    }
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: recipe.title,
          text: 'Check out this recipe!',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch {
      alert('Share failed. Try again.');
    }
  };

  return (
    <div className="pt-24 px-4 pb-24">
      <div ref={printRef} className="max-w-3xl mx-auto bg-gray-100 p-6 shadow-md rounded-lg space-y-6">
        {/* Header */}
        <div className="flex gap-4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-28 h-28 object-cover rounded"
          />
          <div className="flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1" style={{ color: brandColor }}>
                <FaUtensils /> Author Name
              </span>
              <span className="flex items-center gap-1" style={{ color: brandColor }}>
                <FaCalendarAlt /> {new Date().toDateString()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>Dinner, Salad</span>
              <span className="flex items-center gap-1" style={{ color: brandColor }}>
                <FaComments /> 22 comments
              </span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex" style={{ color: brandColor }}>
            <FaStar /><FaStar /><FaStar /><FaStar />
            <FaStar className="text-gray-300" />
          </div>
          <span>4.0 / 34 Reviews</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-2 border rounded text-white text-sm"
            style={{ backgroundColor: brandColor }}
          >
            <FaPrint /> Print Recipe
          </button>

          <button
            onClick={handleAddToFavorite}
            className="flex items-center gap-2 px-3 py-2 border rounded text-sm"
            style={{ borderColor: brandColor, color: brandColor }}
          >
            <FaBookmark /> Add to Favorite
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-2 border rounded text-sm"
            style={{ borderColor: brandColor, color: brandColor }}
          >
            <FaShareAlt /> Share Recipe
          </button>
        </div>

        <hr />

        {/* Ingredients */}
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: brandColor }}>
            Ingredients:
          </h3>
          <ul className="space-y-2 text-gray-800">
            {recipe.ingredients.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <input type="checkbox" style={{ accentColor: brandColor }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div>
          <h3 className="text-lg font-semibold mb-2" style={{ color: brandColor }}>
            Instructions:
          </h3>
          <ol className="space-y-4 list-decimal list-inside text-gray-800">
            {recipe.instructions.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default GeneratedRecipeDetail;
