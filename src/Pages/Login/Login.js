import { useEffect, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import './Login.css'

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [signInWithEmail, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, loading2, googleError] =
    useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };
  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(userInfo);

    signInWithEmail(userInfo.email, userInfo.password);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      switch (error?.code) {
        case "auth/invalid-email":
          toast("Invalid email provided, please provide a valid email");
          break;

        case "auth/invalid-password":
          toast("Wrong password. Intruder!!");
          break;
        default:
          toast("something went wrong");
      }
    }
  }, [hookError, googleError]);

  return (
    <div className="login-container">
      <div className="login-title">LOGIN</div>
      <form className="login-form" onSubmit={handleLogin}>
        <input className="w-50"
          type="text"
          placeholder="Your Email"
          onChange={handleEmailChange}
        />
        {errors?.email && <p className="error-message">{errors.email}</p>}
        <input className="d-block mx-auto m-2 w-50"
          type="password"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        {errors?.password && <p className="error-message">{errors.password}</p>}
        <button className="allButton d-block mx-auto m-2">Login</button>

        <ToastContainer />

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button className="allButton mb-5" onClick={() => signInWithGoogle()}>Google</button>
    </div>
  );
};

export default Login;
