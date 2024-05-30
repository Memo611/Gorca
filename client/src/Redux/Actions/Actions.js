import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Optencion de datos de los clientes
export const getUsers = createAsyncThunk("users/getUsers",
    async () => {
        try
        {      
            const resp = await axios.get('https://localhost:7180/api/Clientes');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Optencion de datos de un cliente
export const getUserUnique = createAsyncThunk("users/getUserUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get(`https://localhost:7180/api/Clientes/${id}`);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para eliminar un Cliente
export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id) => {
        try {
            const resp = await axios.delete(`https://localhost:7180/api/Clientes/${id}`);
            return resp.data;
        } catch (error) {
            throw new Error(error);
        }
    }
);
//Action para agregar un Cliente
export const addUser = createAsyncThunk("users/addUser",
    async (data) => {
        try
        {      
            const resp = await axios.post('https://localhost:7180/api/Clientes', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para editar un Cliente
export const editUSer = createAsyncThunk("users/editUSer",
    async (data) => {
        try
        {      
            const resp = await axios.put(`https://localhost:7180/api/Clientes/${data.idCliente}`, data);
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);


//Action para optener los datos de los empleados
export const getEmployees = createAsyncThunk("employees/getEmployees",
    async () => {
        try
        {      
            const resp = await axios.get('https://localhost:7180/api/Empleados');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para optener los datos de un empleado
export const getEmployeeUnique = createAsyncThunk("employees/getEmployeeUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get(`https://localhost:7180/api/Empleados/${id}`);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para borrar a un empleado
export const deleteEmployee = createAsyncThunk("employees/deleteEmployee",
    async (id) => {
        try
        {      
            const resp = await axios.delete(`https://localhost:7180/api/Empleados/${id}`);
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para agregar a un empleado
export const addEmployee = createAsyncThunk("employees/addEmployee",
    async (data) => {
        try
        {      
            const resp = await axios.post('https://localhost:7180/api/Empleados', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para editar a un empleado
export const editEmployee = createAsyncThunk("employees/editEmployee",
    async (data) => {
        try
        {      
            const resp = await axios.put(`https://localhost:7180/api/Empleados/${data.idEmp}`, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

//Action para optener los datos de los empleados
export const getProducs = createAsyncThunk("producs/getProducs",
    async () => {
        try
        {      
            const resp = await axios.get('https://localhost:7180/api/Productos');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para optener los datos de un empleado
export const getProducUnique = createAsyncThunk("producs/getProducUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get(`https://localhost:7180/api/Productos/${id}`);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para borrar a un empleado
export const deleteProduc = createAsyncThunk("producs/deleteProduc",
    async (id) => {
        try
        {      
            const resp = await axios.delete(`https://localhost:7180/api/Productos/${id}`);
            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para agregar a un empleado
export const addProduc = createAsyncThunk("producs/addProduc",
    async (data) => {
        try
        {      
            const resp = await axios.post('https://localhost:7180/api/Productos', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);
//Action para editar a un empleado
export const editProduc = createAsyncThunk("producs/editProduc",
    async (data) => {
        try
        {      
            const resp = await axios.put(`https://localhost:7180/api/Productos/${data.idProd}`, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

