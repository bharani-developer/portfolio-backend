import type { IContact, TContactPriority, TContactStatus, TCreateContactPayload, TUpdateContactPayload } from "./contact.interface.js";
export declare const ContactService: {
    createContact: (payload: TCreateContactPayload) => Promise<import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getContacts: (query: Record<string, unknown>) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
        result: (import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        } & {
            id: string;
        })[];
    }>;
    getContactById: (id: string) => Promise<import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    updateContact: (id: string, payload: TUpdateContactPayload) => Promise<import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    deleteContact: (id: string) => Promise<import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }>;
    getActiveContacts: () => Promise<(IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getUnreadContacts: () => Promise<(IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getReadContacts: () => Promise<(IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getRepliedContacts: () => Promise<(IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getContactsByStatus: (status: TContactStatus) => Promise<(IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getContactsByPriority: (priority: TContactPriority) => Promise<(IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    markAsRead: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    markAsReplied: (id: string) => Promise<(import("mongoose").Document<unknown, {}, IContact, {}, import("mongoose").DefaultSchemaOptions> & IContact & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    getContactStats: () => Promise<{
        total: number;
        unread: number;
        read: number;
        replied: number;
        active: number;
    }>;
};
//# sourceMappingURL=contact.service.d.ts.map