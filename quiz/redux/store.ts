import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feachers/authSlice"

export const store = configureStore({reducer: {authReducer},
middleware: getDefaultMiddleware => getDefaultMiddleware()})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
