/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";
import type { ApiResponse } from "../types/ApiResponse";
import type { Tramite, TramiteResponse } from "../types/tramite";

export const getTramites = async (): Promise<ApiResponse<Tramite[]>> => {
  try {
    const { data } = await api.get<ApiResponse<Tramite[]>>("/admin/tramites/");
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [error.message || "Error al obtener tramites"],
    };
  }
};

export const getTramiteDetail = async (
  id: string
): Promise<ApiResponse<Tramite>> => {
  try {
    const { data } = await api.get<ApiResponse<Tramite>>(
      `/admin/tramites/${id}`
    );
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [error.message || "Error al obtener el trámite"],
    };
  }
};

export const changeStatus = async (
  id: string,
  status: string
): Promise<ApiResponse<Tramite>> => {
  try {
    const { data } = await api.patch<ApiResponse<Tramite>>(
      `/admin/tramites/${id}/estado/`,
      { status }
    );
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [error.message || "Error al cambiar el estado del trámite"],
    };
  }
};

export const sendTramiteResponse = async (
  id: string,
  message: string
): Promise<ApiResponse<TramiteResponse>> => {
  try {
    const { data } = await api.post<ApiResponse<TramiteResponse>>(
      `/admin/tramites/${id}/respuesta/`,
      { message }
    );
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [
        error.message || "Error al enviar la respuesta del trámite",
      ],
    };
  }
};

export const getTramiteByCode = async (
  code: string
): Promise<ApiResponse<Tramite>> => {
  try {
    const { data } = await api.get<ApiResponse<Tramite>>(
      "/admin/tramites/codigos",
      {
        params: { code },
      }
    );
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [error.message || "Error al obtener el trámite por código"],
    };
  }
};
