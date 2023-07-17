import "./SeccionNosotros.css";
import logoAmida from '../../imagenes/logotipo-amida.png';
import animacionFranco from '../../imagenes/franco-buccellato.png';
import animacionNicolas from '../../imagenes/nicolas-postigo.png';
import animacionAgustina from '../../imagenes/agustina-franco.png';
import React from 'react';

function SeccionNosotros() {

    return (
        <div className="section-nosotros" id="nosotros">
            <div className="section-nosotros-titulo">
                <h2 className="display-6">NOSOTROS</h2>
            </div>  
            <div className="section-nosotros-descripcion">
                <img src={logoAmida}></img>
                <h4 className="display-6-configurado">Somos una Start-Up Tecnológica en desarrollo.<br></br>En nuestro recorrido notamos una necesidad en las empresas a la hora de avanzar, de innovar, de inducirse en el mundo tecnológico y sacar una ventaja de eso.</h4>
            </div>
            <div className="section-nosotros-container-cards-1">
                <div className="section-nosotros-card-1">
                    <img src={animacionFranco} alt="Imagen Franco Buccellato"></img>
                    <h5>Franco Buccellato</h5>
                    <h6>Fundador</h6>
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
            </div>
            <div className="section-nosotros-container-cards-2">
            <div className="section-nosotros-card-2-descripcion">
                    <span>- Técnico Informático.</span>
                    <span>- Estudiante de Ingeniería en Sistemas de Información.</span>
                    <span>- Desarrollador Backend..</span>
                    <span>- Desarrollador RPA.</span>
                    <span>- Teach Leader.</span>
                </div>
                <div className="section-nosotros-card-2">
                    <img src={animacionNicolas} alt="Imagen Nicolas Postigo"></img>
                    <h5>Nicolas Postigo</h5>
                    <h6>Líder Técnico</h6>
                </div>
            </div>
            <div className="section-nosotros-container-cards-1">
                <div className="section-nosotros-card-1">
                    <img src={animacionAgustina} alt="Imagen Agustina Franco"></img>
                    <h5>María Agustina Franco</h5>
                    <h6>Líder Marketing</h6>
                </div>
                <div className="section-nosotros-card-1-descripcion">
                    <span>- Licenciada en Relaciones Públicas e Institucionales.</span>
                    <span>- Community Manager.</span>
                    <span>- Especialista en Email Marketing.</span>
                    <span>- Diseñadora de piezas comunicacionales digitales.</span>
                    <span>- Project Development.</span>
                </div>
            </div>
        </div>
    );
}

export default SeccionNosotros;
