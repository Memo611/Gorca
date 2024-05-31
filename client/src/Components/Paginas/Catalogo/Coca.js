import React, { useState } from 'react';
import '../../Styles/Paginas/Catalogo/Coca.css';
import DosLitros from '../../../Constants/Coca/Coca2l.webp';
import Treslitros from '../../../Constants/Coca/Coca3l.webp';
import DosLitrosymedio from '../../../Constants/Coca/coca25l.webp';
import logo from '../../../Constants/Coca/Coca.webp';
import { Button } from 'react-bootstrap';

const products = [
  { 
    id: 45,
    name: "Coca-Cola 2L",
    description: "Refresco Coca-Cola 2L",
    imgSrc: DosLitros, 
    href: "#",
    quantity: 1,
    price: 400,
  },
  {
    id: 70,
    name: "Coca-Cola 3L",
    description: "Refresco Coca-Cola 3L",
    imgSrc: Treslitros, 
    href: "#",
    quantity: 1,
    price: 550,
  },
  {
    id: 16,
    name: "Coca-Cola 2.5L",
    description: "Refresco Coca-Cola 2.5L",
    imgSrc: DosLitrosymedio, 
    href: "#",
    quantity: 1,
    price: 185,
  },
];

const Coca = ({ addToCart }) => {


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
              <Button variant="dark" onClick={() => addToCart(product)} className="product-button">Agregar</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coca;