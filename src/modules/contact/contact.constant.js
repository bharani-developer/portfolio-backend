// src/modules/contact/contact.constant.ts
export const CONTACT_MESSAGE = {
    NOT_FOUND: "Contact message not found",
    ALREADY_EXISTS: "Contact message already exists",
    MARKED_AS_READ: "Contact message marked as read",
    MARKED_AS_REPLIED: "Contact message marked as replied",
};
export const CONTACT_DEFAULT = {
    IS_READ: false,
    IS_REPLIED: false,
    IS_ACTIVE: true,
    SORT_ORDER: 0,
};
export const CONTACT_STATUS = {
    NEW: "New",
    IN_PROGRESS: "In Progress",
    REPLIED: "Replied",
    CLOSED: "Closed",
};
export const CONTACT_STATUSES = Object.values(CONTACT_STATUS);
export const CONTACT_PRIORITY = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
    URGENT: "Urgent",
};
export const CONTACT_PRIORITIES = Object.values(CONTACT_PRIORITY);
export const CONTACT_SOURCE = {
    WEBSITE: "Website",
    EMAIL: "Email",
    LINKEDIN: "LinkedIn",
    GITHUB: "GitHub",
    REFERRAL: "Referral",
    OTHER: "Other",
};
export const CONTACT_SOURCES = Object.values(CONTACT_SOURCE);
export const CONTACT_SEARCHABLE_FIELDS = [
    "name",
    "email",
    "subject",
    "message",
    "company",
    "phone",
];
export const CONTACT_FILTERABLE_FIELDS = [
    "status",
    "priority",
    "source",
    "isRead",
    "isReplied",
    "isActive",
];
export const CONTACT_SORT_FIELDS = [
    "name",
    "email",
    "status",
    "priority",
    "createdAt",
    "updatedAt",
    "sortOrder",
];
//# sourceMappingURL=contact.constant.js.map