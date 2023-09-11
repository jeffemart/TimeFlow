import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';
import Footer from '../Footer';

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className='blogList-wrap'>
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
    <Footer />
    </>
  );
};

export default BlogList;
