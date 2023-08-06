import "./SeccionQueHacemos.css";
import queHacemos1 from '../../imagenes/34.png';
import queHacemos2 from '../../imagenes/33.png';

function SeccionQueHacemos() {
    
    return (
        <section className="section-como-trabajamos" id="que-hacemos">
            <div className="section-como-trabajamos-titulo">
                <h2 className="display-6">¿Que hacemos?</h2>
            </div>
            <div className="como-trabajamos-container-1-1">
                <div className="container-como-trabajamos-1">
                    <div className="como-trabajamos-1">
                        <h6 className="encabezado-como-trabajamos-1">Eventos Corporativos</h6>
                        <div className="como-trabajamos-1-1">
                            <img src={queHacemos1} alt="img-web-1"></img>
                            <div className="descripcion-1">
                                <span className="como-trabajamos-descripcion">
                                Realizamos eventos internos personalizados ajustados a tus necesidades y objetivos con el fin de motivar al personal y mejorar el vínculo con sus compañeros y la empresa.
                                </span>
                            </div>
                        </div>
                        <div className="descripcion-1-lista">
                            <ul className="lista-1">
                                <li className="linea-1">Actividades de aventura y/o relax</li>
                                <li className="linea-1">Almuerzos ejecutivos</li>
                                <li className="linea-1">Días de campo</li>
                                <li className="linea-1">Family Day</li>
                                <li className="linea-1">After Office</li>
                                <li className="linea-1">Salas de escape</li>
                                <li className="linea-1">Coffe break</li>
                                <li className="linea-1">Team building</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-como-trabajamos-2">
                    <div className="como-trabajamos-2">
                        <h6 className="encabezado-como-trabajamos-2">Viajes Corporativos</h6>
                        <div className="como-trabajamos-2-1">
                            <img src={queHacemos2} alt="img-web-2"></img>
                            <div className="descripcion-2">
                                <span className="como-trabajamos-descripcion">
                                    Nos dedicamos a planificar y gestionar cada detalle de tus viajes, desde la organización de vuelos y alojamiento hasta la coordinación de traslados y actividades durante el viaje.{/* <br></br>
                                    Nos destacamos por proporcionar un servicio personalizado que se adapta a las preferencias y presupuestos de tu empresa. Ya sea que necesites asistir a una conferencia o seminario en el extranjero, una reunión ejecutiva o un viaje de incentivo para tu equipo, estamos para hacer que todo sea fácil y sin complicaciones. */}
                                </span>
                            </div>
                        </div>
                        <div className="descripcion-2-lista">
                            <ul className="lista-2">
                                <li className="linea-2">Traslados</li>
                                <li className="linea-2">Alojamientos</li>
                                <li className="linea-2">Gastronomia</li>
                                <li className="linea-2">Excursiones y experiencias en destino</li>
                            </ul>
{/*                             <span className="como-trabajamos-descripcion">
                                Nos destacamos por proporcionar un servicio personalizado que se adapta a las preferencias y presupuestos de tu empresa. Ya sea que necesites asistir a una conferencia o seminario en el extranjero, una reunión ejecutiva o un viaje de incentivo para tu equipo, estamos para hacer que todo sea fácil y sin complicaciones.
                            </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SeccionQueHacemos;
