import "../styles/habilidades.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

function Habilidades() {
  return (
    <main className="habilidades">
      <div className="titulo">
        <p>01. </p>
        <h3>Mis habilidades</h3>
        <div className="linea-titulo"></div>
      </div>
      <div className="contenedor-general">
        <div className="iconos">
          <div className="icono">
            <FontAwesomeIcon icon={faHtml5} id="habilidad" />
            <p>HTML</p>
          </div>
          <div className="icono">
            <FontAwesomeIcon icon={faCss3Alt} id="habilidad" />
            <p>CSS</p>
          </div>
          <div className="icono">
            <FontAwesomeIcon icon={faJs} id="habilidad" />
            <p>JavaScript</p>
          </div>
          <div className="icono">
            <FontAwesomeIcon icon={faReact} id="habilidad" />
            <p>React</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Habilidades;
