import React, { useState } from 'react';
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  }

  return (
    <header className="header">
      <nav className={`navbar${menu ? ' menu-open' : ''}`}>
        <ul>
          <li><a href="#" className="nav-link">&lt;Home /&gt;</a></li>
          <li><a href="#" className="nav-link">&lt;About /&gt;</a></li>
          <li><a href="#" className="nav-link">&lt;Projects /&gt;</a></li>
          <li><a href="#" className="nav-link">&lt;Contact /&gt;</a></li>
        </ul>
        <button className="navbar-menu" onClick={handleClick}>
          <span>&lt;{menu ? "Close" : "Open"} /&gt;</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;