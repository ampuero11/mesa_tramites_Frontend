export interface ApiResponse<T> {
  type: "success" | "error";
  dto: T;
  listMessages: string[];
}
