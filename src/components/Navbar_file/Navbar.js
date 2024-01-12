import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  EXPERTPAGE,
  LOGIN,
  SIGNUP,
  STUDENTPAGE,
  HOME,
} from "../../config/paths";

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
            <Link to={HOME}>Home</Link>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <Link to={LOGIN}>Log in</Link>
          </li>
          <li>
            <Link to={SIGNUP}>Sign up</Link>
          </li>
          <li>
            <Link to={STUDENTPAGE}>Search Experts</Link>
          </li>
          <li>
            <Link to={EXPERTPAGE}> Experts</Link>
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
