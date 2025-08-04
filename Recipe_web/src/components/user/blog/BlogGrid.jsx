import React from "react";
import BlogPostCard from "../../cards/BlogCard";
import { blogPosts } from "../../../data/index"; // assuming all posts here

const BlogGrid = () => {
  return (
    <div className="max-w-5xl mx-auto pt-8">
    <section className="grid gap-6 sm:grid-cols-2 sm:grid-cols-2">
      {blogPosts.slice(1).map((post, index) => (
        <BlogPostCard key={index} post={post} />
      ))}
    </section>
    </div>
  );
};

export default BlogGrid;
