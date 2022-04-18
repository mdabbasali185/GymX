import { useEffect, useState } from "react";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmail(email, password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const notify = (errorToast) => toast(errorToast);
  if (user || googleUser) {
    navigate(from);
    
  }

  useEffect(()=>{
    if (googleError) {
      notify(googleError.message)
    }
  },[googleError])
  useEffect(()=>{
    if (hookError) {
      notify(hookError.message)
    }
  },[hookError])
  

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form className="login-form mx-auto w-50" onSubmit={handleLogin}>
        <input
          className="form-control"
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-control mt-3"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="allButton d-block mx-auto m-2">Login</button>

       

        <p>
          Don't have an account?
          <Link className="sign-up" to="/signup">
            Sign up first
          </Link>
        </p>
      </form>

      <button className="allButton mb-5" onClick={() => signInWithGoogle()}>
        Google
      </button>
    </div>
  );
};

export default Login;
