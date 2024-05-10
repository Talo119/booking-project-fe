import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"


export const BookingAdminRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={ <DashboardPage/> } />

            <Route path="/*" element={ <Navigate to="/"/> } />
        </Routes>
    )
}