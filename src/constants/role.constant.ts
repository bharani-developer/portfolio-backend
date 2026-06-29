// src\constants\role.constant.ts

export const ROLE = {
  ADMIN: "admin",
  VIEWER: "viewer",
} as const;

export type TRole = (typeof ROLE)[keyof typeof ROLE];

export const ROLES = Object.values(ROLE);
