import { configureStore } from "@reduxjs/toolkit";
import userReducer from './auth/authSlice.tsx';
import countryReducer from './admin/country/countrySlice.tsx';


const store = configureStore({
    reducer: {
        users: userReducer,
        countries: countryReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;