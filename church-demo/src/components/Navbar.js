import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/events">Events</Link>
      <Link to="/ministries">Ministries</Link>
      <Link to="/schools">Schools</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/give">Give</Link>
    </div>
  );
};

export default Navbar;