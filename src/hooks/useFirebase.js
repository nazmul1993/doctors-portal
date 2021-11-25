import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,
    signInWithPopup,GoogleAuthProvider, signOut,onAuthStateChanged,
    updateProfile} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Login/firebase/firebase.init";

initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');

    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();


    const registerUser=(email,password,name,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const newUser={email, displayName: name};
            setUser(newUser);
              // send name to firebase after creation 
              updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
              }).catch((error) => {
              });
              
            history.replace('/');
            // ...
          })
          .catch((error) => {
              setAuthError(error.message);
              console.log(error);
            // ..
          })
          .finally(()=>setIsLoading(false));
    }


    const loginUser=(email,password,location,history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const destination=location.state?.from || '/';
      history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);

  })
  .finally(()=>setIsLoading(false));
    }


    const signInWithGoogle=(location,history)=>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
  .then((result) => {
      const user = result.user;
      setAuthError('');
    // ...
  }).catch((error) => {
      setAuthError(error.message);
 
  }).finally(()=>setIsLoading(false));

    }

    useEffect(()=>{
       const unsubscribed=onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              //const uid = user.uid;
              setUser(user);
              // ...
            } else {
                setUser({})
              // User is signed out
              // ...
            }
            setIsLoading(false);
          });
          return ()=>unsubscribed;

    },[])

    const logout=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
       

}
export default useFirebase;