// src/Components/Paginas/Acerca.js

import React from 'react';
import '../Styles/Paginas/Acerca.css'; 
import imagen from '../../Gorca.jpg'; 

const Acerca = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Acerca de</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="section">
                        <h3>¿Cómo empezamos?</h3>
                        <p>sssssskdjskdlsundasojcisdjfvhjdbfndo djfhciskjdfnicayihnbds oduchivb</p>
                    </div>
                    <div className="section">
                        <h3>¿Qué ofrecemos?</h3>
                        <p>iecbvbiwevhedcbjedkcztjhjwhc edubchjwbeyhcwe</p>
                    </div>
                    <div className="section">
                        <h3>Valores de la empresa</h3>
                        <p>kidcbhcidbeiybclkfjbklasic kdehcbilebi cdjcbiceb</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="image-container">
                        <img src={imagen} alt="Imagen" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acerca;
