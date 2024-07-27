import { NavLink } from "react-router-dom";

import "./index.css";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          src="https://cdn.onelifehealth.care/assets/one-life-logo.png"
          alt="logo"
          className="logo-image"
        />
      </div>
      <div className="titles-container">
        <NavLink exact to="/" activeClassName="active-link">
          <p className="header-title text">Home</p>
        </NavLink>
        <p className="header-title">About us</p>
        <p className="header-title">Space</p>
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
