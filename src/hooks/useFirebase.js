import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
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

  useEffect(()=>{
    onAuthStateChanged(auth, user =>{
        setUser(user);
    })
  }, []);

  const googleSignOut = ()=>{
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
  }

  return { user, googleLoginUser, googleSignOut };
};

export default useFirebase;
