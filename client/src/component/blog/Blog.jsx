import React from "react";
import "./Blog.scss";

const Blog = (props) => {
  const { img, author, catagory, decription, title } = props.blog;

  return (
    <>
      <div className="card">
        <img src={img} alt="" />
        <div className="cardHeader">
          <span> {catagory} </span>
          <h3>{title}</h3>
          <span>Author: {author} </span>
        </div>
        <p>
          {decription.slice(0, 100)}
          <a href="#"> ....see more</a>
        </p>
      </div>
    </>
  );
};

export default Blog;
