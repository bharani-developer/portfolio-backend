export declare const dashboardSchemas: {
    DashboardOverview: {
        type: string;
        properties: {
            projects: {
                type: string;
                example: number;
            };
            blogs: {
                type: string;
                example: number;
            };
            services: {
                type: string;
                example: number;
            };
            skills: {
                type: string;
                example: number;
            };
            experiences: {
                type: string;
                example: number;
            };
            educations: {
                type: string;
                example: number;
            };
            certifications: {
                type: string;
                example: number;
            };
            testimonials: {
                type: string;
                example: number;
            };
            contacts: {
                type: string;
                example: number;
            };
        };
    };
    DashboardProjects: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            active: {
                type: string;
                example: number;
            };
            featured: {
                type: string;
                example: number;
            };
        };
    };
    DashboardBlogs: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            published: {
                type: string;
                example: number;
            };
            featured: {
                type: string;
                example: number;
            };
        };
    };
    DashboardServices: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            active: {
                type: string;
                example: number;
            };
        };
    };
    DashboardSkills: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            active: {
                type: string;
                example: number;
            };
        };
    };
    DashboardExperiences: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            current: {
                type: string;
                example: number;
            };
        };
    };
    DashboardEducations: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            current: {
                type: string;
                example: number;
            };
        };
    };
    DashboardCertifications: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            active: {
                type: string;
                example: number;
            };
        };
    };
    DashboardTestimonials: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            featured: {
                type: string;
                example: number;
            };
        };
    };
    DashboardContacts: {
        type: string;
        properties: {
            total: {
                type: string;
                example: number;
            };
            unread: {
                type: string;
                example: number;
            };
            replied: {
                type: string;
                example: number;
            };
        };
    };
    DashboardConfiguration: {
        type: string;
        properties: {
            heroConfigured: {
                type: string;
                example: boolean;
            };
            settingsConfigured: {
                type: string;
                example: boolean;
            };
        };
    };
    DashboardRecentProject: {
        type: string;
        properties: {
            _id: {
                type: string;
            };
            title: {
                type: string;
            };
            slug: {
                type: string;
            };
            category: {
                type: string;
            };
            featured: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
        };
    };
    DashboardRecentBlog: {
        type: string;
        properties: {
            _id: {
                type: string;
            };
            title: {
                type: string;
            };
            slug: {
                type: string;
            };
            category: {
                type: string;
            };
            isPublished: {
                type: string;
            };
            isFeatured: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
        };
    };
    DashboardRecentContact: {
        type: string;
        properties: {
            _id: {
                type: string;
            };
            name: {
                type: string;
            };
            email: {
                type: string;
            };
            subject: {
                type: string;
            };
            status: {
                type: string;
            };
            priority: {
                type: string;
            };
            isRead: {
                type: string;
            };
            createdAt: {
                type: string;
                format: string;
            };
        };
    };
    DashboardResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
            data: {
                type: string;
                properties: {
                    overview: {
                        $ref: string;
                    };
                    projects: {
                        $ref: string;
                    };
                    blogs: {
                        $ref: string;
                    };
                    services: {
                        $ref: string;
                    };
                    skills: {
                        $ref: string;
                    };
                    experiences: {
                        $ref: string;
                    };
                    educations: {
                        $ref: string;
                    };
                    certifications: {
                        $ref: string;
                    };
                    testimonials: {
                        $ref: string;
                    };
                    contacts: {
                        $ref: string;
                    };
                    configuration: {
                        $ref: string;
                    };
                    recent: {
                        type: string;
                        properties: {
                            projects: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                            blogs: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                            contacts: {
                                type: string;
                                items: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
        };
    };
    DashboardUnauthorizedResponse: {
        type: string;
        properties: {
            success: {
                type: string;
                example: boolean;
            };
            message: {
                type: string;
                example: string;
            };
        };
    };
};
export declare const dashboardPaths: {
    "/dashboard": {
        get: {
            tags: string[];
            summary: string;
            description: string;
            security: {
                bearerAuth: never[];
            }[];
            responses: {
                200: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                401: {
                    description: string;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
            };
        };
    };
};
//# sourceMappingURL=dashboard.swagger.d.ts.map