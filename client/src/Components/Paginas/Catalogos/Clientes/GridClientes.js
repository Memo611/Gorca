import React, { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../../Redux/Actions/Actions.js";
import Swal from 'sweetalert2';
import FormClientes from './FormClientes';
import '../../../Styles/Catalogos/FormClientes.css';

function Clientes({ idUserEdit }) {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.getUsers);
    const [userSelected, setUserSelected] = useState(false);
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
        { name: "idCliente", label: "ID" },
        { name: "rfc", label: "RFC" },
        { name: "rSocial", label: "Razon Social" },
        { name: "regFiscal", label: "Registro Fiscal" },
        { name: "cfdi", label: "CFDI" },
        { name: "calle", label: "Calle" },
        { name: "dirNumero", label: "Direccion" },
        { name: "dirColonia", label: "Colonia" },
        { name: "dirCiudad", label: "Ciudad" },
        { name: "cp", label: "CP" },
        { name: "dirPais", label: "Pais" },
    ];

    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            setSelectedRowIds(allRowsSelected.map(row => users[row.index]?.idCliente));
            setUserSelected(allRowsSelected.length > 0);
            if (allRowsSelected.length > 0) {
                idUserEdit(users[allRowsSelected[0].index]?.idCliente);
            }
        },
    };

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleNew = () => {
        setFormId(0);
        setShowModal(true);
    };
    
    const handleEdit = () => {
        if (userSelected) {
            const idUserEdit = selectedRowIds[0];
            setShowModal(true);
            setFormId(idUserEdit);
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un Empleado para editar",
            });
        }
    };

    const handleDelete = () => {
        if (userSelected) {
            const idUserDelete = selectedRowIds[0];
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
                    dispatch(deleteUser(idUserDelete)).then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Empleado eliminado",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            dispatch(getUsers());
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
                    title={"Lista de Clientes"}
                    data={users || []}
                    columns={columns}
                    options={options}
                    ref={tableRef}
                />
            </ThemeProvider>
            <FormClientes showModal={showModal} handleClose={handleClose} id={formId} showForm={() => setShowModal(false)} />
        </>
    );
}

export default Clientes;
