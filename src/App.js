import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/HomePage"; // Asegúrate de que el path sea correcto
import Signup from "./views/Auth/Signup"; // El componente de tu archivo signup.js
import Login from "./views/Auth/Login";
import { HOME, LOGIN, SIGNUP } from "./config/paths";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={HOME} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
