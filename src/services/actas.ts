/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";
import type { Acta, GeneratedActa } from "../types/acta";
import type { ApiResponse } from "../types/ApiResponse";

export const getActas = async (): Promise<ApiResponse<Acta[]>> => {
  try {
    const { data } = await api.get<ApiResponse<Acta[]>>("/records/");
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: [],
      listMessages: [error.message || "Error al obtener las actas"],
    };
  }
};

export const generateActa = async (): Promise<ApiResponse<GeneratedActa>> => {
  try {
    const { data } = await api.post<ApiResponse<GeneratedActa>>(
      "/records/generar/"
    );
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [error.message || "Error al generar el acta"],
    };
  }
};
