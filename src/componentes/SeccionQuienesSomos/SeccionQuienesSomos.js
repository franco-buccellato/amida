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
                <h6 className="display-6-configurado">
                    Somos una empresa especializada en eventos y viajes corporativos. <br></br>
                    Brindamos servicios personalizados y estratégicos, aportando mayor bienestar laboral y mejorando el sentido de pertenencia. <br></br>
                    Nos involucramos en la transformación de las personas, creando resultados positivos y nutritivos que colaboran en una mayor integración y relacionamiento en las organizaciones.</h6>
            </div>
        </div>
    );
}

export default SeccionQuienesSomos;
