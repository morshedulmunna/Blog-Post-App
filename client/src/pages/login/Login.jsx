import React, { useState } from "react";
import "./Login.scss";
import image from "../../images/undraw_Deliveries_2r4y.png";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FaTwitter, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebaseInit";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const nagivate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    nagivate("/");
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="form_wrapper">
          <img src={image} alt="" />
          <div className="form">
            <h1>Wellcome Back </h1>
            <p>
              To Keep connected with us. Please login your personal information
              by email address and password or you can log in with google,
              facebook, twitter or github
            </p>
            <div className="input_box">
              <form onSubmit={handleLogIn}>
                <div className="email">
                  <AiOutlineMail />
                  <input
                    onBlur={(event) => setEmail(event.target.value)}
                    type="Email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="email">
                  <AiOutlineLock />
                  <input
                    onBlur={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <p>{error?.message}</p>
                <div className="checkbox">
                  <div className="check">
                    <input type="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <button>Forget Password?</button>
                </div>
                <div className="logIn_acc">
                  <button type="submit" id="login">
                    Login Now
                  </button>
                  <Link to="/signup">
                    <button>Create Account</button>
                  </Link>
                </div>
              </form>

              <p>Or you can join with</p>
            </div>
            <div className="icons">
              <i>
                <FaFacebookF />
              </i>
              <i>
                <FaGoogle />
              </i>
              <i>
                <FaGithub />
              </i>
              <i>
                <FaTwitter />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
