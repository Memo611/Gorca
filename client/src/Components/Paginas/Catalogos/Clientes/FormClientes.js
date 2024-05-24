import { Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import '../../../Styles/Catalogos/FormClientes.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { addUser, getUserUnique } from '../../../../Redux/Actions/Actions.js';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function FormClientes({ showForm, id }) {
    const initialUserState = {
        idCliente:0,
        rfc: '',
        rSocial: '',
        regFiscal:'',
        cfdi:'',
        calle:'',
        dirNumero: 0,
        dirColonia:'',
        dirCiudad:'',
        cp: 0,
        dirPais:'',
    };

    const dispatch = useDispatch();
    const [user, setUser] = useState({ initialUserState });

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setUser(response.payload);
                });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setUser(initialUserState);
        showForm();
    };

    const handleGuardar = async () => {
        if (user.Contraseña === user.ConfirmarContraseña) {
            try {
                const respuesta = await dispatch(addUser(user)); // Suponiendo que addUser devuelve una promesa
                console.log('Usuario guardado:', respuesta); // Registra la respuesta para depurar
                setUser(initialUserState); // Limpia el formulario después del envío exitoso
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
        <Row sm={7}>
            <Card className='estilo'>
                <CardHeader className='Titulo'> Registro de Cliente </CardHeader>

                <CardBody className='cuerpo'>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='rfc'> RFC </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="rfc" name='rfc' className='form-control' required value={user.rfc}
                                onChange={(e) => setUser({ ...user, rfc: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='rSocial'>Razon Social: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="rSocial" name='rSocial' className='form-control' required value={user.rSocial}
                                onChange={(e) => setUser({ ...user, rSocial: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='regFiscal'>Registro Fiscal: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="regFiscal" name='regFiscal' className='form-control' required value={user.regFiscal}
                                onChange={(e) => setUser({ ...user, regFiscal: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='cfdi'>CFDI: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="cfdi" name='cfdi' className='form-control' required value={user.cfdi}
                                onChange={(e) => setUser({ ...user, cfdi: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='calle'>Calle: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="calle" name='calle' className='form-control' required value={user.calle}
                                onChange={(e) => setUser({ ...user, calle: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='dirNumero'>Numero: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="dirNumero" name='dirNumero' className='form-control' required value={user.dirNumero}
                                onChange={(e) => setUser({ ...user, dirNumero: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='dirColonia'>Colonia:  </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="dirColonia" name='dirColonia' className='form-control' required value={user.dirColonia}
                                onChange={(e) => setUser({ ...user, dirColonia: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='dirCiudad'>Ciudad:  </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="dirCiudad" name='dirCiudad' className='form-control' required value={user.dirCiudad}
                                onChange={(e) => setUser({ ...user, dirCiudad: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='cp'>CP:  </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="cp" name='cp' className='form-control' required value={user.cp}
                                onChange={(e) => setUser({ ...user, cp: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='dirPais'>Pais:  </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="dirPais" name='dirPais' className='form-control' required value={user.dirPais}
                                onChange={(e) => setUser({ ...user, dirPais: e.target.value })} />
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
    );
}

export default FormClientes;