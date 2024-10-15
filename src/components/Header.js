import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoKasa.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrap">
        <Link to="/">
          <img src={logo} alt="Kasa Logo" className="logo" />
        </Link>
        <nav className="nav">
          <Link to="/" className="link">
            Accueil
          </Link>
          <Link to="/a-propos" className="link">
            À propos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
