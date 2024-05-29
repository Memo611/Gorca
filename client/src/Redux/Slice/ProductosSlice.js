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
                state.producs = [];
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducs.fulfilled, (state, action) => {
                state.producs = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getProducs.rejected, (state, action) => {
                state.producs = [];
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getProducUnique.pending, (state) => {
                state.produc = {};
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducUnique.fulfilled, (state, action) => {
                state.produc = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getProducUnique.rejected, (state, action) => {
                state.produc = {};
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const getProducReducer = ProducSlice.reducer;