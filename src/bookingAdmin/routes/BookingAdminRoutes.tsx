import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { lazy } from "react";
import { AdminLayout } from "../layout/AdminLayout";

const UsersPagePromise = import("../pages/UsersPage");
const BusinessPagePromise = import("../pages/Business/BusinessPage");

const UsersPage = lazy(() => UsersPagePromise);
const BusinessPage = lazy(() => BusinessPagePromise);

export const BookingAdminRoutes = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="business" element={<BusinessPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
