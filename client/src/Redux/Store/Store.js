import { configureStore } from '@reduxjs/toolkit'
import { getUserReducer } from '../Slice/ClientSlice.js'
import { getEmployeeReducer } from '../Slice/EmpleadoSlice.js'


export default configureStore({
    reducer: {
        getUsers: getUserReducer,
        getEmployees:getEmployeeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});