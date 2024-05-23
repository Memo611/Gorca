// src/Components/Paginas/Sucursales/Sucursales.js

import React from 'react';
import Sucursal from './Sucursal';
import '../../Styles/Paginas/Sucursales/Sucursales.css'; // Asegúrate de crear este archivo para los estilos personalizados

const Sucursales = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Sucursal 
                        title="Sucursal centro"
                        address="Boulevard Agustín García López 876"
                        city="Las Delicias"
                        state="Heroica Guaymas, Son."
                        zip="85427"
                        country="México"
                        map={<div className="map-placeholder">MAPA</div>}
                    />
                </div>
                <div className="col-md-6">
                    <Sucursal 
                        title="Sucursal Guaymas Norte"
                        address="Calle Mar de Java 14"
                        city="Luis Donaldo Colosio"
                        state="Heroica Guaymas, Son."
                        zip="85424"
                        country="México"
                        map={<div className="map-placeholder">MAPA</div>}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sucursales;

