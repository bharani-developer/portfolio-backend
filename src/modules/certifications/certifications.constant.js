// src\modules\certifications\certifications.constant.ts
export const CERTIFICATION_MESSAGE = {
    NOT_FOUND: "Certification not found",
    ALREADY_EXISTS: "Certification already exists",
};
export const CERTIFICATION_DEFAULT = {
    IS_ACTIVE: true,
    NEVER_EXPIRES: false,
    SORT_ORDER: 0,
};
export const CERTIFICATION_SEARCHABLE_FIELDS = [
    "title",
    "issuer",
    "credentialId",
    "description",
    "skills",
];
export const CERTIFICATION_FILTERABLE_FIELDS = [
    "issuer",
    "neverExpires",
    "isActive",
];
export const CERTIFICATION_SORT_FIELDS = [
    "title",
    "issuer",
    "issueDate",
    "expiryDate",
    "sortOrder",
    "createdAt",
    "updatedAt",
];
//# sourceMappingURL=certifications.constant.js.map