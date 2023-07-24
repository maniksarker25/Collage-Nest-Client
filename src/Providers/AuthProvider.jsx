import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";


export const authContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [singleCollage,setSingleCollage] = useState([]);
  console.log(singleCollage)


  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // google log in -
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // reset pass
  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth,email);
}
const signInGithub = ()=>{
  setLoading(true);
  return signInWithPopup(auth,githubProvider)
}
  // find user
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        // console.log(currentUser)
        setLoading(false);
    })
    
    return ()=>{
        return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    setLoading,
    setSingleCollage,
    resetPassword,
    singleCollage,
    signInGithub
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
