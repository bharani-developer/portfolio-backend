export declare const PROJECT_MESSAGE: {
    readonly NOT_FOUND: "Project not found";
    readonly ALREADY_EXISTS: "Project already exists";
};
export declare const PROJECT_DEFAULT: {
    readonly IS_ACTIVE: true;
    readonly FEATURED: false;
    readonly SORT_ORDER: 0;
    readonly GALLERY_LIMIT: 20;
};
export declare const PROJECT_CATEGORY: {
    readonly FULL_STACK: "Full Stack";
    readonly FRONTEND: "Frontend";
    readonly BACKEND: "Backend";
    readonly WEB_APPLICATION: "Web Application";
    readonly MOBILE_APPLICATION: "Mobile Application";
    readonly DESKTOP_APPLICATION: "Desktop Application";
    readonly API: "API";
    readonly OPEN_SOURCE: "Open Source";
    readonly OTHER: "Other";
};
export declare const PROJECT_CATEGORIES: ("Frontend" | "Backend" | "Other" | "Full Stack" | "Web Application" | "Mobile Application" | "Desktop Application" | "API" | "Open Source")[];
export declare const PROJECT_STATUS: {
    readonly PLANNING: "Planning";
    readonly IN_PROGRESS: "In Progress";
    readonly COMPLETED: "Completed";
    readonly MAINTENANCE: "Maintenance";
    readonly ARCHIVED: "Archived";
};
export declare const PROJECT_STATUSES: ("Archived" | "In Progress" | "Planning" | "Completed" | "Maintenance")[];
export declare const PROJECT_SEARCHABLE_FIELDS: readonly ["title", "shortDescription", "description", "technologies", "category", "status"];
export declare const PROJECT_FILTERABLE_FIELDS: readonly ["category", "status", "featured", "isActive"];
export declare const PROJECT_SORT_FIELDS: readonly ["title", "category", "status", "featured", "startDate", "endDate", "sortOrder", "createdAt", "updatedAt"];
//# sourceMappingURL=projects.constant.d.ts.map