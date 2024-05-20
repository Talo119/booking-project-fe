import { createSlice } from "@reduxjs/toolkit";
import { AuthenticatedUser } from "../../api/models/User.model";
import { LoginState } from "../commons"
import { loginUser } from "./thunks";
import { RootState } from "../store";

type LoginDataState = {
    loginState: LoginState;
    data: AuthenticatedUser | undefined;
}

const EMPTY_DATA: AuthenticatedUser = {
    ok: false,
    id: '',
    name: '',
    email: '',
    roles: [],
    token: '',
}

const initialState: LoginDataState = {
    loginState: LoginState.NOTAUTHENTICATED,
    data: EMPTY_DATA,
};

const loginSlice = createSlice({
    name:"login",
    initialState,
    reducers:{
        logout(state) {
            state.loginState = LoginState.NOTAUTHENTICATED;

        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) =>{
            state.data = action.payload ?? EMPTY_DATA;
            state.loginState = LoginState.AUTHENTICATED;
        })
        .addCase(loginUser.pending, (state) => {
            state.loginState = LoginState.CHECKING;
        });
    },
});

export default loginSlice.reducer;
export const { logout } = loginSlice.actions;

export const selectLoginState = (state: RootState) => state.login.loginState;
export const selectLoginData = (state: RootState) => state.login.data ?? EMPTY_DATA;
