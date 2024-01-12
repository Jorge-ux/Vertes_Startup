import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/HomePage"; // Asegúrate de que el path sea correcto
import Signup from "./views/Auth/Signup"; // El componente de tu archivo signup.js
import Login from "./views/Auth/Login";
import { HOME, LOGIN, SIGNUP, STUDENTPAGE, EXPERTPAGE } from "./config/paths";
import HomeStudentPage from "./views/StudenPage/HomeStudentPage";
import PersonProfile from "./components/PeopleList/PersonProfile";
import HomeExpertPage from "./views/ExpertPage/HomeExpertPage";
import ProjectProfile from "./components/StudentsProjectsList/ProjectProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={STUDENTPAGE} element={<HomeStudentPage />} />
        <Route path="profile/:personId" element={<PersonProfile />} />
        <Route path={EXPERTPAGE} element={<HomeExpertPage />} />
        <Route path="project/:projectId" element={<ProjectProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
