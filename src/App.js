import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingEventos from './componentes/LandingEventos/LandingEventos';
import LandingViajes from './componentes/LandingViajes/LandingViajes';
import PaginaPrincipal from './componentes/PaginaPrincipal/PaginaPrincipal';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<PaginaPrincipal/>}/>
        <Route exact path = '/viajes' element = {<LandingViajes/>}/>
        <Route exact path = '/eventos' element = {<LandingEventos/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
