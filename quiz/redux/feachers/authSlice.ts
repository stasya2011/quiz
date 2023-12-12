import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
    isAuth: boolean,
    name: string
}
const initialState:IInitialState  = {
    isAuth: false,
    name: "",
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<string>) => {
            state.isAuth = true;
            state.name = action.payload
        },
        logOut: (state) => {
            state.isAuth = false;
            state.name = ""
        }
    }


    
});

export const {logIn, logOut} = authSlice.actions;
export default authSlice.reducer;