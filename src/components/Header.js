import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoKasa.png';  // Le chemin vers ton logo
import './Header.scss';  // Importer les styles SCSS

const Header = () => {
  return (
    <header className="header">
      <div className='header-wrap'>
       <Link to="/">
        <img src={logo} alt="Kasa Logo" className="logo" />
       </Link>
      <nav className="nav">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/a-propos" className="link">À propos</Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;
