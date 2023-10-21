import Encabezado from '../Encabezado/Encabezado';
import Inicio from '../Inicio/Inicio';
import SeccionQuienesSomos from '../SeccionQuienesSomos/SeccionQuienesSomos';
import SeccionQueHacemos from '../SeccionQueHacemos/SeccionQueHacemos';
import SeccionContacto from '../SeccionContacto/SeccionContacto';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';

function LandingViajes() {
    return (
        <div id='inicio'>      
            <Encabezado/> 
            <Inicio/>
            <SeccionQuienesSomos/>
            <SeccionQueHacemos/>
            <SeccionContacto/>
            <Footer/>
            <Copyright/>
        </div>
        );
}

export default LandingViajes;