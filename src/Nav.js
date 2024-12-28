import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-list-container">
          <Link className="logo" to="/">
            <p className="logo-name"> PumpAction </p>
            <img className="logo-img" src=" /img/logo.png" alt="logo" />
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            <li>
              <Link className="list-items" to="/Docs" onClick={closeMenu}>
                Documentation
              </Link>
            </li>
            <li>
              <Link className="list-items" to="/Command" onClick={closeMenu}>
                Commands
              </Link>
            </li>
            <li>
              <Link className="list-items" to="/TermOfUse" onClick={closeMenu}>
                Term of use
              </Link>
            </li>
            <li>
              <a className="nav-link-a-mobile" href="link">
                Get Started
              </a>
            </li>
          </ul>

          <a className="nav-link-a" href="link">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
