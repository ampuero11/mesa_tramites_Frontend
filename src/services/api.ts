import axios, { AxiosError } from "axios";
import store from "../redux/store";

const API_URL = "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const access = state.auth?.access;

    if (access && !config.headers?.skipAuth) {
      config.headers.Authorization = `Bearer ${access}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalRequest: any = error.config;
    const state = store.getState();
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = state.auth?.refresh;

      if (refresh) {
        try {
          const { data } = await api.post(
            "/refresh",
            { refresh },
            { headers: { skipAuth: true } }
          );
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
