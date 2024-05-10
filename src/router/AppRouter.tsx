import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { BookingAdminRoutes } from "../bookingAdmin/routes/BookingAdminRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y Registro */}
            <Route />

            {/* Admin */}
            <Route path="/auth/*" element={ <AuthRoutes/> } />

            {/* Client */}
            <Route path="/admin/*" element={ <BookingAdminRoutes /> } />
        </Routes>
    )
}