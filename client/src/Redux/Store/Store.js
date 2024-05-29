import { configureStore } from '@reduxjs/toolkit'
import { getUserReducer } from '../Slice/ClientSlice.js'
import { getEmployeeReducer } from '../Slice/EmpleadoSlice.js'
import { getProducReducer } from '../Slice/ProductosSlice.js';


export default configureStore({
    reducer: {
        getUsers: getUserReducer,
        getEmployees:getEmployeeReducer,
        getProducs:getProducReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});