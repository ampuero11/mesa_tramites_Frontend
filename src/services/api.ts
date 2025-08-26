/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError } from "axios";
import store from "../redux/store";
import { API_URL } from "../constants/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const access = state.auth?.access;

    if (access) {
      config.headers.Authorization = `Bearer ${access}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest: any = error.config;
    const state = store.getState();

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = state.auth?.refresh;
      if (refresh) {
        try {
          console.log("Intentando refresh...");

          const { data } = await axios.post(`${API_URL}/auth/refresh/`, {
            refresh,
          });

          store.dispatch({
            type: "auth/setCredentials",
            payload: {
              access: data.dto.access,
              refresh: data.dto.refresh,
              email: data.dto.email,
            },
          });

          originalRequest.headers.Authorization = `Bearer ${data.dto.access}`;
          return api(originalRequest);
        } catch (err) {
          console.log("Refresh falló, cerrando sesión...");
          store.dispatch({ type: "auth/logout" });
          return Promise.reject(err);
        }
      } else {
        store.dispatch({ type: "auth/logout" });
      }
    }

    return Promise.reject(error);
  }
);

export default api;
