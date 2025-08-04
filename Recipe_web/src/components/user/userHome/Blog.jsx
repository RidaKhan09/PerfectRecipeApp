import React from 'react';
import { Blogs } from '../../../data/index';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
        <Link to="/BlogPage" className="text-red-600 hover:underline font-medium text-sm">
          View more
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {Blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/BlogPage`} // dynamic route
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition block"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
