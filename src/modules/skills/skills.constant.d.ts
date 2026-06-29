export declare const SKILLS_MESSAGE: {
    readonly CREATED: "Skill created successfully";
    readonly RETRIEVED: "Skill retrieved successfully";
    readonly UPDATED: "Skill updated successfully";
    readonly DELETED: "Skill deleted successfully";
    readonly NOT_FOUND: "Skill not found";
    readonly ALREADY_EXISTS: "Skill already exists";
};
export declare const SKILLS_DEFAULT: {
    readonly IS_ACTIVE: true;
    readonly SORT_ORDER: 0;
    readonly PROFICIENCY: 50;
};
export declare const SKILLS_CATEGORY: {
    readonly FRONTEND: "Frontend";
    readonly BACKEND: "Backend";
    readonly DATABASE: "Database";
    readonly MOBILE: "Mobile";
    readonly DEVOPS: "DevOps";
    readonly TOOLS: "Tools";
    readonly CLOUD: "Cloud";
    readonly AI_ML: "AI / ML";
    readonly TESTING: "Testing";
    readonly OTHER: "Other";
};
export declare const SKILLS_CATEGORIES: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
export declare const SKILLS_SEARCHABLE_FIELDS: readonly ["name", "category"];
export declare const SKILLS_VALIDATION: {
    readonly NAME: {
        readonly MIN_LENGTH: 2;
        readonly MAX_LENGTH: 100;
    };
    readonly CATEGORY: {
        readonly MAX_LENGTH: 50;
    };
    readonly IMAGE: {
        readonly URL_MAX_LENGTH: 500;
        readonly PUBLIC_ID_MAX_LENGTH: 255;
    };
    readonly DESCRIPTION: {
        readonly MAX_LENGTH: 1000;
    };
    readonly PROFICIENCY: {
        readonly MIN: 0;
        readonly MAX: 100;
    };
    readonly SORT_ORDER: {
        readonly MIN: 0;
        readonly MAX: 9999;
    };
};
//# sourceMappingURL=skills.constant.d.ts.map