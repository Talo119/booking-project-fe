import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BookingAdminRoutes } from "../bookingAdmin/routes/BookingAdminRoutes"
import { useSelector } from 'react-redux';
import { selectLoginState, selectLoginData } from '../store/auth/loginSlice';

export const AppRouter = () => {
    const userState = useSelector(selectLoginState);
    const authenticatedUser = useSelector(selectLoginData)
    return (
        <Routes>
            {/* Login y Registro */}
            <Route path="/auth/*" element={ <AuthRoutes/> } />

            {/* Admin */}
            {
                (userState === 1 && authenticatedUser.roles.some((rol) => rol === "ADMIN_ROLE"))
                ? <Route path="/admin/*" element={ <BookingAdminRoutes /> } />
                : <Route path="/auth/*" element={ <AuthRoutes/> } />
            }
            <Route path="/*" element={<Navigate to='/auth/login'/>} />
            {/* Client */}
            // TODO: pending create routes for client pages.
        </Routes>
    )
}