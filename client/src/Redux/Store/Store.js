import { configureStore } from '@reduxjs/toolkit'
import { getUserReducer } from '../Slice/ClientSlice.js'


export default configureStore({
    reducer: {
        getUsers: getUserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});