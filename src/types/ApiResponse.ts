export interface ApiResponse<T> {
  type: "success" | "error";
  dto: T | null;
  listMessages: string[];
}
