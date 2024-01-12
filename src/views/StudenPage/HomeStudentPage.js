import React from "react";

import SearchExpertsBar from "../../components/SearchBar/SearchExpertsBar";
import PeopleList from "../../components/PeopleList/PeopleList";

const HomeStudentPage = () => {
  return (
    <>
      {/* BARRA DE BUSQUEDA DE LOS ESTUDIANTES  */}

      <SearchExpertsBar />

      {/* LISTA DE EXPERTOS */}
      <PeopleList />

      <div>Hello from Home HomeStudentPage</div>
    </>
  );
};

export default HomeStudentPage;
