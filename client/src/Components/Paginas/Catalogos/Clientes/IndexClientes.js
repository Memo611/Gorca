import React, { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import FormClientes from './FormClientes.js';
import GridClientes from './GridClientes.js';

function Usuarios() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if (showForm) {
            setUserEdit(idUserEdit);
        }
    };

    useEffect(() => {

    }, [dispatch, idUserEdit]);

    return (
        showForm ? (
            <FormClientes showForm={showTable} id={idUserEdit} />
        ) : (
            <GridClientes showForm={showTable} idUserEdit={id => setUserEdit(id)} />
        )
    );
}

export default Usuarios;