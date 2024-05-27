import React, { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import FormEmpleados from './FormEmpleados.js';
import GridEmpleados from './GridEmpleados.js';

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
            <FormEmpleados showForm={showTable} id={idUserEdit} />
        ) : (
            <GridEmpleados showForm={showTable} idUserEdit={id => setUserEdit(id)} />
        )
    );
}

export default Usuarios;