import { Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import '../../../Styles/Catalogos/FormClientes.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { addUser, getUserUnique } from '../../../../Redux/Actions/Actions.js';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function PrimerFormulario({ showForm, id }) {
    const initialUserState = {
        IDUsuario: 0,
        Nombre: '',
        PrimerApellido: '',
        SegundoApellido: '',
        Genero: null,
        Correo: '',
        FechaNacimiento: '',
        Telefono: '',
        IDRol: 0,
        NombreUsuario: '',
        Contraseña: '',
        ConfirmarContraseña: '',
        Habilitado: true
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

    const handleGuardar = asyn () => {
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
                <CardHeader className='Titulo'> Registro de Usuario </CardHeader>

                <CardBody className='cuerpo'>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='nombre'>Nombre: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="nombre" name='nombre' className='form-control' required value={user.Nombre}
                                onChange={(e) => setUser({ ...user, Nombre: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='primerApellido'>Primer Apellido: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="primerApellido" name='primerApellido' className='form-control' required value={user.PrimerApellido}
                                onChange={(e) => setUser({ ...user, PrimerApellido: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='segundoApellido'>Segundo Apellido: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" id="segundoApellido" name='segundoApellido' className='form-control' required value={user.SegundoApellido}
                                onChange={(e) => setUser({ ...user, SegundoApellido: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='genero'>Genero: </Form.Label>
                        </Col>
                        <Col>
                            <Form.Select
                                name="genero"
                                id='genero'
                                value={user.Genero} // Usa el valor del estado
                                onChange={(e) => setUser({ ...user, Genero: e.target.value })}
                            >
                                <option value={""} disabled>Seleccione un Genero</option>
                                <option value={"Masculino"}>Masculino</option>
                                <option value={"Femenino"}>Femenino</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='fechaNacimiento'>Fecha de Nacimiento: </Form.Label>
                        </Col>
                        <Col>
                            <DatePicker
                                name='fechaNacimiento'
                                id='fechaNacimiento'
                                className='form-control'
                                selected={user.FechaNacimiento}
                                onChange={(date) => setUser({ ...user, FechaNacimiento: date })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='correo'>Correo: </Form.Label>
                        </Col>
                        <Col>
                            <input type='text'
                                name="correo"
                                id='correo'
                                value={user.Correo}
                                onChange={(e) => setUser({ ...user, Correo: e.target.value })}
                                required
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='telefono'>Telefono: </Form.Label>
                        </Col>
                        <Col>
                            <input
                                type='text'
                                name="telefono"
                                id='telefono'
                                value={user.Telefono}
                                onChange={(e) => setUser({ ...user, Telefono: e.target.value })}
                                required
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='idRol'>Rol: </Form.Label>
                        </Col>
                        <Col>
                            <Form.Select
                                name="idRol"
                                id='idRol'
                                value={user.IDRol}
                                onChange={(e) => setUser({ ...user, IDRol: parseInt(e.target.value) })}>
                                <option value={"0"} disabled>Seleccione un Rol</option>
                                <option value={"1"}>Administrador</option>
                                <option value={"2"}>Usuario</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='nombreUsuario'>Nombre de Usuario: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="nombreUsuario"
                                id='nombreUsuario'
                                value={user.NombreUsuario}
                                onChange={(e) => setUser({ ...user, NombreUsuario: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='contraseña'>Contraseña: </Form.Label>
                        </Col>
                        <Col>
                            <input type={'password'} id="contraseña" name='contraseña' className='form-control'
                                value={user.Contraseña} onChange={(e) => setUser({ ...user, Contraseña: e.target.value })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='confirmarcontraseña'>Confirmar Contraseña: </Form.Label>
                        </Col>
                        <Col>
                            <input type={'password'} id="confirmarcontraseña" name='confirmarcontraseña' className='form-control'
                                value={user.ConfirmarContraseña} onChange={(e) => setUser({ ...user, ConfirmarContraseña: e.target.value })}
                            />
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

export default PrimerFormulario;