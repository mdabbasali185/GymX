import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_I10uh_m8upSWUioive2XO5wrrlBpcKs",
  authDomain: "gym-55c6d.firebaseapp.com",
  projectId: "gym-55c6d",
  storageBucket: "gym-55c6d.appspot.com",
  messagingSenderId: "726659249302",
  appId: "1:726659249302:web:006cfdb25b36d0f70abeb7",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
