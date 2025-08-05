import React from "react";
import { Link } from "react-router-dom";
import Men from "../../assets/Men.jpg";
import Star from "../../assets/icons/Star.svg";
import bookmark from "../../assets/icons/bookmark.svg";

const author = "Alex Martin";
const avatarFallback = Men;

const StarIcon = () => <img src={Star} alt="Star" className="w-4 h-4" />;
const BookmarkIcon = () => <img src={bookmark} alt="Bookmark" className="w-5 h-5" />;

// eslint-disable-next-line no-unused-vars
const RecipeCard = ({ id, title, img, calories,slug }) => {
  return (
    <Link to={`/generated-recipes/${slug}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col relative hover:shadow-lg transition">
        {/* Image & Bookmark */}
        <div className="relative">
          <img src={img} alt={title} className="w-full h-48 object-cover" />
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-2 right-2 bg-white bg-opacity-80 rounded p-1 hover:bg-[#C46C5F]/10 transition"
          >
            <BookmarkIcon />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Rating */}
          <div className="flex space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} />
            ))}
          </div>

          <h3 className="text-gray-900 font-medium text-base mb-3 capitalize">{title}</h3>

          <div className="flex-grow" />

          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <img src={avatarFallback} alt={author} className="w-8 h-8 rounded-full object-cover" />
              <span>{author}</span>
            </div>

            <div className="flex items-center gap-1 border border-[#C46C5F] text-[#C46C5F] rounded-full px-3 py-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>{calories} cals</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default RecipeCard;
