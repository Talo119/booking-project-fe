import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import theme from "../../theme/theme";
import { menuItems } from "../../data/MenuArray";

export const ListItemMenu = () => {
  return (
    <>
      {menuItems.map((item) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              sx={{
                color: `${theme.palette.primary.dark}`,
              }}
              primary={item.text}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};
