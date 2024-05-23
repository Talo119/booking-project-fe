import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import theme from "../../theme/theme";
import { menuItems } from "../../data/MenuArray";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

export const ListItemMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      {menuItems.map((item) => (
        <ListItem key={item.text} disablePadding>
          <ListItemButton
            onClick={() => {
              startTransition(() => {
                navigate(`/admin/business`);
              });
            }}
          >
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
