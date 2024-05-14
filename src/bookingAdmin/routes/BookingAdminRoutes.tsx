import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { lazy } from "react";

const UsersPagePromise = import('../pages/UsersPage');

const UsersPage = lazy(() => UsersPagePromise)

export const BookingAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/users" element={<UsersPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
