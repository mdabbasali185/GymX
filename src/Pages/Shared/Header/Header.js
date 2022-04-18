import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import gymx from "../../../Images/gymx_logo.png";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const  logOutHandeler =(e)=>{
    e.preventDefault()
    signOut(auth)
  }
    return (
    <nav className="nav-link header">
      <div className="container d-flex justify-content-center align-items-center gap-5">
        <div>
          <img className="img-fluid" src={gymx} alt="gymx" />
        </div>
        <div className="d-flex gap-4">
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/trainer"
          >
            Trainer
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/blogs"
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/aboutme"
          >
            AboutMe
          </NavLink>
          {user ? (
            <NavLink
            onClick={logOutHandeler}
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/"
            >
              LogOut
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "link-active" : "link")}
              to="/login"
            >
              LogIn
            </NavLink>
          )}

          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/signup"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
