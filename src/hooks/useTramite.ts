/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import api from "../services/api";
import type { TramitePayload } from "../types/tramite";

export function useTramite() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const crearTramite = async (data: TramitePayload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("full_name", data.full_name);
      formData.append("document", data.document);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("concept", data.concept);

      data.uploaded_files.forEach((file: File) => {
        formData.append("uploaded_files", file);
      });

      await api.post("/tramites/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
    } catch (err: any) {
      const msg = err.response?.data?.message || "Error al crear trámite";
      setError(msg);
      throw new Error(msg);
    } finally {
      setLoading(false);
    }
  };

  return { crearTramite, loading, error, success };
}
