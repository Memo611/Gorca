import { Modal,Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import '../../../Styles/Catalogos/FormClientes.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { addEmployee, getEmployeeUnique } from '../../../../Redux/Actions/Actions.js';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function FormClientes({ showForm, id, showModal, handleClose}) {
    const initialUserState = {
        idEmp: 0,
        rfc: '',
        curp: '',
        nomEmp: '',
        apeP: '',
        apeM: '',
        naci: 0,
        numSoci: '',
        puestEmp: '',
        salEmp: 0,
        contrat: '',
        habilitado: 1
    };

    const dispatch = useDispatch();
    const [employee, setEmployeed] = useState({ initialUserState });

    useEffect(() => {
        if (id > 0) {
            dispatch(getEmployeeUnique(id))
                .then((response) => {
                    setEmployeed(response.payload);
                }).catch((error) => {
                    console.error('Error fetching user:', error);
                });
        } else {
            setEmployeed({
                idEmp: 0,
                rfc: '',
                curp: '',
                nomEmp: '',
                apeP: '',
                apeM: '',
                naci: 0,
                numSoci: '',
                puestEmp: '',
                salEmp: 0,
                contrat: '',
            });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setEmployeed(initialUserState);
        showForm();
        handleClose();
    };

    const handleGuardar = async () => {
        try {
            await dispatch(addEmployee(employee));
            Swal.fire({
                icon: "success",
                title: "Empleado guardado",
                showConfirmButton: false,
                timer: 1500,
            });
            handleCancel();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al guardar Empleado",
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
                        <CardHeader className='Titulo'> Registro de Empleado </CardHeader>

                        <CardBody className='cuerpo'>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor='rfc'> RFC: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="rfc" name='rfc' className='form-control' required value={employee.rfc}
                                        onChange={(e) => setEmployeed({ ...employee, rfc: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='curp'>Curp: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="curp" name='curp' className='form-control' required value={employee.curp}
                                        onChange={(e) => setEmployeed({ ...employee, curp: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='nomEmp'>Nombre: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="nomEmp" name='nomEmp' className='form-control' required value={employee.nomEmp}
                                        onChange={(e) => setEmployeed({ ...employee, nomEmp: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='apeP'>Apellido Paterno: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="apeP" name='apeP' className='form-control' required value={employee.apeP}
                                        onChange={(e) => setEmployeed({ ...employee, apeP: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='apeM'>Apellido Materno: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="apeM" name='apeM' className='form-control' required value={employee.apeM}
                                        onChange={(e) => setEmployeed({ ...employee, apeM: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='naci'>Fecha de Nacimiento: </Form.Label>
                                </Col>
                                <Col>
                                    <input type="date" id="naci" name='naci' className='form-control' required value={employee.naci}
                                        onChange={(e) => setEmployeed({ ...employee, naci: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='numSoci'>NSS:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="numSoci" name='numSoci' className='form-control' required value={employee.numSoci}
                                        onChange={(e) => setEmployeed({ ...employee, numSoci: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='puestoEmp'>Puesto:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="text" id="puestoEmp" name='puestoEmp' className='form-control' required value={employee.puestoEmp}
                                        onChange={(e) => setEmployeed({ ...employee, puestoEmp: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='salEmp'>Salario:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="money" id="salEmp" name='salEmp' className='form-control' required value={employee.salEmp}
                                        onChange={(e) => setEmployeed({ ...employee, salEmp: e.target.value })} />
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Label htmlFor='contrat'>Fecha de Contratacion:  </Form.Label>
                                </Col>
                                <Col>
                                    <input type="date" id="contrat" name='contrat' className='form-control' required value={employee.contrat}
                                        onChange={(e) => setEmployeed({ ...employee, contrat: e.target.value })} />
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