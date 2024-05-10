import { Box } from "@mui/material";
import { ReactElement } from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

interface AdminLayoutProps {
  children: ReactElement | ReactElement[];
}
const drawerWith = 240;
export const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWith={drawerWith} />
      <SideBar drawerWidth={drawerWith} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
        {children}
      </Box>
    </Box>
  );
};
