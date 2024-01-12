import React from "react";
import { useParams } from "react-router-dom";
import "./PersonProfile.css"; // Asegúrate de crear este archivo de estilos
import { peopleData } from "../../Data/dummyData";

const PersonProfile = () => {
  const { personId } = useParams();
  const person = peopleData.find((p) => p.ID === parseInt(personId));

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <div>
      {/* Renderiza aquí los detalles de la persona */}
      <h2>
        {person.Nombre} {person.Apellido}
      </h2>
      <p>Área de investigación: {person.Área}</p>
      <p>Persona: {person.persona}</p>
      {person.Habilidades && (
        <p>Habilidades: {person.Habilidades.join(", ")}</p>
      )}
      {person.Proyecto && <p>Proyecto: {person.Proyecto}</p>}
      {person.Valor && <p>Valor por servicio: ${person.Valor}</p>}
      {/* Añade más detalles que desees mostrar */}
    </div>
  );
};

export default PersonProfile;
