import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUser, LoginUser } from "../../api/models/User.model";
import { BookingApi } from "../../api/bookingApi";

export const registerUser = createAsyncThunk(
  "data/registerUser",
  async (user: CreateUser, thunkApi) => {
    try {
      const response = await BookingApi.user.registerUser(user);
      return response;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getUsers = createAsyncThunk(
  "data/getUsers",
  async (_, thunkApi) => {
    try {
      const response = await BookingApi.user.getUsers();
      return response;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "data/loginUser",
  async (user: LoginUser, thunkApi) => {
    try {
      const response = await BookingApi.user.loginUser(user);
      return response;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);
