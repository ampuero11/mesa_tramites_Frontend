/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./api";
import type { TramiteEstadisticasDto } from "../types/tramiteEstadisticas";
import type { ApiResponse } from "../types/ApiResponse";

export const getTramiteEstadisticas = async (): Promise<
  ApiResponse<TramiteEstadisticasDto>
> => {
  try {
    const { data } = await api.get<ApiResponse<TramiteEstadisticasDto>>(
      "/admin/tramites/estadisticas/"
    );
    return data;
  } catch (error: any) {
    return {
      type: "error",
      dto: null,
      listMessages: [error.message || "Error al obtener estadísticas"],
    };
  }
};
