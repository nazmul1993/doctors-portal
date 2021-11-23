import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";
import initializeFirebase from "../Pages/Login/Login/firebase/firebase.init";

initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError,setAuthError]=useState('');
    const auth = getAuth();


    const registerUser=(email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            // ...
          })
          .catch((error) => {

            setAuthError(error.message);
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

    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth, (user) => {
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
          return ()=>unsubscribe;

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
        logout,
    }
       

}
export default useFirebase;