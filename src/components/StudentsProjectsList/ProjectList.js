import React from "react";
import { peopleData } from "../../Data/dummyData";
import { Link } from "react-router-dom";
import "./ProjectList.css";

const filterProjects = peopleData.filter(
  (expert) => expert.persona === "estudiante"
);

const ProjectList = () => {
  return (
    <div className="people-list-container">
      {filterProjects.map((project) => (
        <Link to={`/project/${project.ID}`} className="people-list-link">
          <div className="people-list-item">
            <div className="profile-image-placeholder"></div>
            <h1>here</h1>
            <div className="people-details">
              <h3 className="project-name">{`${project.Proyecto}`}</h3>
              <h3 className="people-name">{`${project.Nombre} ${project.Apellido}`}</h3>
              <p className="people-area">{project["Área de investigación"]}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectList;
