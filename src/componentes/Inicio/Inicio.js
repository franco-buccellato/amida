import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";

import imagenCarrousel1 from '../../imagenes/fondo-carrousel-1.png';
import imagenCarrousel2 from '../../imagenes/fondo-carrousel-2.png';
import imagenCarrousel3 from '../../imagenes/fondo-carrousel-3.png';
import imagenCarrousel4 from '../../imagenes/fondo-carrousel-4.png';

function Inicio() {
    return (
        <Carousel>
{            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption-3">
                    <div className="card-marketing-carousel-caption">
                        <h3>NUESTRAS EXPERIENCIAS NO TIENEN LÍMITES</h3>
                        <p>Amida</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel2}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-3">
                    <div className="card-marketing-carousel-caption">
                        <h3>EVENTOS CORPORATIVOS</h3>
                        <p>Amida</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel3}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-3">
                    <div className="card-marketing-carousel-caption">
                        <h3>COMUNICACIÓN INTERNA</h3>
                        <p>Amida</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel4}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-3">
                    <div className="card-marketing-carousel-caption">
                        <h3>TEAM BUILDING</h3>
                        <p>Amida</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Inicio;
