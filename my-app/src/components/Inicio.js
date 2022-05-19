import React from "react";
import '../styles/inicio.css';

function Inicio() {
    return (
        <main className="inicio">
            <div className="holder">
                <p>Hola, mi nombre es</p>
                <h1>Ignacio Menna</h1>
                <h2>Front-end Developer.</h2>


                <div className="comentario">
                    Actualmente sigo con ganas de aprender nuevas tecnologías orientadas a la programación FrontEnd. En el curso aprendí HTML, CSS (Flexbox, Bootstrap), JavaScript (ReactJS, Express, NodeJS) y lenguaje SQL para el acceso a las bases de dato.
                </div>

                <button className="mi-cv">
                    Mi CV.pdf
                </button>
            </div>
        </main>
    );
}
export default Inicio;