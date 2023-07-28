import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";

import imagenCarrousel1 from '../../imagenes/fondo-carrousel2 (3).png';
import imagenCarrousel2 from '../../imagenes/fondo-carrousel2 (8).png';
import imagenCarrousel3 from '../../imagenes/fondo-carrousel2 (2).png';
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
                <Carousel.Caption className="carousel-caption-1">
                    <div className="card-marketing-carousel-caption">
                        <h3>Nos esforzamos para que cada evento que planificamos se convierta en una experiencia verdaderamente inolvidable.</h3>
                        <p>“Destinos excepcionales, eventos inolvidables”</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>}
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel2}
                    alt="Third slide"
                />
                <Carousel.Caption className="carousel-caption-2">
                    <div className="card-marketing-carousel-caption">
                        <h3>Organizamos eventos que reflejen los valores y cultura de tu organización, promoviendo la integración y el crecimiento profesional de todos los involucrados.</h3>
                        <p>“Destinos excepcionales, eventos inolvidables”</p>
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
                        <h3>Nos dedicamos a ofrecer soluciones integrales y eficientes para todas tus necesidades de viajes corporativos.</h3>
                        <p>“Destinos excepcionales, eventos inolvidables”</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Inicio;
