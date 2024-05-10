import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  styled,
} from "@mui/material";

export const LoginForm = () => {
  const StyledButton = styled(Button)(({ theme }) => {
    return {
      marginTop: 3,
      marginBottom: 2,
      backgroundColor: theme.palette.primary.main,
    };
  });
  return (
    <>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <StyledButton type="submit" fullWidth variant="contained">
          Sign In
        </StyledButton>
      </Box>
    </>
  );
};
