// src\utils\sendResponse.ts

import type { Response } from "express";

interface IMeta {
  page?: number;
  limit?: number;
  total?: number;
  totalPage?: number;
}

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  meta?: IMeta;
  data?: T;
}

const sendResponse = <T>(res: Response, payload: IResponse<T>): void => {
  const { statusCode, success, message, meta, data } = payload;

  res.status(statusCode).json({
    success,
    message,
    meta,
    data,
  });
};

export default sendResponse;
