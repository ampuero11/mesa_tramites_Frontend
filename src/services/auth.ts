import api from "./api";
import store from "../redux/store";
import {
  setCredentials,
  logout as logoutAction,
} from "../redux/slices/authSlice";
import type { LoginPayload } from "../types/login";

export async function login(payload: LoginPayload) {
  // eslint-disable-next-line no-useless-catch
  try {
    const { data } = await api.post("/auth/login/", payload);

    store.dispatch(
      setCredentials({
        access: data.dto.access,
        refresh: data.dto.refresh,
        email: data.dto.email,
      })
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    await api.post("/auth/logout/");
  } catch (error) {
    console.error("Error en logout", error);
  } finally {
    store.dispatch(logoutAction());
  }
}
