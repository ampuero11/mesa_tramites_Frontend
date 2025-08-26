/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import type { Acta, GeneratedActa } from "../types/acta";
import type { ApiResponse } from "../types/ApiResponse";
import * as actasService from "../services/actas";

type UseActasReturn<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: (...args: any[]) => Promise<void>;
};

export const useActas = (): {
  getActas: UseActasReturn<Acta[]>;
  generateActa: UseActasReturn<GeneratedActa>;
} => {
  const [actasData, setActasData] = useState<Acta[] | null>(null);
  const [actasLoading, setActasLoading] = useState(false);
  const [actasError, setActasError] = useState<string | null>(null);

  const [generatedActaData, setGeneratedActaData] =
    useState<GeneratedActa | null>(null);
  const [generatedActaLoading, setGeneratedActaLoading] = useState(false);
  const [generatedActaError, setGeneratedActaError] = useState<string | null>(
    null
  );

  const fetchActas = useCallback(async () => {
    setActasLoading(true);
    setActasError(null);
    try {
      const response: ApiResponse<Acta[]> = await actasService.getActas();
      if (response.type === "success") {
        setActasData(response.dto);
      } else {
        setActasError(response.listMessages.join(", "));
      }
    } catch (err: any) {
      setActasError(err.message || "Error al obtener actas");
    } finally {
      setActasLoading(false);
    }
  }, []);

  const fetchGenerateActa = useCallback(async () => {
    setGeneratedActaLoading(true);
    setGeneratedActaError(null);
    try {
      const response: ApiResponse<GeneratedActa> =
        await actasService.generateActa();
      if (response.type === "success") {
        setGeneratedActaData(response.dto);
      } else {
        setGeneratedActaError(response.listMessages.join(", "));
      }
    } catch (err: any) {
      setGeneratedActaError(err.message || "Error al generar acta");
    } finally {
      setGeneratedActaLoading(false);
    }
  }, []);

  return {
    getActas: {
      data: actasData,
      loading: actasLoading,
      error: actasError,
      fetchData: fetchActas,
    },
    generateActa: {
      data: generatedActaData,
      loading: generatedActaLoading,
      error: generatedActaError,
      fetchData: fetchGenerateActa,
    },
  };
};
