import React from "react";
import "../styles/proyectos.css";

function Proyectos() {
  return (
    <main className="proyectos">
      <div className="titulo">
        <p>01. </p>
        <h3>Proyectos</h3>
        <div className="linea-titulo"></div>
      </div>
      <div className="contenedor-general">
        <div className="contenedor-proyectos">
          <div className="proyecto">
            <a>
              <img
                src="/sitio-tecno-tools.png"
                alt="imagen-proyecto1"
                width={"280px"}
                height={"auto"}
              />
            </a>
          </div>
          <div className="proyecto">
            <a>
              <img
                src="/sitio-tecno-tools.png"
                alt="imagen-proyecto1"
                width={"280px"}
                height={"auto"}
              />
            </a>
          </div>
          <div className="proyecto">
            <a>
              <img
                src="/sitio-tecno-tools.png"
                alt="imagen-proyecto1"
                width={"280px"}
                height={"auto"}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Proyectos;
