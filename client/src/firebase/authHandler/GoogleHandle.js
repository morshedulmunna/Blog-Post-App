import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import initializeAppAuthentication from "../firebaseInit";
initializeAppAuthentication();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleClickGoogleLogin = () => {
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

export default handleClickGoogleLogin;
