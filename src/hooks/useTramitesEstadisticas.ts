/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { ApiResponse } from "../types/ApiResponse";
import type {
  TramiteEstadisticasDto,
  TramiteEstadoConLabel,
} from "../types/tramiteEstadisticas";
import { getTramiteEstadisticas } from "../services/dashboard";

const STATUS_CHOICES: Record<string, string> = {
  received: "Recibido",
  in_process: "En Proceso",
  attended: "Atendido",
  rejected: "Rechazado",
};

export function useTramitesEstadisticas() {
  const [data, setData] = useState<ApiResponse<TramiteEstadisticasDto> | null>(
    null
  );
  const [estados, setEstados] = useState<TramiteEstadoConLabel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getTramiteEstadisticas();

        const mappedEstados: TramiteEstadoConLabel[] =
          response.dto?.por_estado.map((item) => ({
            ...item,
            label: STATUS_CHOICES[item.status] || item.status,
          })) || [];

        setData(response);
        setEstados(mappedEstados);
      } catch (err: any) {
        setError(err.message || "Error al obtener estadísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    estados,
    total: data?.dto?.total_tramites || 0,
    loading,
    error,
  };
}
