import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../blog/Blog";
import "./Blogpost.scss";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [slc, setslc] = useState(5);

  const handleSlcAll = () => {
    setslc(blogs.length);
  };

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogpage">
      <div className="catagory">
        <div className="button">
          <Link to="/details">
            <button>CREATE BLOG</button>
          </Link>
        </div>
        <p>All Catagory</p>
        <p>Music</p>
        <p>Movie</p>
        <p>Sports</p>
        <p>Tech</p>
        <p>Fashion</p>
      </div>
      <div className="allBlog">
        {blogs.slice(0, slc).map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
        {blogs.length !== slc ? (
          <button onClick={handleSlcAll}>See All Blog Post.....</button>
        ) : (
          <h2 id="no_blog">No Blog Available Now</h2>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
