import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar.js'
import Inicio  from './Components/Paginas/Inicio.js';

import Powerade from './Components/Paginas/Catalogo/Powerade.js';
import Fanta from './Components/Paginas/Catalogo/Fanta.js';
import Jumex from './Components/Paginas/Catalogo/Jumex.js';

import Promocion10 from './Components/Paginas/Promociones/DiesPorciento.js';
import Promocion20 from './Components/Paginas/Promociones/VeintePorciento.js';
import Promocion2x1 from './Components/Paginas/Promociones/DosxUno.js';
import Promocion4x3 from './Components/Paginas/Promociones/CuatroxTres.js'

import Sucursal from './Components/Paginas/Sucursales/Sucursales.js';
import Acerca from './Components/Paginas/Acerca.js';
import Sucursales from './Components/Paginas/Sucursales/Sucursales.js'; 

const links = [
  {
      name: "Home",
      href: "/",
  },
  {
      name: "Promociones",
      subLinks:[
        { name: '10%', href: '/promociones/10%' },
        { name: '20%', href: '/promociones/20%' },
        { name: '2x1', href: '/promociones/2x1' },
        { name: '4x3', href: '/promociones/4x3' },
      ]
  },
  {
      name: "Catalogo",
      subLinks:[
        { name: 'Powerade', href: '/catalogo/Powerade' },
        { name: 'Fanta', href: '/catalogo/Fanta' },
        { name: 'Jumex', href: '/catalogo/Jumex' },
      ]
  },
  {
    name: "Sucursales",
    subLinks:[
      { name: 'Guaymas', href: '/sucursales/Guaymas' },
      
    ]
},
  {
      name: "Acerca",
      href: "/acerca",
  },
];

function App() {
  return (
    <div className="">
        <Router>
        <Navbar links={links}/>  
          <Routes>      
          <Route path='/' element={<Inicio />} />
          <Route path='/catalogo/Powerade' element={<Powerade />} />
          <Route path='/catalogo/Fanta' element={<Fanta />} />
          <Route path='/catalogo/Jumex' element={<Jumex />} />
          <Route path='/promociones/10%' element={<Promocion10 />} />
          <Route path='/promociones/20%' element={<Promocion20 />} />
          <Route path='/promociones/2x1' element={<Promocion2x1 />} />
          <Route path='/promociones/4x3' element={<Promocion4x3 />} />
          <Route path='/sucursales/Guaymas' element={<Sucursal />} />
          <Route path='/sucursales' element={<Sucursales />} />
          <Route path='/acerca' element={<Acerca />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
