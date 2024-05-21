import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { BookingAdminRoutes } from "../bookingAdmin/routes/BookingAdminRoutes";
import { useSelector } from "react-redux";
import { selectLoginData, selectLoginState } from "../store/auth/loginSlice";
import { LoginPage } from "../auth/pages";

export const AppRouter = () => {
  const userState = useSelector(selectLoginState);
  const authenticatedUser = useSelector(selectLoginData);
  return (
    <Routes>
      {/* Login y Registro */}
      <Route />

      {/* Admin */}
      <Route path="/auth/*" element={<AuthRoutes />} />

      {/* Client */}
      {userState === 1 &&
      authenticatedUser &&
      authenticatedUser.roles.some((rol) => rol === "ADMIN_ROLE") ? (
        <Route path="/admin/*" element={<BookingAdminRoutes />} />
      ) : userState === 1 &&
        authenticatedUser &&
        authenticatedUser.roles.some((rol) => rol === "BUYER_ROLE") ? (
        <Route path="/client/*" />
      ) : (
        <Route path="/auth/login" element={ <LoginPage/>} />
      )}
    </Routes>
  );
};
