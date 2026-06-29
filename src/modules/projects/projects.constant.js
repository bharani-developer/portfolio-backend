// src\modules\projects\projects.constant.ts
export const PROJECT_MESSAGE = {
    NOT_FOUND: "Project not found",
    ALREADY_EXISTS: "Project already exists",
};
export const PROJECT_DEFAULT = {
    IS_ACTIVE: true,
    FEATURED: false,
    SORT_ORDER: 0,
    GALLERY_LIMIT: 20,
};
export const PROJECT_CATEGORY = {
    FULL_STACK: "Full Stack",
    FRONTEND: "Frontend",
    BACKEND: "Backend",
    WEB_APPLICATION: "Web Application",
    MOBILE_APPLICATION: "Mobile Application",
    DESKTOP_APPLICATION: "Desktop Application",
    API: "API",
    OPEN_SOURCE: "Open Source",
    OTHER: "Other",
};
export const PROJECT_CATEGORIES = Object.values(PROJECT_CATEGORY);
export const PROJECT_STATUS = {
    PLANNING: "Planning",
    IN_PROGRESS: "In Progress",
    COMPLETED: "Completed",
    MAINTENANCE: "Maintenance",
    ARCHIVED: "Archived",
};
export const PROJECT_STATUSES = Object.values(PROJECT_STATUS);
export const PROJECT_SEARCHABLE_FIELDS = [
    "title",
    "shortDescription",
    "description",
    "technologies",
    "category",
    "status",
];
export const PROJECT_FILTERABLE_FIELDS = [
    "category",
    "status",
    "featured",
    "isActive",
];
export const PROJECT_SORT_FIELDS = [
    "title",
    "category",
    "status",
    "featured",
    "startDate",
    "endDate",
    "sortOrder",
    "createdAt",
    "updatedAt",
];
//# sourceMappingURL=projects.constant.js.map