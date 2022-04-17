import React from "react";
import "./Footer.css";
import gymxx from "../../../Images/gymx_logo.png";
const Footer = () => {
  return (
    <footer className="mt-auto">
      <div className="footer-part">
        <p className="text-center mb-0 py-5 ">
          Assignments 10 || powered by <img className="img-fluid" src={gymxx} alt="gymxx" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
