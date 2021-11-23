import { initializeApp } from "firebase/app";
import firebaseConfig from "./firrebase.config";

const initializeFirebase=()=>{
    initializeApp(firebaseConfig);

}

export default initializeFirebase;