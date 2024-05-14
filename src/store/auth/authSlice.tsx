import { createSlice } from "@reduxjs/toolkit";
import { ViewUser } from "../../api/models/User.model";
import { GenericDataState } from "../../types";
import { DataState } from "../commons";
import { registerUser } from "./thunks";
import { RootState } from "../store";


type UserDataState = GenericDataState<ViewUser[]> & {
    totalUsers?: number;
    activeUser?: ViewUser;
}
const EMPTY_DATA: ViewUser[] = [];
const initialState: UserDataState = {
    data: EMPTY_DATA,
    dataState: DataState.INITIAL,
    totalUsers: 0,
    activeUser: undefined,
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        expireUsers(state) {
            state.data = EMPTY_DATA;
            state.dataState = DataState.INITIAL;
            state.totalUsers = 0;
        },
        removeUser(state, action) {
            state.data = state.data?.filter(
                (user) => user.id !== action.payload
            );
            state.dataState = DataState.FULFILLED;
            state.totalUsers = (state.totalUsers ?? 1) - 1;
        },
        setActiveUser(state, action) {
            state.activeUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.data = [...(state.data || []), action.payload];
                state.dataState = DataState.FULFILLED;
            });
    }
});

export default userSlice.reducer;
export const { expireUsers, removeUser, setActiveUser } = userSlice.actions;


export const selectUsersState = (state: RootState) => state.users.dataState;