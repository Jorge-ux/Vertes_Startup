import React, { useState } from "react";
import "./SearchExpertsBar.css"; // Asegúrate de crear este archivo de estilos
import Logo from "../Logo/Logo";
const SearchExpertsBar = ({ onSearch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ firstName, lastName });
  };

  return (
    <div className="search-bar-container">
      <div className="logo-container">
        <Logo />
      </div>
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <span className="dropdown">
            People <i className="dropdown-icon"></i>
          </span>
          <input
            type="text"
            className="search-input"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="search-input"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit" className="search-button">
            <i className="search-icon"></i>{" "}
            {/* Agrega aquí tu icono de búsqueda */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchExpertsBar;
