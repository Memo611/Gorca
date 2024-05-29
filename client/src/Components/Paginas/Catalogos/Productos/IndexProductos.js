import React, { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import FormProductos from './FormProductos.js';
import GridProductos from './GridProductos.js';

function Productos() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idProducEdit, setProducEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if (showForm) {
            setProducEdit(idProducEdit);
        }
    };

    useEffect(() => {

    }, [dispatch, idProducEdit]);

    return (
        showForm ? (
            <FormProductos showForm={showTable} id={idProducEdit} />
        ) : (
            <GridProductos showForm={showTable} idProducEdit={id => setProducEdit(id)} />
        )
    );
}

export default Productos;