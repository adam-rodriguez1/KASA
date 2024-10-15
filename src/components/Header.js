import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoKasa.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <NavLink to="/">
          <img src={logo} alt="Kasa Logo" className="logo" />
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
