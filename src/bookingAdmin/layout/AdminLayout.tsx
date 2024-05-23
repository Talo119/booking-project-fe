import { Box } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";

/* interface AdminLayoutProps {
  children: ReactElement | ReactElement[];
} */
const drawerWith = 240;
export const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWith={drawerWith} />
      <SideBar drawerWidth={drawerWith} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet/>
      </Box>
    </Box>
  );
};
