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
                <h6 className="display-6-configurado">Somos una agencia creativa especializada en comunicación interna, teambuilding, capacitaciones vivenciales, incentivos y eventos, enfocada en brindar servicios estratégicos y diferenciales para áreas de Recursos Humanos.</h6>
            </div>
            <div className="section-nosotros-descripcion-span">
                <span>Nuestro propósito es hacer que tus objetivos se cumplan y superen tus expectativas ya que orientamos nuestro servicio a un enfoque personalizado y detallado orientado a brindarte soluciones únicas y sobresalientes que se adapten a tus necesidades.</span>            
            </div>
        </div>
    );
}

export default SeccionQuienesSomos;
