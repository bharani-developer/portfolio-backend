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
declare const sendResponse: <T>(res: Response, payload: IResponse<T>) => void;
export default sendResponse;
//# sourceMappingURL=sendResponse.d.ts.map