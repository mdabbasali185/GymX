import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import gymx from '../../../Images/gymx_logo.png'
import { Nav } from "react-bootstrap";
const Header = () => {
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
          <Nav
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            to="/signup"
          >
            Signup
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
