import "./SeccionQuienesSomos.css";
import logoAmida from '../../imagenes/isologotipo.png';
import animacionFranco from '../../imagenes/franco-buccellato.png';
import animacionNicolas from '../../imagenes/nicolas-postigo.png';
import animacionAgustina from '../../imagenes/agustina-franco.png';
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
{/*             <div className="section-nosotros-container-cards-1">
                <div className="section-nosotros-card-1">
                    <img src={animacionFranco} alt="Imagen Franco Buccellato"></img>
                    <h5>Belen Blanco</h5>
                    <h6>Fundadora</h6>
                </div>
                <div className="section-nosotros-card-1-descripcion">
                    <span>- Técnico Informático.</span>
                    <span>- Estudiante de Ingeniería en Sistemas de Información.</span>
                    <span>- Desarrollador Frontend.</span>
                    <span>- Desarrollador RPA.</span>
                    <span>- Coordinador de Proyectos.</span>
                    <span>- Analista Funcional.</span>
                    <span>- Team Leader.</span>
                </div>
            </div> */}
        </div>
    );
}

export default SeccionQuienesSomos;
