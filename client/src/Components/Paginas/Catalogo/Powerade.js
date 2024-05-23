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
    description: "Bebida para deportistas edición limitada sabor piña kiwi, dale poder a tu entrenamiento con Powerade, una bebida que le ayuda a tu cuerpo a tener una absorción más rápida de líquidos durante el ejercicio gracias a sus electrolitos.",
    imgSrc: oro, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Moras",
    description: "Bebida rehidratante Powerade sabor moras, ideal para deportistas, ya que cuenta con un sistema recargado de electrolitos.",
    imgSrc: azul, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Frutas",
    description: "Bebida rehidratante Powerade sabor frutas, ayuda a reponer los minerales que pierdes al sudar, como sodio, calcio, potasio y magnesio.",
    imgSrc: rojo, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Uva",
    description: "Bebida rehidratante Powerade sabor uva, está adicionada con vitamina B3, B6 y B12, que contribuyen a mantener y recuperar el rendimiento de los deportistas, ayudando a prevenir el desgaste por el esfuerzo.",
    imgSrc: morado, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Naranja",
    description: "Powerade sabor Naranja. Powerade es una bebida que te ayuda a mantener tu desempeño deportivo gracias a la energía que te dan sus carbohidratos.",
    imgSrc: naranja, 
    href: "#",
    nutrition: "#",
  },
  {
    name: "Powerade Lima limón",
    description: "Powerade sabor lima limón, bebida diseñada para hidratarte y mantener tu cuerpo fresco",
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
              <Button variant="dark" href={product.href} className="product-button">Consíguelo aquí</Button>
              <a href={product.nutrition} className="nutrition-link">Información nutricional</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Powerade;

