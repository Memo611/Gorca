import { Modal,Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import '../../../Styles/Catalogos/FormClientes.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { addUser, getUserUnique } from '../../../../Redux/Actions/Actions.js';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function FormClientes({ showForm, id, showModal, handleClose}) {
    const initialUserState = {
        idEmp: 0,
        Rfc: '',
        Curp: '',
        NomEmp: '',
        ApeP: '',
        ApeM: '',
        Naci: 0,
        NumSoci: '',
        PuestEmp: '',
        SalEmp: 0,
        Contrat: '',
    };

    const dispatch = useDispatch();
    const [employee, setEmployeed] = useState({ initialUserState });

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setEmployeed(response.payload);
                });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setEmployeed(initialUserState);
        showForm();
    };

    const handleGuardar = async () => {
        if (employee.Contraseña === employee.ConfirmarContraseña) {
            try {
                const respuesta = await dispatch(addUser(employee)); // Suponiendo que addUser devuelve una promesa
                console.log('Usuario guardado:', respuesta); // Registra la respuesta para depurar
                setEmployeed(initialUserState); // Limpia el formulario después del envío exitoso
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Error al guardar usuario",
                });
            } finally {
                // Opcionalmente, vuelve a habilitar el botón aquí si se deshabilitó durante la solicitud
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Las Contraseñas no coinciden",
            });
        }
    };


    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registro de Empleados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row sm={7}>
                    <Card className='estilo'>
                        <CardHeader className='Titulo'> Registro de Cliente </CardHeader>

                        <CardBody className='cuerpo'>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor='rfc'> RFC </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="rfc" name='rfc' className='form-control' required value={employee.rfc}
                                        onChange={(e) => setEmployeed({ ...employee, rfc: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='rSocial'>Razon Social: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="rSocial" name='rSocial' className='form-control' required value={employee.rSocial}
                                        onChange={(e) => setEmployeed({ ...employee, rSocial: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='regFiscal'>Registro Fiscal: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="regFiscal" name='regFiscal' className='form-control' required value={employee.regFiscal}
                                        onChange={(e) => setEmployeed({ ...employee, regFiscal: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='cfdi'>CFDI: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="cfdi" name='cfdi' className='form-control' required value={employee.cfdi}
                                        onChange={(e) => setEmployeed({ ...employee, cfdi: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='calle'>Calle: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="calle" name='calle' className='form-control' required value={employee.calle}
                                        onChange={(e) => setEmployeed({ ...employee, calle: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='dirNumero'>Numero: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="dirNumero" name='dirNumero' className='form-control' required value={employee.dirNumero}
                                        onChange={(e) => setEmployeed({ ...employee, dirNumero: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='dirColonia'>Colonia:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="dirColonia" name='dirColonia' className='form-control' required value={employee.dirColonia}
                                        onChange={(e) => setEmployeed({ ...employee, dirColonia: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='dirCiudad'>Ciudad:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="dirCiudad" name='dirCiudad' className='form-control' required value={employee.dirCiudad}
                                        onChange={(e) => setEmployeed({ ...employee, dirCiudad: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='cp'>CP:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="number" id="cp" name='cp' className='form-control' required value={employee.cp}
                                        onChange={(e) => setEmployeed({ ...employee, cp: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='dirPais'>Pais:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="dirPais" name='dirPais' className='form-control' required value={employee.dirPais}
                                        onChange={(e) => setEmployeed({ ...employee, dirPais: e.target.value })} />
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

export default FormClientes;