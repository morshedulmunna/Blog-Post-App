import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebaseInit";
import "./Navbar.scss";

const Navbar = () => {
  const [user] = useAuthState(auth);

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
          {user ? (
            <span onClick={() => signOut(auth)}>Log Out</span>
          ) : (
            <span>log in</span>
          )}
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
