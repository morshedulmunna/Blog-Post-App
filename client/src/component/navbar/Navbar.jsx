import React from "react";

import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
        <Link to="/login">
          <span>logout</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
