import React from 'react';
import '../../Styles/Paginas/Catalogo/Fanta.css';
import naranja from '../../../Constants/Fanta/naranja.webp'
import Uva from '../../../Constants/Fanta/Uva.webp'
import fresa from '../../../Constants/Fanta/fresa.webp'
import logo from '../../../Constants/Fanta/logo-fanta.webp'
import { Button } from 'react-bootstrap';

const products = [
  {
    name: "Fanta Naranja",
    description: "Vuelve más divertidos tus momentos con el intenso y frutal sabor de Fanta Naranja. Ideal para una tarde con amigos o para acompañar tus snacks favoritos. ¡Más sabor, más diversión!",
    imgSrc: naranja, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Fanta Uva",
    description: "Refresco frutal sabor uva, intenso y divertido · Ideal para una tarde con amigos o para acompañar tus snacks favoritos",
    imgSrc: Uva, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Fanta Fresa",
    description: "¡Fanta fresa intensifica la diversión y el sabor de tus snacks con su delicioso, frutal y burbujeante sabor! No importa si la disfrutas solo o con amigos, la variedad de sabores de Fanta siempre tiene algo nuevo para ti.",
    imgSrc: fresa, 
    href: "#",
    nutrition: "#",
  },
];

const Fanta = () => {
  return (
    <div className="Fanta-page">
      <header className="Fanta-header">
        <img src={logo} alt="Fanta Logo" className="logo" />
        <br/>
        <br/>
        <p className="subtitle">Mantente Hidratado, Mantente Fuerte</p>
        <p className="title">Sabores de Fanta México</p>
      </header>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <Button variant="dark" href={product.href} className="product-button">Consíguelo aquí</Button>
              <a href={product.nutrition} className="nutrition-link">Información nutricional</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fanta;