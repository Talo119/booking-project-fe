import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUser } from "../../api/models/User.model";
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
