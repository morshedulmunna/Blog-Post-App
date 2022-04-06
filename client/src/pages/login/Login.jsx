import "./Login.scss";
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
    <div>
      <button onClick={handleClickGoogleLogin}>Google Sign in</button>
    </div>
  );
};

export default Login;
