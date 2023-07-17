import "./Desarrollo.css";
import logoDesarrollo from '../../imagenes/amida-group-logo-temporal.jpeg';


function Desarrollo() {
    return (
        <div className="container-desarrollo">
{/*             <img 
                alt="logo-amida"
                src={logoDesarrollo}
                width="100"
                height="50"
                className="d-inline-block align-center logo-en-desarrollo"
            /> */}
            <h5>Disculpe las molestias, nuestra página web esta en mantenimiento.</h5>
            <p>Por cualquier consulta contactare al siguiente e-mail: <a href='mailto:info@amidagroup.com.ar'>info@amidagroup.com.ar</a></p>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Desarrollo;
