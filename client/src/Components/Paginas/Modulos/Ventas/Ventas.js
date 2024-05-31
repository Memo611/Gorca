// src/components/VentaForm.js
import { Modal, Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addVenta, getUsers } from '../../../../Redux/Actions/Actions.js';

const Ventas = ({ cartItems }) => {
    const location = useLocation();
    const clienteIDs = useSelector(state => state.users);
    const dispatch = useDispatch();
    const initialUserState = {
        fol: 0,
        ver: 0,
        metPago: '',
        numCer: 0,
        forPago: '',
        subt: 0,
        iva: 0.16,
        tot: 0,
        idCliente: 0,
        idProd: 0,
        cant: 0,
        pmv: 0,
        importe: 0,
        descuento: 0
    };

    const [sale, setSale] = useState(initialUserState);

    const handleCancel = () => {
        setSale(initialUserState);
    };
    const handleSubmit = async () => {
        dispatch(addVenta(sale));
        setSale(initialUserState);
    };
    // Generar número aleatorio de 15 dígitos
    useEffect(() => {
        const generateRandomNumber = () => {
            let randomNumber = '';
            for (let i = 0; i < 15; i++) {
                randomNumber += Math.floor(Math.random() * 10).toString();
            }
            return randomNumber;
        };

        setSale(prevState => ({
            ...prevState,
            numCer: generateRandomNumber()
        }));
    }, []);

    useEffect(() => {
        if (cartItems && cartItems.length > 0) { // Verifica si hay elementos en el carrito
            // Calcula el subtotal sumando los precios de los productos en el carrito
            const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
            // Actualiza el estado del subtotal
            setSale(prevState => ({
                ...prevState,
                subt: subtotal
            }));
            dispatch(getUsers());
        } else {
            // Si no hay elementos en el carrito, reinicia el subtotal y el total
            setSale(prevState => ({
                ...prevState,
                subt: 0,
                tot: 0
            }));
        }
    }, [cartItems, sale.iva, dispatch]); // Agrega sale.iva como dependencia para que se actualice cuando cambie

    const selectedProductId = cartItems.length > 0 ? cartItems[0].id : '';
    // Manejar el cambio del ID del cliente
    const handleClienteIDChange = (e) => {
        const selectedID = e.target.value;
        setSale({ ...sale, idCliente: selectedID });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSale(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div>
            <h1>Detalles de la Venta</h1>
            <div>
                {cartItems && cartItems.map((item, index) => (
                    <div key={index}>
                        <p>Nombre: {item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio Unitario: {item.price}</p>
                    </div>
                ))}
            </div>
            <Row sm={7}>
                <Card className='estilo'>
                    <CardHeader className='Titulo'> Registro de Venta </CardHeader>

                    <CardBody className='cuerpo'>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='ver'>Version: </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="ver" name='ver' className='form-control' disabled required value={2}
                                    onChange={handleInputChange} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='metPago'> Metodo Pago: </Form.Label>
                            </Col>
                            <Col>
                                <select type="text" id="metPago" name='metPago' className='form-control' required value={sale.metPago}
                                    onChange={(e) => setSale({ ...sale, metPago: e.target.value })} >
                                    <option value="">Seleccionar Método de Pago</option>
                                    <option value="Efectivo">Efectivo</option>
                                    <option value="Tarjeta">Tarjeta</option>
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='numCer'>Numero de Certificado: </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="numCer" name='numCer' className='form-control' required disabled value={sale.numCer}
                                    onChange={(e) => setSale({ ...sale, numCer: e.target.value })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='forPago'>Forma de Pago: </Form.Label>
                            </Col>
                            <Col>
                                <select type="text" id="forPago" name='forPago' className='form-control' required value={sale.forPago}
                                    onChange={(e) => setSale({ ...sale, forPago: e.target.value })} >
                                    <option value="">Seleccionar Forma de Pago</option>
                                    <option value="Efectivo">Sola Exhibicion</option>
                                    <option value="Tarjeta">Credito</option>
                                </select>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='subt'>SubTotal: </Form.Label>
                            </Col>
                            <Col>
                                <input type="number" id="subt" name='subt' className='form-control' required disabled value={sale.subt}
                                    onChange={(e) => setSale({ ...sale, subt: parseFloat(e.target.value) })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='iva'>IVA:  </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="iva" name='iva' className='form-control' disabled required value={0.16}
                                    onChange={(e) => setSale({ ...sale, iva: parseFloat(e.target.value) })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='tot'>Total:  </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="tot" name='tot' className='form-control' required disabled value={(sale.subt * sale.iva) + sale.subt}
                                    onChange={(e) => setSale({ ...sale, tot: e.target.value })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='idCliente'>Id Cliente:  </Form.Label>
                            </Col>
                            <Col>
                                <Form.Control as="select" id="idCliente" name='idCliente' className='form-control' required value={sale.idCliente} onChange={handleClienteIDChange}>
                                    <option value="">Seleccionar ID de Cliente</option>
                                    {clienteIDs && clienteIDs.map(cliente => (
                                        <option key={cliente.idCliente} value={cliente.idCliente}>{cliente.idCliente}</option>
                                    ))}
                                </Form.Control>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='idProd'>Id Producto:  </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="idProd" name='idProd' className='form-control' required disabled value={sale.idProd || selectedProductId}
                                    onChange={(e) => setSale({ ...sale, idProd: e.target.value })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='cant'> Cantidad:  </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="cant" name='cant' className='form-control' required disabled value={sale.cant || (cartItems.length > 0 ? cartItems[0].quantity : '')}
                                    onChange={(e) => setSale({ ...sale, cant: e.target.value })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='pmv'>PMV:  </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="pmv" name='pmv' className='form-control' required disabled value={sale.pmv || (cartItems.length > 0 ? cartItems[0].price : '')}
                                    onChange={(e) => setSale({ ...sale, pmv: e.target.value })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='importe'>Importe:  </Form.Label>
                            </Col>
                            <Col>
                                <input type="text" id="importe" name='importe' className='form-control' required  disabled value={(sale.subt * sale.iva) + sale.subt}
                                    onChange={(e) => setSale({ ...sale, importe: e.target.value })} />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label htmlFor='descuento'>Descuento:  </Form.Label>
                            </Col>
                            <Col>
                                <select type="text" id="descuento" name='descuento' className='form-control' required value={sale.descuento}
                                    onChange={(e) => {
                                        const selectedDiscount = parseFloat(e.target.value);
                                        const subtotal = sale.subt || 0; // Subtotal
                                        const discountAmount = subtotal * (selectedDiscount / 100); // Calcula el monto de descuento
                                        const total = subtotal - discountAmount; // Calcula el total con descuento
                                        const importe = total * sale.iva + total; // Calcula el importe con IVA
                                        setSale({
                                            ...sale,
                                            descuento: selectedDiscount,
                                            importe: importe // Actualiza el importe con el descuento aplicado
                                        });
                                    }} >
                                    <option value="">Seleccionar Descuento</option>
                                    <option value="10">10%</option>
                                    <option value="20">20%</option>
                                </select>
                            </Col>
                        </Row>


                    </CardBody>

                    <CardFooter>
                        <Col>
                            <Button variant='primary' onClick={handleSubmit}> Realizar Compra</Button>
                            <Button variant="danger" onClick={handleCancel}> Cancelar</Button>
                        </Col>
                    </CardFooter>
                </Card>
            </Row>
        </div>
    );
};

export default Ventas;
