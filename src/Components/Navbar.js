import React from "react";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
      <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">SERVICES</a>
        <a href="">ABOUT US</a>
        <a href="">CONTACT US</a>
        <a href="">CAREERS</a>
      </div>
    </nav>
  );
};

export default Navbar;
