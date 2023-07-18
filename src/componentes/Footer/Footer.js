import "./Footer.css";
import logoAmida from '../../imagenes/isotipo.png'

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <div className="icono-footer">
                    <ion-icon name="business-outline"></ion-icon>
                </div>
                <div className="nombre-footer">
                    <h6>Dirección</h6>
                </div>
            </div>
            <div className="footer-center">
                <div className="icono-footer">
                    <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="nombre-footer">
                    <h6>Teléfono</h6>
                </div>
            </div>
            <div className="footer-right">
                <div className="icono-footer">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>
                <div className="nombre-footer">
                    <h6>Email</h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
