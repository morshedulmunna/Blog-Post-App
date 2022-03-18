import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../blog/Blog";
import "./Blogpost.scss";
import url from "../../../src/url";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(url)
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
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
