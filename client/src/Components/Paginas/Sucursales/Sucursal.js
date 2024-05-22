// src/Components/Paginas/Sucursales/Sucursal.js

import React from 'react';
import '../../Styles/Sucursal.css'; // Asegúrate de crear este archivo para los estilos personalizados

const Sucursal = ({ title, address, city, state, zip, country, map }) => {
    return (
        <div className="card sucursal-card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{address}<br />{city}, {state}.<br />{zip}<br />{country}</p>
            </div>
            <div className="card-footer text-center">
                {map}
            </div>
        </div>
    );
};

export default Sucursal;
