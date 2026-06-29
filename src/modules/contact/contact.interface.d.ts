import type { HydratedDocument, Model } from "mongoose";
import type { CONTACT_PRIORITY, CONTACT_SOURCE, CONTACT_STATUS } from "./contact.constant.js";
export type TContactStatus = (typeof CONTACT_STATUS)[keyof typeof CONTACT_STATUS];
export type TContactPriority = (typeof CONTACT_PRIORITY)[keyof typeof CONTACT_PRIORITY];
export type TContactSource = (typeof CONTACT_SOURCE)[keyof typeof CONTACT_SOURCE];
export interface IContact {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
    status: TContactStatus;
    priority: TContactPriority;
    source: TContactSource;
    isRead: boolean;
    isReplied: boolean;
    repliedAt: Date | null;
    notes?: string;
    ipAddress?: string;
    userAgent?: string;
    sortOrder: number;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export type TContactDocument = HydratedDocument<IContact>;
export type TCreateContactPayload = Omit<IContact, "status" | "priority" | "isRead" | "isReplied" | "repliedAt" | "createdAt" | "updatedAt">;
export type TUpdateContactPayload = Partial<Omit<IContact, "createdAt" | "updatedAt">>;
export interface IContactModel extends Model<IContact> {
}
//# sourceMappingURL=contact.interface.d.ts.map