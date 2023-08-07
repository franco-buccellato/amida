import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Inicio from './componentes/Inicio/Inicio';
import SeccionQuienesSomos from './componentes/SeccionQuienesSomos/SeccionQuienesSomos';
import SeccionQueHacemos from './componentes/SeccionQueHacemos/SeccionQueHacemos';
import SeccionContacto from './componentes/SeccionContacto/SeccionContacto';
/* import Background from './componentes/Background/Background'; */
import Footer from './componentes/Footer/Footer';
import Copyright from './componentes/Copyright/Copyright';

function App() {
  return (
    <div id='inicio'>      
      <Encabezado/> 
      <Inicio/>
      <SeccionQuienesSomos/>
      <SeccionQueHacemos/>
      <SeccionContacto/>
      {/* <Background/> */}
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
