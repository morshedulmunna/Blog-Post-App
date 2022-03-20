import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initializeAppAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAppAuthentication;
