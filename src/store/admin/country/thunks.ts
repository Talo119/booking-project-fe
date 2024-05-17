import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingApi } from "../../../api/bookingApi";

export const getCountries = createAsyncThunk(
  "data/getCountries",
  async (_, thunkApi) => {
    try {
      const response = await BookingApi.country.getCountries();
      return response;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue(error);
    }
  }
);
