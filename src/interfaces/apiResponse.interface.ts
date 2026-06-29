// src\interfaces\apiResponse.interface.ts

export interface IErrorSource {
  path: string | number;
  message: string;
}

export interface IMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPage?: number;
}

export interface IApiResponse<T = unknown> {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: IMeta;
  data?: T;
}

export interface IErrorResponse {
  success: false;
  message: string;
  errorSources?: IErrorSource[];
  stack?: string;
}
