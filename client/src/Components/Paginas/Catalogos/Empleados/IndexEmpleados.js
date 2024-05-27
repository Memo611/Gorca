import React, { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import FormEmpleados from './FormEmpleados.js';
import GridEmpleados from './GridEmpleados.js';

function Usuarios() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idEmployeEdit, setEmployeEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if (showForm) {
            setEmployeEdit(idEmployeEdit);
        }
    };

    useEffect(() => {

    }, [dispatch, idEmployeEdit]);

    return (
        showForm ? (
            <FormEmpleados showForm={showTable} id={idEmployeEdit} />
        ) : (
            <GridEmpleados showForm={showTable} idEmplyeeEdit={id => setEmployeEdit(id)} />
        )
    );
}

export default Usuarios;