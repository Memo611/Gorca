// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar.js';
import Inicio from './Components/Paginas/Inicio.js';
import Powerade from './Components/Paginas/Catalogo/Powerade.js';
import Fanta from './Components/Paginas/Catalogo/Fanta.js';
import Coca from './Components/Paginas/Catalogo/Coca.js';

import Promocion10 from './Components/Paginas/Promociones/DiesPorciento.js';
import Promocion20 from './Components/Paginas/Promociones/VeintePorciento.js';
import Promocion2x1 from './Components/Paginas/Promociones/DosxUno.js';
import Promocion4x3 from './Components/Paginas/Promociones/CuatroxTres.js';

import Sucursal from './Components/Paginas/Sucursales/Sucursales.js';
import Acerca from './Components/Paginas/Acerca.js';
import Sucursales from './Components/Paginas/Sucursales/Sucursales.js';

import Clientes from './Components/Paginas/Catalogos/Clientes/Clientes.js';
import Empleados from './Components/Paginas/Catalogos/Empleados/Empleados.js';
import Productos from './Components/Paginas/Catalogos/Productos/Productos.js';

import Ventas from './Components/Paginas/Modulos/Ventas/Ventas.js'; 
import ReporteVentas from './Components/Paginas/Reporte/ReporteVentas.js'
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Catalogo",
    subLinks: [
      { name: 'Powerade', href: '/catalogo/Powerade' },
      { name: 'Fanta', href: '/catalogo/Fanta' },
      { name: 'Coca', href: '/catalogo/Coca' },
    ]
  },
  {
    name: "Sucursales",
    subLinks: [
      { name: 'Guaymas', href: '/sucursales/Guaymas' },
    ]
  },
  {
    name: "Acerca",
    href: "/acerca",
  },
  {
    name: "Configuracion",
    subLinks: [
      { name: 'Clientes', href: '/configuracion/Clientes' },
      { name: 'Productos', href: '/configuracion/Productos' },
      { name: 'Empleados', href: '/configuracion/Empleados' },
      { name: 'Reporte', href:'configuracion/Reporte'}
    ]
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <div className="">
      <Router>
      <Navbar links={links} cartItems={cartItems} clearCart={clearCart} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/catalogo/Powerade' element={<Powerade />} />
          <Route path='/catalogo/Fanta' element={<Fanta />} />
          <Route path='/catalogo/Coca' element={<Coca addToCart={addToCart} />} />
          <Route path='/sucursales/Guaymas' element={<Sucursal />} />
          <Route path='/sucursales' element={<Sucursales />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/configuracion/Clientes' element={<Clientes />} />
          <Route path='/configuracion/Empleados' element={<Empleados />} />
          <Route path='/configuracion/Productos' element={<Productos />} />
          <Route path="/realizar-venta" element={<Ventas cartItems={cartItems}/>} />
          <Route path='configuracion/Reporte' element={<ReporteVentas/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
