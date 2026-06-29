import type { NextFunction, Request, RequestHandler, Response } from "express";
type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;
declare const catchAsync: (fn: AsyncHandler) => RequestHandler;
export default catchAsync;
//# sourceMappingURL=catchAsync.d.ts.map