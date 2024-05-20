import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { ReactElement } from "react";

interface AuthLayoutProps {
    children: ReactElement | ReactElement[];
    title: string;
}

export const AuthLayout = ({children, title}: AuthLayoutProps) => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          { title }
        </Typography>
            { children }
      </Box>
    </Container>
  );
};
