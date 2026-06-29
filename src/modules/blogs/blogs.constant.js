// src/modules/blogs/blogs.constant.ts
export const BLOG_MESSAGE = {
    NOT_FOUND: "Blog not found",
    ALREADY_EXISTS: "Blog already exists",
};
export const BLOG_DEFAULT = {
    IS_ACTIVE: true,
    IS_FEATURED: false,
    IS_PUBLISHED: false,
    VIEW_COUNT: 0,
    READ_TIME: 1,
    SORT_ORDER: 0,
};
export const BLOG_STATUS = {
    DRAFT: "Draft",
    PUBLISHED: "Published",
    ARCHIVED: "Archived",
};
export const BLOG_STATUSES = Object.values(BLOG_STATUS);
export const BLOG_CATEGORY = {
    WEB_DEVELOPMENT: "Web Development",
    FRONTEND: "Frontend",
    BACKEND: "Backend",
    FULL_STACK: "Full Stack",
    MOBILE_DEVELOPMENT: "Mobile Development",
    DEVOPS: "DevOps",
    CLOUD: "Cloud",
    DATABASE: "Database",
    SOFTWARE_ARCHITECTURE: "Software Architecture",
    SYSTEM_DESIGN: "System Design",
    API_DEVELOPMENT: "API Development",
    TYPESCRIPT: "TypeScript",
    JAVASCRIPT: "JavaScript",
    NODEJS: "Node.js",
    EXPRESSJS: "Express.js",
    REACT: "React",
    NEXTJS: "Next.js",
    FLUTTER: "Flutter",
    PHP: "PHP",
    LARAVEL: "Laravel",
    MONGODB: "MongoDB",
    MYSQL: "MySQL",
    CAREER: "Career",
    PRODUCTIVITY: "Productivity",
    TECHNOLOGY: "Technology",
    TUTORIAL: "Tutorial",
    OTHER: "Other",
};
export const BLOG_CATEGORIES = Object.values(BLOG_CATEGORY);
export const BLOG_SEARCHABLE_FIELDS = [
    "title",
    "excerpt",
    "content",
    "category",
    "tags",
    "author",
    "seoTitle",
    "seoDescription",
];
export const BLOG_FILTERABLE_FIELDS = [
    "status",
    "category",
    "isFeatured",
    "isPublished",
    "isActive",
    "author",
];
export const BLOG_SORT_FIELDS = [
    "title",
    "publishedAt",
    "viewCount",
    "readTime",
    "sortOrder",
    "createdAt",
    "updatedAt",
];
//# sourceMappingURL=blogs.constant.js.map