import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { ListItemMenu } from "./ListItemMenu";
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
          <ListItemMenu />
        </List>
      </Drawer>
    </Box>
  );
};
