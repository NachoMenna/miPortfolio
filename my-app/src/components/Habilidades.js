import '../styles/habilidades.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons';
import {faJs} from '@fortawesome/free-brands-svg-icons';
import {faReact} from '@fortawesome/free-brands-svg-icons';


function Habilidades() {
    return (
        <main className='habilidades'>
            <div className='contenedor-general'>
                <div className='titulo'>
                    <p>01. </p><h3>Mis habilidades</h3>
                    <div className='linea-titulo'></div>
                </div>
                <div className='iconos-1'>
                    <div className='icono'>
                        <FontAwesomeIcon icon={faHtml5}/>
                        <FontAwesomeIcon icon={faCss3Alt}/>
                        <FontAwesomeIcon icon={faJs}/>
                        <FontAwesomeIcon icon={faReact} />
                    </div>

                </div>
                <div className='iconos-2'>

                </div>
            </div>
        </main>
    )
}

export default Habilidades;
