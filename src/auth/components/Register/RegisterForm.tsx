import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CreateUser } from "../../../api/models/User.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../../store/hooks";
import { registerUser } from "../../../store/auth/thunks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCountries,
  selectCountryState,
} from "../../../store/admin/country/countrySlice";
import { getCountries } from "../../../store/admin/country/thunks";
import { DataState } from "../../../store/commons";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("Name is required."),
    email: yup.string().email().required("Email is required."),
    country: yup.string().min(2).required("Country is required."),
    password: yup.string().min(3).required("Password is required."),
    confirmPassword: yup
      .string()
      .min(3)
      .oneOf([yup.ref("password")], "Las contraseñas deben coincidir")
      .required("Confirm Password is required."),
  })
  .required();

export const RegisterForm = () => {
  const StyledButton = styled(Button)(({ theme }) => {
    return {
      marginTop: 3,
      marginBottom: 2,
      backgroundColor: theme.palette.primary.main,
    };
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const countries = useSelector(selectCountries);
  const countriesState = useSelector(selectCountryState);
  const [saving, setSaving] = useState(false);
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateUser>({
    defaultValues: {
      name: "",
      email: "",
      country: "662a9a74f6468eee52f82949",
      password: "",
      confirmPassword: "",
      img: "test",
      roles: ["ADMIN_ROLE"],
    },
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (countriesState === DataState.INITIAL) {
      dispatch(getCountries());
    }
  }, [countries, countriesState, dispatch]);
  const onSubmit: SubmitHandler<CreateUser> = async (data) => {
    setSaving(true);
    console.log(data);
    const register = await dispatch(registerUser(data));
    console.log(register);
    const {
      meta: { requestStatus },
    } = register;
    if (requestStatus === "fulfilled") {
      reset();
      navigate("/auth/loging");
    }
    setSaving(false);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
        )}
      />
      {errors?.name && (
        <Typography color="red" component="p">
          {errors?.name.message}
        </Typography>
      )}
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">País</InputLabel>
            <Select
              {...field}
              labelId="pais-label"
              id="country"
              label="country"
              fullWidth
            >
              {countries.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      {errors?.country && (
        <Typography color="red" component="p">
          {errors?.country.message}
        </Typography>
      )}
      <TextField
        {...register("email")}
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
      />
      {errors?.email && (
        <Typography color="red" component="p">
          {errors?.email.message}
        </Typography>
      )}
      <TextField
        {...register("password")}
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      {errors?.password && (
        <Typography color="red" component="p">
          {errors?.password.message}
        </Typography>
      )}
      <TextField
        {...register("confirmPassword")}
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="ConfirmPassword"
        type="password"
        id="confirmPassword"
        autoComplete="current-confirmPassword"
      />
      {errors?.confirmPassword && (
        <Typography color="red" component="p">
          {errors?.confirmPassword.message}
        </Typography>
      )}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <StyledButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={saving}
      >
        {saving ? "Saving..." : "Register"}
      </StyledButton>
    </Box>
  );
};
