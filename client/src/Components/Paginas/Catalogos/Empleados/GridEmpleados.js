import React, { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, deleteEmployee } from "../../../../Redux/Actions/Actions.js";
import Swal from 'sweetalert2';
import FormEmpleados from './FormEmpleados.js';
import '../../../Styles/Catalogos/FormClientes.css';

function GridEmpleados({ idEmployeEdit }) {
    const dispatch = useDispatch();
    const { employees } = useSelector((state) => state.getEmployees);
    const [employeeSelected, setEmployeeSelected] = useState(false);
    const [selectedRowIds, setSelectedRowIds] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formId, setFormId] = useState(0);
    const tableRef = useRef(null);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const columns = [
        { name: "idEmp", label: "ID" },
        { name: "rfc", label: "RFC" },
        { name: "curp", label: "Curp" },
        { name: "nomEmp", label: "Nombre" },
        { name: "apeP", label: "Apellido Paterno" },
        { name: "apeM", label: "Apellido Materno" },
        { name: "naci", label: "Fecha Nacimiento" },
        { name: "numSoci", label: "Numero Social" },
        { name: "puestEmp", label: "Puesto" },
        { name: "salEmp", label: "Salario" },
        { name: "contrat", label: "Dia Contratacion" },
    ];

    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            setSelectedRowIds(allRowsSelected.map(row => employees[row.index]?.idEmp));
            setEmployeeSelected(allRowsSelected.length > 0);
            if (allRowsSelected.length > 0) {
                idEmployeEdit(employees[allRowsSelected[0].index]?.idEmp);
            }
        },
    };

    useEffect(() => {
        dispatch(getEmployees());
    }, [dispatch]);

    const handleNew = () => {
        setFormId(0);
        setShowModal(true);
    };

    const handleEdit = () => {
        if (employeeSelected) {
            const idEmployeEdit = selectedRowIds[0];
            setShowModal(true);
            setFormId(idEmployeEdit);
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un usuario para editar",
            });
        }
    };

    const handleDelete = () => {
        if (employeeSelected) {
            const idEmployeeDelete = selectedRowIds[0];
            Swal.fire({
                title: '¿Está seguro?',
                text: "No podrá revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminarlo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteEmployee(idEmployeeDelete)).then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Empleado eliminado",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            dispatch(getEmployees());
                        });
                    }).catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Error al eliminar Empleado",
                        });
                    });
                }
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un Empleado para eliminar",
            });
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="Botones">
                <Button className="NewUser" variant="primary" onClick={handleNew}>Nuevo</Button>
                <Button className="NewUser" variant="warning" onClick={handleEdit}>Editar</Button>
                <Button className="NewUser" variant="danger" onClick={handleDelete}>Eliminar</Button>
            </div>
            <ThemeProvider theme={darkTheme}>
                <MUIDataTable
                    title={"Lista de Empleados"}
                    data={employees || []}
                    columns={columns}
                    options={options}
                    ref={tableRef}
                />
            </ThemeProvider>
            <FormEmpleados showModal={showModal} handleClose={handleClose} id={formId} showForm={() => setShowModal(false)} />
        </>
    );
}

export default GridEmpleados;
