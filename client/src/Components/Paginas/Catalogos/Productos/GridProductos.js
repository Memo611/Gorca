import React, { useEffect, useRef, useState } from "react";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { getProducs, deleteProduc } from "../../../../Redux/Actions/Actions.js";
import Swal from 'sweetalert2';
import FormProductos from './FormProductos.js';
import '../../../Styles/Catalogos/FormClientes.css';

function GridProductos({ idProducEdit }) {
    const dispatch = useDispatch();
    const { producs } = useSelector((state) => state.getProducs);
    const [producSelected, setProducSelected] = useState(false);
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
        { name: "idProd", label: "ID" },
        { name: "marc", label: "Marca" },
        { name: "vol", label: "Volumen" },
        { name: "catProd" ,label: "Categoria"},
        { name: "fecFresc", label: "Fecha Max Frescura" },
        { name: "sabo", label: "Sabor" },
        { name: "sku", label: "SKU" },
        { name: "prec", label: "Precio" },
        { name: "proveedor", label: "Provedor"},
        { name: "objImpu", label: "Impuesto" },
        { name: "clavUni", label: "Clave Unidad" },
        { name: "clavProd", label: "Clave del Producto" },
        { name: "baseMan", label: "Base Manual" },
        { name: "desc", label: "Descripcion" },
        { name: "existencia", label: "Existencia" },
        { name: "stockMin", label: "Stock Minimo" },
        { name: "stockMax", label: "Stock Maximo" },
    ];

    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            setSelectedRowIds(allRowsSelected.map(row => producs[row.index]?.idProd));
            setProducSelected(allRowsSelected.length > 0);
            if (allRowsSelected.length > 0) {
                idProducEdit(producs[allRowsSelected[0].index]?.idProd);
            }
        },
    };

    useEffect(() => {
        dispatch(getProducs())
    }, [dispatch]);

    const handleNew = () => {
        setFormId(0);
        setShowModal(true);
    };

    const handleEdit = () => {
        if (producSelected) {
            const idProducEdit = selectedRowIds[0];
            setShowModal(true);
            setFormId(idProducEdit);
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un Empleado para editar",
            });
        }
    };

    const handleDelete = () => {
        if (producSelected) {
            const idProducDelete = selectedRowIds[0];
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
                    dispatch(deleteProduc(idProducDelete)).then(() => {
                        Swal.fire({
                            icon: "success",
                            title: "Producto eliminado",
                            showConfirmButton: false,
                            timer: 1500,
                        }).then(() => {
                            dispatch(getProducs());
                        });
                    }).catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Error al eliminar Producto",
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
                    title={"Lista de Productos"}
                    data={producs || []}
                    columns={columns}
                    options={options}
                    ref={tableRef}
                />
            </ThemeProvider>
            <FormProductos showModal={showModal} handleClose={handleClose} id={formId} showForm={() => setShowModal(false)} />
        </>
    );
}

export default GridProductos;
