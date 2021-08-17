import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/careers">Careers</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/give">Give</Link>
    </div>
  );
};

export default Footer;