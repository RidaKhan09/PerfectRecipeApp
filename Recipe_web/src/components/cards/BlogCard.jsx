// components/blog/BlogPostCard.jsx
import React from "react";

const BlogPostCard = ({ post }) => {
  return (
    <article className="bg-white rounded shadow-sm overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <p className="text-sm text-gray-400 mb-1">on {post.date}</p>
        <h3 className="font-semibold text-base mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600">{post.excerpt}</p>
      </div>
    </article>
  );
};

export default BlogPostCard;
