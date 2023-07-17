import './App.css';
import Encabezado from './componentes/Encabezado/Encabezado';
import Inicio from './componentes/Inicio/Inicio';
import SeccionQuienesSomos from './componentes/SeccionQuienesSomos/SeccionQuienesSomos';
/* import SeccionServicios from './componentes/SeccionServicios/SeccionServicios';
import SeccionComoTrabajamos from './componentes/SeccionComoTrabajamos/SeccionComoTrabajamos';
import SeccionClientes from './componentes/SeccionClientes/SeccionClientes';
import SeccionContacto from './componentes/SeccionContacto/SeccionContacto'; */
import Background from './componentes/Background/Background';
/* import Footer from './componentes/Footer/Footer'; */
/* import Desarrollo from './componentes/Desarrollo/Desarrollo';
 */
function App() {
  return (
    <div id='inicio'>
{/*       <Desarrollo/> */}
      
      <Encabezado/> 
      <Inicio/>
      <SeccionQuienesSomos/>
      {/* <SeccionServicios/>
      <SeccionComoTrabajamos/>
      <SeccionClientes/>
      <SeccionContacto/> */}
      <Background/>
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
