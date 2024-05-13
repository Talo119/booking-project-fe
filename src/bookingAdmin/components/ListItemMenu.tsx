import { EditNote } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import theme from "../../theme/theme";

export const ListItemMenu = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <EditNote sx={{ color: `${theme.palette.primary.main}` }} />
      </ListItemIcon>
      <ListItemText
        sx={{ color: `${theme.palette.primary.main}` }}
        primary="Negocio"
      />
    </ListItemButton>
  );
};
