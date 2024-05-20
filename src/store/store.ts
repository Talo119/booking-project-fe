import { configureStore } from "@reduxjs/toolkit";
import userReducer from './auth/userSlice.tsx';
import countryReducer from './admin/country/countrySlice.tsx';
import loginReducer from './auth/loginSlice.tsx';


const store = configureStore({
    reducer: {
        users: userReducer,
        countries: countryReducer,
        login: loginReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;