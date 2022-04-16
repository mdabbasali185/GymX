import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <nav className="nav-link header">
      <div className="container d-flex justify-content-center align-items-center gap-5">
        <div>
          <h1>
            GYM<span className="left-side text-danger">X</span>
          </h1>
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
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/classes"
          >
            Classes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/elements"
          >
            Elements
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/login"
          >
            LogIn
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/signin"
          >
            SignIn
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
