import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import gymx from "../../../Images/gymx_logo.png";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const [user] = useAuthState(auth);
  const logOutHandeler = (e) => {
    e.preventDefault();
    signOut(auth);
  };
  return (
    <div>
      <Navbar className="header" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img className="img-fluid " width={100} src={gymx} alt="gymx" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/trainer"
                >
                  Trainer
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/services"
                >
                  Services
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </Nav>
              <Nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/aboutme"
                >
                  AboutMe
                </NavLink>
              </Nav>
              {user ? (
                <Nav>
                  <NavLink
                    onClick={logOutHandeler}
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/"
                  >
                    LogOut
                  </NavLink>
                </Nav>
              ) : (
                <Nav>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link"
                    }
                    to="/login"
                  >
                    LogIn
                  </NavLink>
                </Nav>
              )}

              <Nav>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link"
                  }
                  to="/signup"
                >
                  Signup
                </NavLink>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
