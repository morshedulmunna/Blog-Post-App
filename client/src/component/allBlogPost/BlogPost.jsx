import React from "react";
import { Link } from "react-router-dom";
import Blog from "../blog/Blog";
import "./Blogpost.scss";

const BlogPost = () => {
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
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default BlogPost;
