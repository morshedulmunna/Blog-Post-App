import React, { useState } from "react";
import image from "../../images/undraw_Deliveries_2r4y.png";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import {
  FaTwitter,
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaUserAstronaut,
} from "react-icons/fa";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebaseInit";

const Signup = () => {
  const [myError, setMyError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log("user create");

    if (password !== confirmPassword) {
      setMyError("Password didn't Match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="form_wrapper">
          <img src={image} alt="" />
          <div className="form">
            <h1>Create an Account</h1>
            <p>
              To Keep connected with us. Please To Create an Account with your
              personal information by email address and password or you can
              directly join with google, facebook, twitter or github
            </p>
            <div className="input_box">
              <form onSubmit={handleCreateUser}>
                <>
                  {/* <div className="email">
                    <FaUserAstronaut />
                    <input type="text" placeholder="User Name" />
                  </div> */}
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
                  <div className="email">
                    <AiOutlineLock />
                    <input
                      onBlur={(event) => setconfirmPassword(event.target.value)}
                      type="password"
                      placeholder="confirm password"
                      required
                    />
                  </div>
                  <p style={{ color: "red" }}> {myError} </p>
                </>

                <div className="logIn_acc">
                  <button type="submit" id="login">
                    Create Account
                  </button>
                  <Link to="/login">already an account </Link>
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

export default Signup;
