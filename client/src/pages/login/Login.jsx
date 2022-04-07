import "./Login.scss";
import image from "../../images/undraw_Deliveries_2r4y.png";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FaTwitter, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAppAuthentication from "../../firebase/firebaseInit";

initializeAppAuthentication();
const provider = new GoogleAuthProvider();

const Login = () => {
  const handleClickGoogleLogin = () => {
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // console.log(token);

        // The signed-in user info.
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
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
              <div className="email">
                <AiOutlineMail />
                <input type="Email" placeholder="Email" />
              </div>
              <div className="email">
                <AiOutlineLock />
                <input type="password" placeholder="Password" />
              </div>
              <div className="checkbox">
                <div className="check">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
                <button>Forget Password?</button>
              </div>
              <div className="logIn_acc">
                <button id="login">Login Now</button>
                <button>Create Account</button>
              </div>
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
