import { EditNote } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import theme from "../../theme/theme";

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Menú
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <EditNote sx={{color: `${theme.palette.primary.main}`}} />
            </ListItemIcon>
            <ListItemText sx={{color: `${theme.palette.primary.main}`}} primary="Negocio" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};
