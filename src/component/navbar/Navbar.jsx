import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>logout</span>
      </nav>
    </>
  );
};

export default Navbar;
