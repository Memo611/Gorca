import React from 'react';
import '../../Styles/Paginas/Catalogo/Coca.css';
import naranja from '../../../Constants/Fanta/naranja.webp'
import Uva from '../../../Constants/Fanta/Uva.webp'
import fresa from '../../../Constants/Fanta/fresa.webp'
import logo from '../../../Constants/Fanta/logo-fanta.webp'
import { Button } from 'react-bootstrap';

const products = [
  {
    name: "Coca-Cola 2L",
    description: "Refresco Fanta Sabor Naranja 600 ml PET 12U HARMONY",
    imgSrc: naranja, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Coca-Cola 3L",
    description: "Refresco Fanta Sabor Uva 600 ml PET 12U HARMONY",
    imgSrc: Uva, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Coca-Cola 1L",
    description: "Refresco Fanta Sabor Fresa 600 ml PET 12U HARMONY",
    imgSrc: fresa, 
    href: "#",
    nutrition: "#",
  },
];

const Coca = () => {
  return (
    <div className="Coca-page">
      <header className="Coca-header">
        <img src={logo} alt="Coca Logo" className="logo" />
        <br/>
        <br/>
        <p className="title">Sabores de Fanta México</p>
      </header>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <Button variant="dark" href={product.href} className="product-button">Agregar</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coca;