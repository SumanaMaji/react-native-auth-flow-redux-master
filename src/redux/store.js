import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './slices/authSlice'
import tripSlice  from './slices/tripSlice'

export const store = configureStore({
    reducer: {
        userAuth: authSlice,
        getTrips: tripSlice
    },
})