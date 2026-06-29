import type { NextFunction, Request, Response } from "express";
import type { TRole } from "../constants/role.constant.js";
declare const auth: (...requiredRoles: TRole[]) => (req: Request, _res: Response, next: NextFunction) => void;
export default auth;
//# sourceMappingURL=auth.middleware.d.ts.map