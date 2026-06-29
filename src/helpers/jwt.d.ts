import type { IJwtPayload } from "../interfaces/jwtPayload.interface.js";
export declare const generateAccessToken: (payload: IJwtPayload) => string;
export declare const generateRefreshToken: (payload: IJwtPayload) => string;
export declare const verifyToken: (token: string, secret: string) => IJwtPayload;
//# sourceMappingURL=jwt.d.ts.map