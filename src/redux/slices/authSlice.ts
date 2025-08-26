import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  access: string | null;
  refresh: string | null;
  email: string | null;
}

const access = localStorage.getItem("access");
const refresh = localStorage.getItem("refresh");
const email = localStorage.getItem("email");

const initialState: AuthState = {
  access,
  refresh,
  email,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ access: string; refresh: string; email: string }>
    ) => {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      state.email = action.payload.email;

      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      localStorage.setItem("email", action.payload.email);
    },
    logout: (state) => {
      state.access = null;
      state.refresh = null;
      state.email = null;

      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      localStorage.removeItem("email");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
