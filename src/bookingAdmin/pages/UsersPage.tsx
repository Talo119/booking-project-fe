
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { AdminLayout } from "../layout/AdminLayout";
import { useSelector } from "react-redux";
import { selectUsers } from "../../store/auth/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { getUsers } from "../../store/auth/thunks";
import { useEffect } from "react";

const UsersPage = () => {
  const dispatch = useAppDispatch();
  const users = useSelector(selectUsers);
  useEffect(() => {
    console.log("select users");
    dispatch(getUsers());
  }, [dispatch]);
  console.log(users);
  return (
    <AdminLayout>
      <Typography component="h2" color="primary" variant="h6">
        Users
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="users table">
            <TableHead>
                <TableRow>
                    <TableCell>Id.</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Country</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell component="th" scope="row">{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.country.name}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
      </TableContainer>
    </AdminLayout>
  );
};

export default UsersPage;
