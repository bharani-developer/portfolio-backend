import type { Types } from "mongoose";
import type { TRole } from "../constants/role.constant.js";
export interface IJwtPayload {
    userId: Types.ObjectId | string;
    email: string;
    role: TRole;
}
//# sourceMappingURL=jwtPayload.interface.d.ts.map