import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase.init";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const useFirebase = () => {
  const [user, setUser] = useState({});

  const googleLoginUser = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setUser(errorMessage);
      });
  };
  return { user, googleLoginUser };
};

export default useFirebase;
