import "./Encabezado.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logoInicial from '../../imagenes/isologotipo.png'
import logoModificado from '../../imagenes/isotipo.png'

function Encabezado() {


    const ModifyNavBar = () => {
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (150 > currentScrollPos) {
                document.getElementById('container-nav-modify').style.display = 'flex';
                document.getElementById('container-nav-modify').style.flexDirection = 'column';
                document.getElementById('logo-navBar').src = logoInicial;
            } else {
                document.getElementById('container-nav-modify').style.display = 'flex';
                document.getElementById('container-nav-modify').style.flexDirection = 'row';
                document.getElementById('logo-navBar').src = logoModificado;
            }
        }
    }
    ModifyNavBar();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='fixed-top navBar'>
            <Container className='container-nav' id='container-nav-modify'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className='navBarBrand' href="#inicio">
                    <img
                        alt=""
                        src={logoInicial}
                        /* width="50" */
                        /* height="50" */
                        className="d-inline-block align-center logo-inicial"
                        id='logo-navBar'
                    />{' '}
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='navLink' href="#inicio">Inicio</Nav.Link>
                        <Nav.Link className='navLink' href="#quienes-somos">Quiénes Somos</Nav.Link>
                        <Nav.Link className='navLink' href="#que-hacemos">Que Hacemos</Nav.Link>
                        <Nav.Link className='navLink' href="#contactanos">Contactanos</Nav.Link>
                        <Nav.Link className='navLink' href="#clientes">Clientes</Nav.Link>
                        <Nav.Link className='navLink' href="#proveedores">Proveedores</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        
    );
}

export default Encabezado;