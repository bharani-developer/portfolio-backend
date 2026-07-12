// src\shared\types\express.d.ts

import type { IJwtPayload } from '../shared/types/jwt-payload.type.js';

declare global {
  namespace Express {
    interface Request {
      user: IJwtPayload;
    }
  }
}

export {};
