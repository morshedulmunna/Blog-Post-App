import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../blog/Blog";
import "./Blogpost.scss";

const BlogPost = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [slc, setslc] = useState(5);

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
    setBlogs(catagoryBlogs);
  };

  // Data Load ==>
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBlogs(data);
        setBlogs(data);
      });
  }, []);

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
        {blogs.slice(0, slc).map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
        {allBlogs.length !== slc ? (
          <button onClick={handleSlcAll}>See All Blog Post.....</button>
        ) : (
          <h2 id="no_blog">No Blog Available Now</h2>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
