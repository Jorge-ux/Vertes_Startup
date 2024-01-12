import React from "react";
import { peopleData } from "../../Data/dummyData";
import { Link } from "react-router-dom";
import "./PeopleList.css";

const filterExperts = peopleData.filter(
  (expert) => expert.persona === "experto"
);

const PeopleList = () => {
  return (
    <div className="people-list-container">
      {filterExperts.map((person) => (
        <Link to={`/profile/${person.ID}`} className="people-list-link">
          <div className="people-list-item">
            <div className="profile-image-placeholder"></div>
            <div className="people-details">
              <h3 className="people-name">{`${person.Nombre} ${person.Apellido}`}</h3>
              <p className="people-area">{person["Área de investigación"]}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PeopleList;
