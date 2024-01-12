import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectProfile.css"; // Asegúrate de que la ruta al archivo CSS sea correcta
import { peopleData } from "../../Data/dummyData";
import Navbar from "../Navbar_file/Navbar";

const ProjectProfile = () => {
  const { projectId } = useParams();
  const project = peopleData.find((p) => p.ID === parseInt(projectId));
  const [editableText, setEditableText] = useState(
    project ? project.texto : ""
  ); // Inicializa el estado con el texto del proyecto
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleTextChange = (e) => {
    // Actualiza el estado cada vez que el contenido del div editable cambia
    setEditableText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la actualización del texto del proyecto, el comentario y la calificación
    console.log(editableText, comment, rating);
  };

  return (
    <>
      <Navbar />
      <div className="project-profile-container">
        <div className="project-details">
          <h1 className="project-title">{project.Proyecto}</h1>
          <div
            className="editable-project-text"
            contentEditable
            onBlur={handleTextChange}
            dangerouslySetInnerHTML={{ __html: editableText }}
          />
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <textarea
              className="comment-input"
              placeholder="Escribe un comentario"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <input
              type="number"
              className="rating-input"
              placeholder="Calificación"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              Enviar
            </button>
          </form>
        </div>
        {/* Otros componentes como la lista de otros proyectos */}
      </div>
    </>
  );
};

export default ProjectProfile;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProjectProfile.css"; // Asegúrate de que la ruta al archivo CSS sea correcta
// import { peopleData } from "../../Data/dummyData";
// import Navbar from "../Navbar_file/Navbar";

// const ProjectProfile = () => {
//   const { projectId } = useParams();
//   const project = peopleData.find((p) => p.ID === parseInt(projectId));
//   const [comment, setComment] = useState("");
//   const [rating, setRating] = useState(0);

//   console.log(project);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     // Aquí podrías enviar el comentario al servidor o manejarlo como creas conveniente
//     console.log(comment, rating);
//   };

//   return (
//     <>
//       <div className="navbar-container">
//         <Navbar />
//       </div>
//       <div className="project-profile-container">
//         <div className="project-details">
//           <h1 className="project-title">{project.Proyecto}</h1>
//           <p className="project-text">{project.texto}</p>
//           <form className="comment-form" onSubmit={handleCommentSubmit}>
//             <textarea
//               className="comment-input"
//               placeholder="Escribe un comentario"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//             <input
//               type="number"
//               className="rating-input"
//               placeholder="Calificación"
//               value={rating}
//               onChange={(e) => setRating(e.target.value)}
//             />
//             <button type="submit" className="submit-btn">
//               Enviar
//             </button>
//           </form>
//         </div>
//         {/* Otros componentes como la lista de otros proyectos */}
//       </div>
//     </>
//   );
// };

// export default ProjectProfile;

{
  /* <div className="main-content">
        <div className="project-card">
          <h2>
            {project.Nombre} {project.Apellido}
          </h2>
          <p>Área de investigación: {project.Área}</p>
          <p>Proyecto: {project.Proyecto}</p>
          {project.Habilidades && (
            <p>Habilidades: {project.Habilidades.join(", ")}</p>
          )}
          {project.Valor && <p>Valor por servicio: ${project.Valor}</p>}
          {/* Añade más detalles que desees mostrar }
        </div>
      </div> */
}
