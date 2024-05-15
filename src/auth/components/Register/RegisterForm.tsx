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
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateUser } from "../../../api/models/User.model";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    country: yup.string().required(),
    password: yup.string().min(3).required(),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUser>({
    defaultValues: {
      name: "",
      email: "",
      country: "0",
      password: "",
      img: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<CreateUser> = (data) => {
    console.log(data);
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        {...register("name")}
        margin="normal"
        required
        fullWidth
        id="name"
        label="Name"
        name="name"
        autoComplete="name"
        autoFocus
      />
      {errors?.name && <Typography color='red' component='p'>{errors?.name.message}</Typography>}

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">País</InputLabel>
        <Select
          {...register("country")}
          labelId="pais-label"
          id="country"
          label="country"
          fullWidth
        >
          <MenuItem value={"0"}>--Seleccione--</MenuItem>
          <MenuItem value={"662a9a74f6468eee52f82949"}>Honduras</MenuItem>
          <MenuItem value={"20"}>México</MenuItem>
          <MenuItem value={"30"}>Argentina</MenuItem>
        </Select>
      </FormControl>
      {errors?.country && <Typography color='red' component='p'>{errors?.country.message}</Typography>}
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
      {errors?.email && <Typography color='red' component='p'>{errors?.email.message}</Typography>}
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
      {errors?.password && <Typography color='red' component='p'>{errors?.password.message}</Typography>}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <StyledButton type="submit" fullWidth variant="contained">
        Register
      </StyledButton>
    </Box>
  );
};
