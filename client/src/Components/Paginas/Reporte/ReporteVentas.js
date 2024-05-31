import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const ReporteVentas = () => {
    const [fechaInicio, setFechaInicio] = useState('');
    const [fechaFin, setFechaFin] = useState('');
    const [ventasPorSemana, setVentasPorSemana] = useState([]);
    const [totalVentas, setTotalVentas] = useState(0);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Verificar si ambas fechas están definidas
    if (fechaInicio && fechaFin) {
        // Simulación de datos almacenados localmente
    const ventasAlmacenadas = [
        { Folio: 200, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 98098099821, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-31', Hora_Emision_Fac: '09:01:20.0000000', Subtotal_Fac: 1000.00, IVA_Fac: 0.16, Total_Fac: 1200.00, ID_Cli: 1, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 201, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 90092099821, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-31', Hora_Emision_Fac: '10:01:20.0000000', Subtotal_Fac: 1000.00, IVA_Fac: 0.16, Total_Fac: 1200.00, ID_Cli: 1, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 202, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 90293093821, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-31', Hora_Emision_Fac: '11:01:20.0000000', Subtotal_Fac: 1200.00, IVA_Fac: 0.16, Total_Fac: 1500.00, ID_Cli: 1, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 302, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 90293093821, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-31', Hora_Emision_Fac: '11:01:20.0000000', Subtotal_Fac: 1500.00, IVA_Fac: 0.16, Total_Fac: 1700.00, ID_Cli: 2, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 303, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 9023233093821, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-10', Hora_Emision_Fac: '11:01:20.0000000', Subtotal_Fac: 1000.00, IVA_Fac: 0.16, Total_Fac: 1200.00, ID_Cli: 3, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 304, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 902123593821, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-12', Hora_Emision_Fac: '11:01:20.0000000', Subtotal_Fac: 1500.00, IVA_Fac: 0.16, Total_Fac: 1700.00, ID_Cli: 4, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 1502, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 73928463728374827382, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-23', Hora_Emision_Fac: '12:16:11.0000000', Subtotal_Fac: 4500.00, IVA_Fac: 0.16, Total_Fac: 5220.00, ID_Cli: 1, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 1582, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 73928463728974827382, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-11', Hora_Emision_Fac: '12:16:11.0000000', Subtotal_Fac: 4700.00, IVA_Fac: 0.16, Total_Fac: 6220.00, ID_Cli: 2, ID_Gorca: 1, Habilitado: 1 },
        { Folio: 1602, Version: 4, Metodo_Pago: 'Efectivo', Num_Certif: 73928463728374827382, Forma_Pago: 'Sola Exhibicion', Fecha_Emision_Fac: '2024-05-23', Hora_Emision_Fac: '12:16:11.0000000', Subtotal_Fac: 4900.00, IVA_Fac: 0.16, Total_Fac: 52990.00, ID_Cli: 1, ID_Gorca: 1, Habilitado: 1 }
    ];
        // Filtrar las ventas por fecha
        const ventasFiltradas = ventasAlmacenadas.filter(venta => {
            const fechaVenta = new Date(venta.Fecha_Emision_Fac);
            return fechaVenta >= new Date(fechaInicio) && fechaVenta <= new Date(fechaFin);
        });
        const total = ventasFiltradas.reduce((acc, venta) => acc + venta.Total_Fac, 0);
        setTotalVentas(total);
          // Actualizar el estado con las ventas filtradas
            setVentasPorSemana(ventasFiltradas);
    } else {
        // Si alguna de las fechas no está definida, mostrar un mensaje de error o manejarlo según tus necesidades
        console.error('Por favor, selecciona ambas fechas.');
    }
    };
    return (
        <div>
            <h2>Reporte de Ventas por Semana</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Fecha de Inicio:</Form.Label>
                    <Form.Control type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha de Fin:</Form.Label>
                    <Form.Control type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Generar Reporte
                </Button>
            </Form>

            {ventasPorSemana !== null && ventasPorSemana.length > 0 && (
                <div>
                    <h3>Reporte de Ventas por Semana</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Folio</th>
                                <th>Versión</th>
                                <th>Método de Pago</th>
                                <th>Número de Certificado</th>
                                <th>Forma de Pago</th>
                                <th>Fecha de Emisión</th>
                                <th>Hora de Emisión</th>
                                <th>Subtotal</th>
                                <th>IVA</th>
                                <th>Total</th>
                                <th>ID Cliente</th>
                                <th>ID Gorca</th>
                                <th>Habilitado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventasPorSemana.map((venta, index) => (
                                <tr key={index}>
                                    <td>{venta.Folio}</td>
                                    <td>{venta.Version}</td>
                                    <td>{venta.Metodo_Pago}</td>
                                    <td>{venta.Num_Certif}</td>
                                    <td>{venta.Forma_Pago}</td>
                                    <td>{venta.Fecha_Emision_Fac}</td>
                                    <td>{venta.Hora_Emision_Fac}</td>
                                    <td>{venta.Subtotal_Fac}</td>
                                    <td>{venta.IVA_Fac}</td>
                                    <td>{venta.Total_Fac}</td>
                                    <td>{venta.ID_Cli}</td>
                                    <td>{venta.ID_Gorca}</td>
                                    <td>{venta.Habilitado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <p>Total de ventas: {totalVentas}</p>
                </div>
            )}
            {ventasPorSemana !== null && ventasPorSemana.length === 0 && (
                <p>No hay ventas para el rango de fechas seleccionado.</p>
            )}
        </div>
    );
};
export default ReporteVentas;
