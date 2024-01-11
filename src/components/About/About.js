import React from "react";
import "./About.css"; // Asume que tienes un archivo About.css para estilos

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>Acerca de ResearchMate</h1>
      <p>
        Conectamos a estudiantes e investigadores newbies con expertos en
        redacción para elevar la calidad de sus documentos de investigación y
        ayudarles a publicar con confianza.
      </p>

      <div className="mission">
        <h2>Nuestra Misión</h2>
        <p>
          Facilitar el intercambio de conocimiento y experiencia para asegurar
          que cada paper alcance su máximo potencial.
        </p>
      </div>

      <div className="how-it-works">
        <h2>Cómo Funciona</h2>
        <p>
          Sube tu borrador y conecta con un experto que te guiará paso a paso en
          el proceso de perfeccionamiento y publicación.
        </p>
      </div>

      <div className="trust">
        <h2>Confianza y Calidad</h2>
        <p>
          Todos nuestros expertos son cuidadosamente seleccionados por su
          experiencia y habilidades comprobadas en su campo.
        </p>
      </div>

      <div className="interactive-board">
        <h2>Pizarra Interactiva</h2>
        <p>
          Utiliza nuestra pizarra dinámica para recibir retroalimentación en
          tiempo real, hacer cambios y colaborar directamente con los expertos.
        </p>
      </div>

      <div className="monetization">
        <h2>Monetización</h2>
        <p>
          Ofrecemos un servicio premium que garantiza resultados de calidad, con
          un modelo de precios claro y accesible para todas las partes.
        </p>
      </div>

      <div className="call-to-action">
        <button>Únete Como Estudiante</button>
        <button>Regístrate Como Experto</button>
      </div>
    </section>
  );
};

export default About;
