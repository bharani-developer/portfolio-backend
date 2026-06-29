export declare const CONTACT_MESSAGE: {
    readonly NOT_FOUND: "Contact message not found";
    readonly ALREADY_EXISTS: "Contact message already exists";
    readonly MARKED_AS_READ: "Contact message marked as read";
    readonly MARKED_AS_REPLIED: "Contact message marked as replied";
};
export declare const CONTACT_DEFAULT: {
    readonly IS_READ: false;
    readonly IS_REPLIED: false;
    readonly IS_ACTIVE: true;
    readonly SORT_ORDER: 0;
};
export declare const CONTACT_STATUS: {
    readonly NEW: "New";
    readonly IN_PROGRESS: "In Progress";
    readonly REPLIED: "Replied";
    readonly CLOSED: "Closed";
};
export declare const CONTACT_STATUSES: ("New" | "In Progress" | "Replied" | "Closed")[];
export declare const CONTACT_PRIORITY: {
    readonly LOW: "Low";
    readonly MEDIUM: "Medium";
    readonly HIGH: "High";
    readonly URGENT: "Urgent";
};
export declare const CONTACT_PRIORITIES: ("Low" | "Medium" | "High" | "Urgent")[];
export declare const CONTACT_SOURCE: {
    readonly WEBSITE: "Website";
    readonly EMAIL: "Email";
    readonly LINKEDIN: "LinkedIn";
    readonly GITHUB: "GitHub";
    readonly REFERRAL: "Referral";
    readonly OTHER: "Other";
};
export declare const CONTACT_SOURCES: ("Other" | "Website" | "Email" | "LinkedIn" | "GitHub" | "Referral")[];
export declare const CONTACT_SEARCHABLE_FIELDS: readonly ["name", "email", "subject", "message", "company", "phone"];
export declare const CONTACT_FILTERABLE_FIELDS: readonly ["status", "priority", "source", "isRead", "isReplied", "isActive"];
export declare const CONTACT_SORT_FIELDS: readonly ["name", "email", "status", "priority", "createdAt", "updatedAt", "sortOrder"];
//# sourceMappingURL=contact.constant.d.ts.map