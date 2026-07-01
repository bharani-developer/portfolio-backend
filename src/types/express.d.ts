// src/types/express.d.ts

import type { IUser } from "../modules/auth/auth.interface";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export {};