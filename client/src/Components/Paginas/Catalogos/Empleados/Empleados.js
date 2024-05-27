import React from 'react'
import '../../../Styles/Catalogos/FormClientes.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Col, Row } from 'react-bootstrap';
import Usuarios from './IndexEmpleados.js';

function Empleados() {
    return (
        <div className="Clientes" >
            <Row className='justify-content-center'>
                <Col sm={10}>
                    <Usuarios />
                </Col>
            </Row>
        </div>
    )
}
export default Empleados;