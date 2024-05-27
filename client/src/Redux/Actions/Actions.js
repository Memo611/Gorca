import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getUserUnique = createAsyncThunk("users/getUserUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get('https://localhost:7180/api/Clientes'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id) => {
        try
        {      
            const resp = await axios.delete('https://localhost:7180/api/Clientes'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

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

export const editUSer = createAsyncThunk("users/editUSer",
    async (data) => {
        try
        {      
            const resp = await axios.put('https://localhost:7180/api/Clientes'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

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

export const getEmployeeUnique = createAsyncThunk("employees/getEmployeeUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Usuario/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const deleteEmployee = createAsyncThunk("employees/deleteEmployee",
    async (id) => {
        try
        {      
            const resp = await axios.delete('http://187.189.158.186:7777/Usuario/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const addEmployee = createAsyncThunk("employee/addEmployee",
    async (data) => {
        try
        {      
            const resp = await axios.post('http://187.189.158.186:7777/Usuario', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const editEmployee = createAsyncThunk("employee/editEmployee",
    async (data) => {
        try
        {      
            const resp = await axios.put('http://187.189.158.186:7777/Usuario/'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);