/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import type { Tramite } from "../types/tramite";
import type { ApiResponse } from "../types/ApiResponse";
import { getTramiteByCode as getTramiteByCodeService } from "../services/tramite";

export const useTramitePublic = () => {
  const [data, setData] = useState<Tramite | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTramiteByCode = useCallback(async (code: string) => {
    setLoading(true);
    setError(null);
    try {
      const response: ApiResponse<Tramite> = await getTramiteByCodeService(
        code
      );
      if (response.type === "success") {
        setData(response.dto);
      } else {
        setError(response.listMessages.join(", "));
      }
    } catch (err: any) {
      setError(err.message || "Error al obtener el trámite");
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, getTramiteByCode };
};
