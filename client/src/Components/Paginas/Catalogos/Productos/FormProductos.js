import { Modal,Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import '../../../Styles/Catalogos/FormClientes.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { addProduc, getProducUnique, editProduc, getProducs} from '../../../../Redux/Actions/Actions.js';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function FormProductos({ showForm, id, showModal, handleClose}) {
    const initialUserState = {
        idProd: 0,
        marc: '',
        vol: '',
        CatProd: 0,
        fecFresc: '',
        sabo: '',
        sku: 0,
        prec: 0,
        proveedores: 0,
        clavUni: '',
        clavProd: '',
        baseMan: '',
        desc: '',
        existencia: 0,
        stockMin: 0,
        stockMax: 0
    };

    const dispatch = useDispatch();
    const [produc, setProduc] = useState(initialUserState);

    useEffect(() => {
        if (id > 0) {
            dispatch(getProducUnique(id))
                .then((response) => {
                    setProduc(response.payload);
                }).catch((error) => {
                    console.error('Error fetching produc:', error);
                });
        } else {
            setProduc({
                idProd: 0,
                marc: '',
                vol: '',
                catProd: 0,
                fecFresc: '',
                sabo: '',
                sku: 0,
                prec: 0,
                proveedores: 0,
                clavUni: '',
                clavProd: '',
                baseMan: '',
                desc: '',
                existencia: 0,
                stockMin: 0,
                stockMax: 0
            });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setProduc(initialUserState);
        showForm();
        handleClose();
    };

    const handleGuardar = async () => {
        try {
            if (produc.idProd > 0) { // Si el ID del usuario es mayor que 0, es una edición
                produc.idProd = id;
                await dispatch(editProduc(produc)); // Llamar a la acción de edición en lugar de addUser
            } else {
                await dispatch(addProduc(produc));
            }
            Swal.fire({
                icon: "success",
                title: "Producto guardado",
                showConfirmButton: false,
                timer: 1500,
            });
            handleCancel();
            dispatch(getProducs()); 
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al guardar Producto",
            });
        }
    };


    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Producto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row sm={7}>
                    <Card className='estilo'>
                        <CardHeader className='Titulo'> Registro de Producto </CardHeader>

                        <CardBody className='cuerpo'>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='marc'> Marca: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="marc" name='marc' className='form-control' required value={produc.marc}
                                        onChange={(e) => setProduc({ ...produc, marc: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='vol'>Volumen: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="vol" name='vol' className='form-control' required value={produc.vol}
                                        onChange={(e) => setProduc({ ...produc, vol: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='catProd'>Categoria: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="catProd" name='catProd' className='form-control' required value={produc.catProd}
                                        onChange={(e) => setProduc({ ...produc, catProd: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='fecFresc'>Fecha de Frescura: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="date" id="fecFresc" name='fecFresc' className='form-control' required value={produc.fecFresc}
                                        onChange={(e) => setProduc({ ...produc, fecFresc: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='sabo'>Sabor: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="sabo" name='sabo' className='form-control' required value={produc.sabo}
                                        onChange={(e) => setProduc({ ...produc, sabo: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='sku'>SKU: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="sku" name='sku' className='form-control' required value={produc.sku}
                                        onChange={(e) => setProduc({ ...produc, sku: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='prec'>Precio: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="money" id="prec" name='prec' className='form-control' required value={produc.prec}
                                        onChange={(e) => setProduc({ ...produc, prec: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='proveedores'>Provedor: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="proveedores" name='proveedores' className='form-control' required value={produc.proveedores}
                                        onChange={(e) => setProduc({ ...produc, proveedores: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='objImpu'>Impuesto:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="objImpu" name='objImpu' className='form-control' required value={produc.objImpu}
                                        onChange={(e) => setProduc({ ...produc, objImpu: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='clavUni'>Clave Unidad:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="texto" id="clavUni" name='clavUni' className='form-control' required value={produc.clavUni}
                                        onChange={(e) => setProduc({ ...produc, clavUni: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='clavProd'>Clave del Producto:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="clavProd" name='clavProd' className='form-control' required value={produc.clavProd}
                                        onChange={(e) => setProduc({ ...produc, clavProd: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='baseMan'>Base Manual:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="baseMan" name='baseMan' className='form-control' required value={produc.baseMan}
                                        onChange={(e) => setProduc({ ...produc, baseMan: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='desc'>Descripcion:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="desc" name='desc' className='form-control' required value={produc.desc}
                                        onChange={(e) => setProduc({ ...produc, desc: e.target.value })} />
                                </Col>
                            </Row>
                            
                            <Row>                       
                                <Col>
                                    <Form.Label htmlFor='existencia'>Stock:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="existencia" name='existencia' className='form-control' required value={produc.existencia}
                                        onChange={(e) => setProduc({ ...produc, existencia: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>                       
                                <Col>
                                    <Form.Label htmlFor='stockMin'>Stock Minimo:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="stockMin" name='stockMin' className='form-control' required value={produc.stockMin}
                                        onChange={(e) => setProduc({ ...produc, stockMin: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>                       
                                <Col>
                                    <Form.Label htmlFor='stockMax'>Stock Maximo:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="stockMax" name='stockMax' className='form-control' required value={produc.stockMax}
                                        onChange={(e) => setProduc({ ...produc, stockMax: e.target.value })} />
                                </Col>
                            </Row>

                        </CardBody>

                        <CardFooter>
                            <Col>
                                <Button variant='primary' onClick={handleGuardar}> Guardar</Button>
                                <Button variant="danger" onClick={handleCancel}> Cancelar</Button>
                            </Col>
                        </CardFooter>
                    </Card>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default FormProductos;