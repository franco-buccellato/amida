import "./PaginaPrincipal.css";
import {Link} from 'react-router-dom';
import logotipo from '../../imagenes/isologotipo3.png'

function PaginaPrincipal() {
    return (
        <div className="pagina-principal-container">
            <div className="container-botones">
                <img
                    className="logo-inicio"
                    src={logotipo}
                >
                </img>
                <Link className="button" to = {'/eventos'}>
                    {/* <button className="boton-eventos"> */}
                        Eventos Corpotativos
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    {/* </button> */}
                </Link>
                <Link className="button" to = {'/eventos'}>
                    {/* <button className="boton-viajes"> */}
                        Viajes
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    {/* </button> */}
                </Link>
            </div>
        </div>
    );
}

export default PaginaPrincipal;
