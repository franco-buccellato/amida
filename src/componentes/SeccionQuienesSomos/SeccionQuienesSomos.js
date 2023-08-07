import "./SeccionQuienesSomos.css";
import logoAmida from '../../imagenes/isologotipo.png';
import React from 'react';

function SeccionQuienesSomos() {

    return (
        <div className="section-nosotros" id="quienes-somos">
            <div className="section-nosotros-titulo">
                <h2 className="display-6">Nosotros</h2>
            </div>  
            <div className="section-nosotros-descripcion">
                {/* <img src={logoAmida}></img> */}
                <h6 className="display-6-configurado">
                    Somos Amida Group, una empresa especializada en eventos y viajes corporativos.<br></br><br></br>
                    Brindamos servicios personalizados y estratégicos, aportando mayor bienestar laboral y mejorando el sentido de pertenencia.<br></br><br></br>
                    Nos involucramos en la transformación de las personas, creando resultados positivos y nutritivos que colaboran en una mayor integración y relacionamiento en las organizaciones.<br></br><br></br>
                    A lo largo de los años hemos desempeñado diversos roles dentro de la organización de eventos y viajes corporativos, adquiriendo experiencia en la planificación, coordinación y ejecución de diversos eventos y a su vez, brindando a nuestros clientes experiencias inolvidables.<br></br><br></br>
                    Nuestra formación nos permite abordar desafíos con una perspectiva integral, enfocada en el crecimiento de nuestro negocio y en ofrecer un servicio diferenciado y excepcional a nuestros clientes.
            
                </h6>
            </div>
        </div>
    );
}

export default SeccionQuienesSomos;
