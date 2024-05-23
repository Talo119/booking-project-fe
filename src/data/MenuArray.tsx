import {
  Dashboard,
  LocalOffer,
  Storefront,
  Workspaces,
} from "@mui/icons-material";
import { ReactElement } from "react";
import theme from "../theme/theme";

interface MenuItem {
  text: string;
  icon: ReactElement;
  to: string;
}

export const menuItems: MenuItem[] = [
  {
    text: "Dashboard",
    icon: <Dashboard sx={{ color: `${theme.palette.primary.dark}` }} />,
    to: '/admin',
  },
  {
    text: "Business",
    icon: <Storefront sx={{ color: `${theme.palette.primary.dark}` }} />,
    to: '/admin/business',
  },
  {
    text: "Workspaces",
    icon: <Workspaces sx={{ color: `${theme.palette.primary.dark}` }} />,
    to: '',
  },
  {
    text: "Services",
    icon: <LocalOffer sx={{ color: `${theme.palette.primary.dark}` }} />,
    to: '',
  },
];
