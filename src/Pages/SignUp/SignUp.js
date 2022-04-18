import { useEffect, useState } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";

const Signup = () => {
  // state set 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const notify = (errorToast) => toast(errorToast);

  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handleLogin = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      notify("password does not match");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (hookError) {
      notify(hookError.message);
    }
  }, [hookError]);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);
  
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="login-container">
      <div className="login-title">SignUp</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="w-50"
          type="text"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            className="w-50 mt-3"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          className="w-50 mt-3"
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button className="allButton d-block mx-auto m-2">Sign up</button>

        <ToastContainer />
      </form>
    </div>
  );
};

export default Signup;
