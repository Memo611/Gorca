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
        { name: "Rfc", label: "RFC" },
        { name: "Curp", label: "Curp" },
        { name: "NomEmp", label: "Nombre" },
        { name: "ApeP", label: "Apellido Paterno" },
        { name: "ApeM", label: "Apellido Materno" },
        { name: "Naci", label: "Fecha Nacimiento" },
        { name: "NumSoci", label: "Numero Social" },
        { name: "PuestEmp", label: "Puesto" },
        { name: "SalEmp", label: "Salario" },
        { name: "Contrat", label: "Dia Contratacion" },
    ];

    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            setSelectedRowIds(allRowsSelected.map(row => employees[row.index]?.idEmpleado));
            setEmployeeSelected(allRowsSelected.length > 0);
            if (allRowsSelected.length > 0) {
                idEmployeEdit(employees[allRowsSelected[0].index]?.idEmpleado);
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
            setFormId(selectedRowIds[0]);
            setShowModal(true);
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
            const idUserDelete = selectedRowIds[0];
            dispatch(deleteEmployee(idUserDelete)).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Usuario eliminado",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    dispatch(getEmployees());
                });
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un usuario para eliminar",
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
