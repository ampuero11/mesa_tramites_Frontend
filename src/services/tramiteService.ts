import type { TramitePayload } from "../types/tramite";
import api from "./api";

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

    await api.post("/tramites/", formData, {
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
