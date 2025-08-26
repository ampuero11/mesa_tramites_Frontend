import type { Tramite, User } from "./tramite";

export interface ActaDetail {
  id: string;
  request: Tramite;
  observation: string | null;
}

export interface Acta {
  id: string;
  date: string;
  description: string;
  created_by: User;
  created_at: string;
  details: ActaDetail[];
  file: string;
}

export interface GeneratedActa {
  id: string;
  file_url: string;
}
