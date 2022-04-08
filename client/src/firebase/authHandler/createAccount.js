import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const auth = getAuth();

// Form Controlling ===>

// OnSubmit ===>
const createAccount = (email, password, setError) => {
  console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((newUser) => {
      const user = newUser.user;
    })
    .catch((error) => {
      setError(false);
    });
};

export default createAccount;
