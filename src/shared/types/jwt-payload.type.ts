// src\interfaces\jwtPayload.interface.ts

import type { TRole } from '../../constants/index.js';
import type { Types } from 'mongoose';

export interface IJwtPayload {
  userId: Types.ObjectId | string;
  email: string;
  role: TRole;
}
