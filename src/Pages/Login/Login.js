import { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
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

  if (user || googleUser) {
    navigate(from);
  }

  if (googleError) {
    console.log(googleError);
  }

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

        <ToastContainer />

        <p>
          Don't have an account?{" "}
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
