/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../constants/api";
import type { ApiResponse } from "../types/ApiResponse";
import type { Tramite, TramitePayload } from "../types/tramite";
import axios from "axios";

export const createTramite = async (
  payload: TramitePayload
): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append("full_name", payload.full_name);
    formData.append("document", payload.document);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("concept", payload.concept);

    payload.uploaded_files.forEach((file) => {
      formData.append("uploaded_files", file);
    });

    await axios.post(`${API_URL}/tramites/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return true;
  } catch (error) {
    console.error("Error creando trámite:", error);
    return false;
  }
};

export const getTramiteByCode = async (
  code: string
): Promise<ApiResponse<Tramite>> => {
  try {
    const { data } = await axios.get<ApiResponse<Tramite>>(
      `${API_URL}/requests/public/`,
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
