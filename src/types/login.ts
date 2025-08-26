export interface LoginDto {
  access: string;
  refresh: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
