import React from 'react'
import FeaturedBlogCard from '../../components/user/blog/FeaturedBlogCard'
import BlogGrid from '../../components/user/blog/BlogGrid'
import PageHeader from '../../components/common/PageHeader';


const Blog = () => {
  return (
   <>
    <div>
    <PageHeader title="Blog" />
    <FeaturedBlogCard/>
    <BlogGrid/>
   </div>
   </>
  )
}

export default Blog
