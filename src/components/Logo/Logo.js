// Logo.js
import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css"; // Asegúrate de tener este archivo CSS

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-text">
        RedCientíficaHub
      </Link>
    </div>
  );
};

export default Logo;
