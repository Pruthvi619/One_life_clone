import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://cdn.onelifehealth.care/assets/one-life-logo.png"
          alt="logo"
          className="logo-image"
        />
        <div className="hamburger-menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
      <div className={`titles-container ${menuOpen ? "show" : ""}`}>
        <NavLink exact to="/" activeClassName="active-link">
          <p className="header-title text">Home</p>
        </NavLink>
        <p className="header-title">About us</p>
        <Link to="/space">
          <p className="header-title">Space</p>
        </Link>
        <p className="header-title">Blogs</p>
        <p className="header-title">Contact us</p>
        <p className="header-title sos">
          <img
            src="https://cdn.onelifehealth.care/assets/alarm.png"
            alt="sos"
            className="sos-image"
          />
          SOS
        </p>
        <p className="header-title">Login/Sign up</p>
      </div>
    </div>
  );
};

export default Header;
