import React, { useState } from "react";
import "./Login.scss";
import image from "../../images/undraw_Deliveries_2r4y.png";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import {
  FaTwitter,
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaUserCheck,
} from "react-icons/fa";
import handleClickGoogleLogin from "../../firebase/authHandler/GoogleHandle";
import createAccount from "../../firebase/authHandler/createAccount";

const Login = () => {
  const [userForm, setUserForm] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true);

  //
  // ::::::::::::::::::: Last Time Code Here
  //
  console.log(error);
  //
  // ::::::::::::::::::: Last Time Code Here
  //

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

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
              <form>
                {userForm ? (
                  <>
                    <div className="email">
                      <AiOutlineMail />
                      <input
                        onBlur={handleEmail}
                        type="Email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="email">
                      <AiOutlineLock />
                      <input
                        onBlur={handlePassword}
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="email">
                      <FaUserCheck />
                      <input type="text" placeholder="Enter your Name" />
                    </div>
                    <div className="email">
                      <AiOutlineMail />
                      <input
                        onBlur={handleEmail}
                        type="Email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="email">
                      <AiOutlineLock />
                      <input
                        onBlur={handlePassword}
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </>
                )}
                <div className="checkbox">
                  <div className="check">
                    <input type="checkbox" />
                    <label>Remember me</label>
                  </div>
                  <button>Forget Password?</button>
                </div>
                <div className="logIn_acc">
                  <button
                    onClick={(e) => {
                      setUserForm(true);
                      e.preventDefault();
                    }}
                    type="submit"
                    id="login"
                  >
                    Login Now
                  </button>
                  <button
                    onClick={(e) => {
                      createAccount(email, password, setError);
                      e.preventDefault();
                      setUserForm(false);
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <p>Or you can join with</p>
            </div>
            <div className="icons">
              <i>
                <FaFacebookF />
              </i>
              <i onClick={handleClickGoogleLogin}>
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
