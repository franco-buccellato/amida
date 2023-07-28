import "./SeccionQueHacemos.css";
import queHacemos1 from '../../imagenes/relevamiento-web.png';
import queHacemos2 from '../../imagenes/planificacion-web.png';
import queHacemos3 from '../../imagenes/desarrollo-web.png';
import queHacemos4 from '../../imagenes/lanzamiento-web.png';

function SeccionQueHacemos() {
    
    return (
        <section className="section-como-trabajamos" id="que-hacemos">
            <div className="section-como-trabajamos-titulo">
                <h2 className="display-6">¿Que hacemos?</h2>
            </div>
            <div className="como-trabajamos-container-1-1">
                <div className="container-como-trabajamos-1">
                    <div className="como-trabajamos-1">
                        <img src={queHacemos1} alt="img-web-1"></img>
                        <div className="descripcion-1">
                            <h6 className="encabezado-como-trabajamos-1">Eventos Corporativos</h6>
                            <span className="como-trabajamos-descripcion">
                                Descubrí cómo nuestros eventos corporativos internos pueden fortalecer los lazos entre los miembros de tu empresa, aumentar la productividad y hacer que todos se sientan parte de una comunidad sólida y exitosa.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-trabajamos-2">
                    <div className="como-trabajamos-2">
                        <img src={queHacemos2} alt="img-web-2"></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-como-trabajamos-2">Viajes Corporativos</h6>
                            <span className="como-trabajamos-descripcion">
                                Nos dedicamos a planificar y gestionar cada detalle de tus viajes, desde la organización de vuelos y alojamiento hasta la coordinación de traslados y actividades durante el viaje.<br></br>
                                Nos destacamos por proporcionar un servicio personalizado que se adapta a las preferencias y presupuestos de tu empresa. Ya sea que necesites asistir a una conferencia o seminario en el extranjero, una reunión ejecutiva o un viaje de incentivo para tu equipo, estamos para hacer que todo sea fácil y sin complicaciones.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="como-trabajamos-container-1-2">
                <div className="container-como-trabajamos-1">
                    <div className="como-trabajamos-1">
                        <img src={queHacemos3} alt="img-web-4"></img>
                        <div className="descripcion-1">
                            <h6 className="encabezado-como-trabajamos-1">Eventos Corporativos</h6>
                            <span className="como-trabajamos-descripcion">
                                Descubrí cómo nuestros eventos corporativos internos pueden fortalecer los lazos entre los miembros de tu empresa, aumentar la productividad y hacer que todos se sientan parte de una comunidad sólida y exitosa.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-trabajamos-2">
                    <div className="como-trabajamos-2">
                        <img src={queHacemos4} alt="img-web-5"></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-como-trabajamos-2">Viajes Corporativos</h6>
                            <span className="como-trabajamos-descripcion">
                                Nos dedicamos a planificar y gestionar cada detalle de tus viajes, desde la organización de vuelos y alojamiento hasta la coordinación de traslados y actividades durante el viaje.<br></br>
                                Nos destacamos por proporcionar un servicio personalizado que se adapta a las preferencias y presupuestos de tu empresa. Ya sea que necesites asistir a una conferencia o seminario en el extranjero, una reunión ejecutiva o un viaje de incentivo para tu equipo, estamos para hacer que todo sea fácil y sin complicaciones.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SeccionQueHacemos;
