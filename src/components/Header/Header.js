import React from "react";
import "./Header.css";
import Navbar from "../Navbar_file/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="wrapper">
        <div className="cta">
          <h1>Learn the Art of Sound Design</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
