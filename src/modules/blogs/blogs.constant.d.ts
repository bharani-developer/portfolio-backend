export declare const BLOG_MESSAGE: {
    readonly NOT_FOUND: "Blog not found";
    readonly ALREADY_EXISTS: "Blog already exists";
};
export declare const BLOG_DEFAULT: {
    readonly IS_ACTIVE: true;
    readonly IS_FEATURED: false;
    readonly IS_PUBLISHED: false;
    readonly VIEW_COUNT: 0;
    readonly READ_TIME: 1;
    readonly SORT_ORDER: 0;
};
export declare const BLOG_STATUS: {
    readonly DRAFT: "Draft";
    readonly PUBLISHED: "Published";
    readonly ARCHIVED: "Archived";
};
export declare const BLOG_STATUSES: ("Draft" | "Published" | "Archived")[];
export declare const BLOG_CATEGORY: {
    readonly WEB_DEVELOPMENT: "Web Development";
    readonly FRONTEND: "Frontend";
    readonly BACKEND: "Backend";
    readonly FULL_STACK: "Full Stack";
    readonly MOBILE_DEVELOPMENT: "Mobile Development";
    readonly DEVOPS: "DevOps";
    readonly CLOUD: "Cloud";
    readonly DATABASE: "Database";
    readonly SOFTWARE_ARCHITECTURE: "Software Architecture";
    readonly SYSTEM_DESIGN: "System Design";
    readonly API_DEVELOPMENT: "API Development";
    readonly TYPESCRIPT: "TypeScript";
    readonly JAVASCRIPT: "JavaScript";
    readonly NODEJS: "Node.js";
    readonly EXPRESSJS: "Express.js";
    readonly REACT: "React";
    readonly NEXTJS: "Next.js";
    readonly FLUTTER: "Flutter";
    readonly PHP: "PHP";
    readonly LARAVEL: "Laravel";
    readonly MONGODB: "MongoDB";
    readonly MYSQL: "MySQL";
    readonly CAREER: "Career";
    readonly PRODUCTIVITY: "Productivity";
    readonly TECHNOLOGY: "Technology";
    readonly TUTORIAL: "Tutorial";
    readonly OTHER: "Other";
};
export declare const BLOG_CATEGORIES: ("React" | "Next.js" | "TypeScript" | "Node.js" | "Express.js" | "MongoDB" | "Flutter" | "Web Development" | "Frontend" | "Backend" | "Database" | "DevOps" | "Cloud" | "Other" | "Technology" | "Full Stack" | "Mobile Development" | "Software Architecture" | "System Design" | "API Development" | "JavaScript" | "PHP" | "Laravel" | "MySQL" | "Career" | "Productivity" | "Tutorial")[];
export declare const BLOG_SEARCHABLE_FIELDS: readonly ["title", "excerpt", "content", "category", "tags", "author", "seoTitle", "seoDescription"];
export declare const BLOG_FILTERABLE_FIELDS: readonly ["status", "category", "isFeatured", "isPublished", "isActive", "author"];
export declare const BLOG_SORT_FIELDS: readonly ["title", "publishedAt", "viewCount", "readTime", "sortOrder", "createdAt", "updatedAt"];
//# sourceMappingURL=blogs.constant.d.ts.map