import React from "react";
import "./Blog.scss";

const Blog = () => {
  return (
    <>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt=""
        />
        <div className="cardHeader">
          <span>Tech</span>
          <h3>What is iPhone tecnology</h3>
          <span>Author: morshedulmunna </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Harum, iste. fugit?
        </p>
      </div>
    </>
  );
};

export default Blog;
