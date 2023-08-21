import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    if (window.innerWidth < 630) {
      setMenu(!menu);
      document.body.classList.toggle('menu-open')
    }
  }

  return (
    <header
      className="header"
      style={{ position: location.pathname === "/" ? "absolute" : "relative" }}
    >
      <nav className={`navbar${menu ? ' menu-open' : ''}`}>
        <ul>
          <li><Link to="/" className="nav-link link" onClick={handleClick}>&lt;Home /&gt;</Link></li>
          <li><Link to="/about" className="nav-link link" onClick={handleClick}>&lt;About /&gt;</Link></li>
          <li><Link to="/projects" className="nav-link link" onClick={handleClick}>&lt;Projects /&gt;</Link></li>
          <li><HashLink to="/#contact" className="nav-link link" onClick={handleClick}>&lt;Contact /&gt;</HashLink></li>
        </ul>
        <button className="burger" onClick={handleClick}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;