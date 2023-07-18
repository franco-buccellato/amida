import "./SeccionQuienesSomos.css";
import logoAmida from '../../imagenes/isologotipo.png';
import React from 'react';

function SeccionQuienesSomos() {

    return (
        <div className="section-nosotros" id="quienes-somos">
            <div className="section-nosotros-titulo">
                <h2 className="display-6">¿Quienes Somos?</h2>
            </div>  
            <div className="section-nosotros-descripcion">
                <img src={logoAmida}></img>
                <h4 className="display-6-configurado">Somos una agencia creativa especializada en comunicación interna, teambuilding, capacitaciones vivenciales, incentivos y eventos, enfocada en brindar servicios estratégicos y diferenciales para áreas de Recursos Humanos.</h4>
            </div>
        </div>
    );
}

export default SeccionQuienesSomos;
