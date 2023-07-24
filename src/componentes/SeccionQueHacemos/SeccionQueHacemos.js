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
                            <h6 className="encabezado-como-trabajamos-1">Relevamiento</h6>
                            <span className="como-trabajamos-descripcion">
                                Nuestro primer paso es:<br></br>
                                - Conocernos.<br></br>
                                - Ver que es lo que le gusta al cliente.<br></br>
                                - Identificar cuál es su rubro.<br></br>
                                - Interpretar y entender qué quieren mostrar en la web.<br></br>
                                - Identificar a que publico desea apuntar.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-trabajamos-2">
                    <div className="como-trabajamos-2">
                        <img src={queHacemos2} alt="img-web-2"></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-como-trabajamos-2">Planificación</h6>
                            <span className="como-trabajamos-descripcion">
                                Nuestro segundo paso es:<br></br>
                                - Teniendo toda la información relevada planificar el posible contenido de la web.<br></br>
                                - Armar la estructura de la página.<br></br>
                                - Estructurar las secciones y contenido.<br></br>
                                - Comunicación con el cliente para su aprobación.
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
                            <h6 className="encabezado-como-trabajamos-1">Desarrollo</h6>
                            <span className="como-trabajamos-descripcion">
                                Nuestro cuarto paso es:<br></br>
                                - Selecionar las tecnologías a utilizar.<br></br>
                                - Comenzar con el desarrollo de la web.<br></br>
                                - Interacción constante con el cliente para ir mostrando los avances.<br></br>
                                - Posibles cambios o correcciones en esta etapa.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-trabajamos-2">
                    <div className="como-trabajamos-2">
                        <img src={queHacemos4} alt="img-web-5"></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-como-trabajamos-2">Publicación</h6>
                            <span className="como-trabajamos-descripcion">
                                Nuestro quinto paso es:<br></br>
                                - Selecionar el dominio y hosting.<br></br>
                                - Configuración del Hosting.<br></br>
                                - Subir y publicar la página web.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SeccionQueHacemos;
