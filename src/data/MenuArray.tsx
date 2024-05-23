import { Dashboard, LocalOffer, Storefront, Workspaces } from "@mui/icons-material";
import { ReactElement } from 'react';
import theme from "../theme/theme";

interface MenuItem {
    text: string;
    icon: ReactElement;
}

export const menuItems: MenuItem[] = [
    {text: 'Dashboard', icon: <Dashboard sx={{ color: `${theme.palette.primary.dark}` }} />},
    {text: 'Business', icon: <Storefront sx={{ color: `${theme.palette.primary.dark}` }} />},
    {text: 'Workspaces', icon: <Workspaces sx={{ color: `${theme.palette.primary.dark}` }} />},
    {text: 'Services', icon: <LocalOffer sx={{ color: `${theme.palette.primary.dark}` }} />},

];