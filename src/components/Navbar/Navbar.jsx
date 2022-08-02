import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#" className="nav-link">&lt;Home /&gt;</a></li>
          <li><a href="#" className="nav-link">&lt;About /&gt;</a></li>
          <li><a href="#" className="nav-link">&lt;Projects /&gt;</a></li>
          <li><a href="#" className="nav-link">&lt;Contact /&gt;</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;