import { getAuth } from "firebase/auth";
const auth = getAuth();

// Form Controlling ===>

// OnSubmit ===>
const createAccount = (email, password) => {
  console.log(email, password);
};

export default createAccount;
