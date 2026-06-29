import { type TRole } from "../../constants/role.constant.js";
export declare const DashboardService: {
    getDashboardStats: (role: TRole) => Promise<{
        overview: {
            projects: number;
            blogs: number;
            services: number;
            skills: number;
            experiences: number;
            educations: number;
            certifications: number;
            testimonials: number;
        };
        projects: {
            total: number;
            active: number;
            featured: number;
        };
        blogs: {
            total: number;
            published: number;
            featured: number;
        };
        services: {
            total: number;
            active: number;
        };
        skills: {
            total: number;
            active: number;
        };
        experiences: {
            total: number;
            current: number;
        };
        educations: {
            total: number;
            current: number;
        };
        certifications: {
            total: number;
            active: number;
        };
        testimonials: {
            total: number;
            featured: number;
        };
        configuration: {
            heroConfigured: boolean;
            settingsConfigured: boolean;
        };
        recent: {
            projects: (import("../projects/projects.interface.js").IProject & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            })[];
            blogs: (import("../blogs/blogs.interface.js").IBlog & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            })[];
        };
    } | {
        overview: {
            contacts: number;
            projects: number;
            blogs: number;
            services: number;
            skills: number;
            experiences: number;
            educations: number;
            certifications: number;
            testimonials: number;
        };
        contacts: {
            total: number;
            unread: number;
            replied: number;
        };
        recent: {
            contacts: (import("../contact/contact.interface.js").IContact & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            })[];
            projects: (import("../projects/projects.interface.js").IProject & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            })[];
            blogs: (import("../blogs/blogs.interface.js").IBlog & {
                _id: import("mongoose").Types.ObjectId;
            } & {
                __v: number;
            })[];
        };
        projects: {
            total: number;
            active: number;
            featured: number;
        };
        blogs: {
            total: number;
            published: number;
            featured: number;
        };
        services: {
            total: number;
            active: number;
        };
        skills: {
            total: number;
            active: number;
        };
        experiences: {
            total: number;
            current: number;
        };
        educations: {
            total: number;
            current: number;
        };
        certifications: {
            total: number;
            active: number;
        };
        testimonials: {
            total: number;
            featured: number;
        };
        configuration: {
            heroConfigured: boolean;
            settingsConfigured: boolean;
        };
    }>;
};
//# sourceMappingURL=dashboard.service.d.ts.map