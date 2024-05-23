import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AuthenticatedUser, LoginUser } from "../../../api/models/User.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import { loginUser } from "../../../store/auth/thunks";

const schema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).required("Password is required."),
  })
  .required();

export const LoginForm = () => {
  const StyledButton = styled(Button)(({ theme }) => {
    return {
      marginTop: 3,
      marginBottom: 2,
      backgroundColor: theme.palette.primary.main,
    };
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginUser>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    console.log(data);
    const res = await dispatch(loginUser(data));
    const request = res.meta;
    const user: AuthenticatedUser = res.payload as AuthenticatedUser;
    if (request.requestStatus === "fulfilled") {
      console.log(user);
      reset();
      if (user.roles.some((rol) => rol === "ADMIN_ROLE")) {
        navigate("/admin/");
      } else {
        navigate("/client");
      }
    }
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          )}
        />
        {errors?.email && (
          <Typography color="red" component="p">
            {errors?.email.message}
          </Typography>
        )}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          )}
        />
        {errors?.password && (
          <Typography color="red" component="p">
            {errors?.password.message}
          </Typography>
        )}
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
