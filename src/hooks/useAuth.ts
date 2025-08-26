/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  login as loginService,
  logout as logoutService,
} from "../services/auth";
import type { LoginPayload } from "../types/login";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(payload: LoginPayload) {
    setLoading(true);
    setError(null);
    try {
      const data = await loginService(payload);
      return data;
    } catch (err: any) {
      setError(err?.response?.data?.message || "Error en login");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    setError(null);
    try {
      await logoutService();
    } catch (err: any) {
      setError(err?.response?.data?.message || "Error en logout");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    logout,
    loading,
    error,
  };
}
