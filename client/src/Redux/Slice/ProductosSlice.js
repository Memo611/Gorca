import { createSlice } from "@reduxjs/toolkit";
import { getProducs, getProducUnique } from '../Actions/Actions.js';

const initialState = {
    producs: [],
    produc: {},
    loading: false,
    error: null,
};

const ProducSlice = createSlice({
    name: "getProducs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducs.pending, (state) => {
                state.users = [];
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducs.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getProducs.rejected, (state, action) => {
                state.users = [];
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getProducUnique.pending, (state) => {
                state.user = {};
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducUnique.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getProducUnique.rejected, (state, action) => {
                state.user = {};
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const getProducReducer = ProducSlice.reducer;