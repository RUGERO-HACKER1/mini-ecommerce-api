export interface ApiResponse<T = any> {
  success: boolean;
  data: T | null;
  message?: string;
}

export const ok = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message,
});

export const fail = (message: string, data: any = null): ApiResponse => ({
  success: false,
  data,
  message,
});
