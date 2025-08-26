export interface TramitePayload {
  full_name: string;
  document: string;
  email: string;
  phone: string;
  concept: string;
  uploaded_files: File[];
}

export interface FileDetail {
  id: string;
  file: {
    id: string;
    original_name: string;
    file_path: string;
    file_type: string;
    size: number;
    uploaded_at: string;
  };
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface StatusHistory {
  id: string;
  status: string;
  changed_at: string;
  changed_by: User;
}
export interface Tramite {
  id: string;
  code: string;
  full_name: string;
  document: string;
  email: string;
  phone: string;
  concept: string;
  status: string;
  created_at: string;
  files: FileDetail[];
  status_history: StatusHistory[];
}

export interface TramiteResponse {
  id: string;
  message: string;
}
