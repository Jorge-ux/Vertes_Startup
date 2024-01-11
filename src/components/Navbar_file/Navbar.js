import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = (e) => {
    e.preventDefault(); // Esto evitará el comportamiento predeterminado del enlace
    setIsActive(!isActive);
  };

  return (
    <>
      <nav>
        <a href="#home" className="logo">
          <span className="red">RedCientíficaHub</span>
        </a>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>

        <a href="#" onClick={handleMenuClick} className="menu-icon">
          {/* Icono del menú aquí */}
        </a>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <a href="#" onClick={handleMenuClick} className="close-icon">
          {/* Icono de cerrar aquí */}
        </a>

        <ul className="menu-items">
          <li>
            <a href="#info" onClick={handleMenuClick}>
              About
            </a>
          </li>
          <li>
            <a href="#blog" onClick={handleMenuClick}>
              Blog
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={handleMenuClick}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
