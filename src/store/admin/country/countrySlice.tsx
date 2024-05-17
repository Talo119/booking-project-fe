import { createSlice } from "@reduxjs/toolkit";
import { ViewCountry } from "../../../api/models/Country.model";
import { GenericDataState } from "../../../types";
import { DataState } from "../../commons";
import { getCountries } from "./thunks";
import { RootState } from "../../store";

type CountryDataState = GenericDataState<ViewCountry[]> & {
  totalCountries?: number;
};

const EMPTY_DATA: ViewCountry[] = [];
const initialState: CountryDataState = {
  data: EMPTY_DATA,
  dataState: DataState.INITIAL,
  totalCountries: 0,
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    expireCountries(state) {
      state.data = EMPTY_DATA;
      state.dataState = DataState.INITIAL;
      state.totalCountries = 0;
    },
    removeCountry(state, action) {
      state.data = state.data?.filter(
        (country) => country.id !== action.payload
      );
      state.dataState = DataState.FULFILLED;
      state.totalCountries = (state.totalCountries ?? 1) - 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.dataState = DataState.LOADING;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.data = action.payload ?? EMPTY_DATA;
        state.totalCountries = action.payload.length;
        state.dataState = DataState.FULFILLED;
      });
  },
});

export default countrySlice.reducer;
export const { expireCountries, removeCountry } = countrySlice.actions;

export const selectCountryState = (state: RootState) =>
  state.countries.dataState;
export const selectCountries = (state: RootState) =>
  state.countries.data ?? EMPTY_DATA;
export const selectTotalCountries = (state: RootState) =>
  state.countries.totalCountries;
