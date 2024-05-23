import React from 'react';
import '../../Styles/Paginas/Catalogo/Powerade.css';
import oro from '../../../Constants/Powerade/width1961.webp'
import azul from '../../../Constants/Powerade/width1024.webp'
import rojo from '../../../Constants/Powerade/width1960.webp'
import morado from '../../../Constants/Powerade/width1970.webp'
import verde from '../../../Constants/Powerade/width1980.webp'
import naranja from '../../../Constants/Powerade/width1990.webp'
import logo from '../../../Constants/Powerade/logo_pwd.webp'
import { Button } from 'react-bootstrap';

const products = [
  {
    name: "Powerade Gold Rush",
    description: "Powerade GOld Rush 1 Litro",
    imgSrc: oro, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Moras",
    description: "Powerade Moras 1 Litro",
    imgSrc: azul, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Frutas",
    description: "Powerade Ponche de Frutas 1 Litro",
    imgSrc: rojo, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Uva",
    description: "Powerade Uva 1 Litro",
    imgSrc: morado, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Naranja",
    description: "Powerade Naranja 1 Litro",
    imgSrc: naranja, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Lima limón",
    description: "Powerade Lima Limon 1 Litro",
    imgSrc: verde, 
    href: "#",
    nutrition: "#",
  },
];

const Powerade = () => {
  return (
    <div className="powerade-page">
      <header className="powerade-header">
        <img src={logo} alt="Powerade Logo" className="logo" />
        <br/>
        <br/>
        <p className="subtitle">Mantente Hidratado, Mantente Fuerte</p>
        <p className="title">Variedades</p>
      </header>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <Button variant="dark" href={product.href} className="product-button"> Agregar </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Powerade;

