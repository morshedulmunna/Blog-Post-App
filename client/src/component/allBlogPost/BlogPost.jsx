import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Blog from "../blog/Blog";
import "./Blogpost.scss";
import useDataLoad from "../../hooks/useDataLoad.js";
import { BlogsData } from "../../App";

const BlogPost = () => {
  const allBlogs = useContext(BlogsData);

  const [blogs, setBlogs] = useState([]);
  const [slc, setslc] = useState(6);
  const [open, setOepen] = useState(false);

  // see more button handler
  const handleSlcAll = () => {
    setslc(allBlogs.length);
  };

  // catagory handler
  const handleCatagory = (catagory) => {
    if (catagory === "all") {
      setBlogs([...allBlogs]);
      // if you use else don't return
      return;
    }
    const catagoryBlogs = allBlogs.filter(
      (blog) => blog.catagory.toLowerCase() === catagory.toLowerCase()
    );
    setOepen(true);
    setBlogs(catagoryBlogs);
  };

  return (
    <div className="blogpage">
      <div className="catagory">
        <div className="button">
          <Link to="/details">
            <button>CREATE BLOG</button>
          </Link>
        </div>
        <p onClick={() => handleCatagory("all")}>All Catagory</p>
        <p onClick={() => handleCatagory("music")}>Music</p>
        <p onClick={() => handleCatagory("Movie")}>Movie</p>
        <p onClick={() => handleCatagory("Sports")}>Sports</p>
        <p onClick={() => handleCatagory("Tech")}>Tech</p>
        <p onClick={() => handleCatagory("Fashion")}>Fashion</p>
      </div>
      <div className="allBlog">
        {/* toogle Open */}
        {open
          ? blogs
              .slice(0, slc)
              .map((blog) => <Blog key={blog.id} blog={blog} />)
          : allBlogs
              .slice(0, slc)
              .map((blog) => <Blog key={blog.id} blog={blog} />)}

        {allBlogs.length !== slc ? (
          <button onClick={handleSlcAll}>See All Blog Post.....</button>
        ) : (
          <h2 id="no_blog">No more available now</h2>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
