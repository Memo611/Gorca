import { createSlice } from "@reduxjs/toolkit";
import { getEmployees, getEmployeeUnique } from '../Actions/Actions.js';

const initialState = {
    employees: [],
    employee: {},
    loading: false,
    error: null,
};

const EmployeeSlice = createSlice({
    name: "getEmployees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEmployees.pending, (state) => {
                state.employees = [];
                state.loading = true;
                state.error = null;
            })
            .addCase(getEmployees.fulfilled, (state, action) => {
                state.employees = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getEmployees.rejected, (state, action) => {
                state.employees = [];
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getEmployeeUnique.pending, (state) => {
                state.employee = {};
                state.loading = true;
                state.error = null;
            })
            .addCase(getEmployeeUnique.fulfilled, (state, action) => {
                state.employee = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getEmployeeUnique.rejected, (state, action) => {
                state.employee = {};
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const getEmployeeReducer = EmployeeSlice.reducer;