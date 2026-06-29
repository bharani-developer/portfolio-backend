// src\types\express.d.ts

import type { IJwtPayload } from "../interfaces/jwtPayload.interface.js";

declare global {
  namespace Express {
    interface Request {
      user: IJwtPayload;
    }
  }
}

export {};
