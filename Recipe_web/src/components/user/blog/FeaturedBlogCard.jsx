import React from "react";
import { blogPosts } from "../../../data/index";
import { brandColor } from "../../../data/index";

const FeaturedBlogCard = () => {
  const featured = blogPosts[0]; // Assuming first blog is featured

  return (
    <div className="max-w-5xl mx-auto px-4 pt-24">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-1">
        Home &gt; <span style={{ color: brandColor }}>Blog</span>
      </nav>

      {/* Title */}
      <h1 className="pt-12 text-3xl font-bold text-gray-900 mb-6">Blog</h1>

      {/* Featured Blog Card */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text */}
          <div>
            <p className="text-sm text-gray-400 mb-2">on {featured.date}</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {featured.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {featured.excerpt}
            </p>
            <button className="bg-[#C46C5F] text-white px-5 py-2 rounded-md text-sm hover:bg-[#a9534b] transition">
              Read more →
            </button>
          </div>

          {/* Image */}
          <div>
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-64 sm:h-80 md:h-full object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBlogCard;
