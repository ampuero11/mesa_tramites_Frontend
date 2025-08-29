/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import type { Tramite } from "../types/tramite";
import type { ApiResponse } from "../types/ApiResponse";
import * as tramiteService from "../services/adminTramite";

export const useAdminTramites = () => {
  const [tramitesData, setTramitesData] = useState<Tramite[] | null>(null);
  const [tramitesLoading, setTramitesLoading] = useState(false);
  const [tramitesError, setTramitesError] = useState<string | null>(null);

  const [tramiteDetailData, setTramiteDetailData] = useState<Tramite | null>(
    null
  );
  const [tramiteDetailLoading, setTramiteDetailLoading] = useState(false);
  const [tramiteDetailError, setTramiteDetailError] = useState<string | null>(
    null
  );

  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const fetchTramites = useCallback(async () => {
    setTramitesLoading(true);
    setTramitesError(null);
    try {
      const response: ApiResponse<Tramite[]> =
        await tramiteService.getTramites();
      if (response.type === "success") setTramitesData(response.dto);
      else setTramitesError(response.listMessages.join(", "));
    } catch (err: any) {
      setTramitesError(err.message || "Error al obtener trámites");
    } finally {
      setTramitesLoading(false);
    }
  }, []);

  const fetchTramiteDetail = useCallback(async (id: string) => {
    setTramiteDetailLoading(true);
    setTramiteDetailError(null);
    try {
      const response: ApiResponse<Tramite> =
        await tramiteService.getTramiteDetail(id);
      if (response.type === "success") setTramiteDetailData(response.dto);
      else setTramiteDetailError(response.listMessages.join(", "));
    } catch (err: any) {
      setTramiteDetailError(
        err.message || "Error al obtener detalle del trámite"
      );
    } finally {
      setTramiteDetailLoading(false);
    }
  }, []);

  const changeTramiteStatus = useCallback(
    async (id: string, status: string) => {
      setActionError(null);
      setActionSuccess(null);
      try {
        await tramiteService.changeStatus(id, status);
        setActionSuccess("Estado del trámite actualizado correctamente");
      } catch (err: any) {
        setActionError(err.message || "Error al cambiar estado del trámite");
      }
    },
    []
  );

  const sendTramiteResponse = useCallback(
    async (id: string, message: string) => {
      setActionError(null);
      setActionSuccess(null);
      try {
        await tramiteService.sendTramiteResponse(id, message);
        setActionSuccess("Respuesta enviada correctamente");
      } catch (err: any) {
        setActionError(err.message || "Error al enviar respuesta");
      }
    },
    []
  );

  const getTramiteByCode = useCallback(async (code: string) => {
    try {
      return await tramiteService.getTramiteByCode(code);
    } catch (err) {
      console.error(err);
      return null;
    }
  }, []);

  const resetActionStatus = () => {
    setActionError(null);
    setActionSuccess(null);
  };

  return {
    tramites: {
      data: tramitesData,
      loading: tramitesLoading,
      error: tramitesError,
      fetchData: fetchTramites,
    },
    tramiteDetail: {
      data: tramiteDetailData,
      loading: tramiteDetailLoading,
      error: tramiteDetailError,
      fetchData: fetchTramiteDetail,
    },
    changeTramiteStatus,
    sendTramiteResponse,
    getTramiteByCode,

    actionError,
    actionSuccess,
    resetActionStatus,
  };
};
