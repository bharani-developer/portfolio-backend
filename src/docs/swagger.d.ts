export declare const swaggerDocument: {
    openapi: string;
    info: {
        title: string;
        version: string;
        description: string;
    };
    servers: {
        url: string;
        description: string;
    }[];
    tags: {
        name: string;
        description: string;
    }[];
    components: {
        securitySchemes: {
            bearerAuth: {
                type: string;
                scheme: string;
                bearerFormat: string;
            };
        };
        schemas: {
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
            UploadResponse: {
                type: string;
                required: string[];
                properties: {
                    url: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    publicId: {
                        type: string;
                        example: string;
                    };
                };
            };
            UploadImageSuccessResponse: {
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
                        $ref: string;
                    };
                };
            };
            DeleteImageRequest: {
                type: string;
                required: string[];
                properties: {
                    publicId: {
                        type: string;
                        example: string;
                    };
                };
            };
            DeleteImageResponse: {
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
                    };
                };
            };
            UploadValidationError: {
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
            UploadUnauthorizedResponse: {
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
            SettingsImage: {
                type: string;
                required: string[];
                properties: {
                    url: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    publicId: {
                        type: string;
                        example: string;
                    };
                };
            };
            SettingsSocialLinks: {
                type: string;
                properties: {
                    github: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    linkedin: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    twitter: {
                        type: string;
                        format: string;
                    };
                    facebook: {
                        type: string;
                        format: string;
                    };
                    instagram: {
                        type: string;
                        format: string;
                    };
                    youtube: {
                        type: string;
                        format: string;
                    };
                    leetcode: {
                        type: string;
                        format: string;
                    };
                    hackerrank: {
                        type: string;
                        format: string;
                    };
                    stackoverflow: {
                        type: string;
                        format: string;
                    };
                };
            };
            SettingsSeo: {
                type: string;
                required: string[];
                properties: {
                    metaTitle: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    metaDescription: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    metaKeywords: {
                        type: string;
                        items: {
                            type: string;
                        };
                        example: string[];
                    };
                    siteUrl: {
                        type: string;
                        format: string;
                        example: string;
                    };
                };
            };
            Settings: {
                type: string;
                required: string[];
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    siteTitle: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    siteDescription: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    email: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    phone: {
                        type: string;
                        example: string;
                    };
                    address: {
                        type: string;
                        example: string;
                    };
                    logo: {
                        $ref: string;
                    };
                    favicon: {
                        $ref: string;
                    };
                    socialLinks: {
                        $ref: string;
                    };
                    seo: {
                        $ref: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateSettingsRequest: {
                type: string;
                required: string[];
                properties: {
                    siteTitle: {
                        type: string;
                        maxLength: number;
                    };
                    siteDescription: {
                        type: string;
                        maxLength: number;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    logo: {
                        $ref: string;
                    };
                    favicon: {
                        $ref: string;
                    };
                    socialLinks: {
                        $ref: string;
                    };
                    seo: {
                        $ref: string;
                    };
                };
            };
            UpdateSettingsRequest: {
                type: string;
                properties: {
                    siteTitle: {
                        type: string;
                        maxLength: number;
                    };
                    siteDescription: {
                        type: string;
                        maxLength: number;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    logo: {
                        $ref: string;
                    };
                    favicon: {
                        $ref: string;
                    };
                    socialLinks: {
                        $ref: string;
                    };
                    seo: {
                        $ref: string;
                    };
                };
            };
            SettingsResponse: {
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
                        $ref: string;
                    };
                };
            };
            SettingsDeleteResponse: {
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
                    };
                };
            };
            SettingsUnauthorizedResponse: {
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
            Contact: {
                type: string;
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    name: {
                        type: string;
                        example: string;
                    };
                    email: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    phone: {
                        type: string;
                        nullable: boolean;
                        example: string;
                    };
                    company: {
                        type: string;
                        nullable: boolean;
                        example: string;
                    };
                    subject: {
                        type: string;
                        example: string;
                    };
                    message: {
                        type: string;
                        example: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                        example: string;
                    };
                    priority: {
                        type: string;
                        enum: string[];
                        example: string;
                    };
                    source: {
                        type: string;
                        enum: string[];
                        example: string;
                    };
                    isRead: {
                        type: string;
                        example: boolean;
                    };
                    isReplied: {
                        type: string;
                        example: boolean;
                    };
                    repliedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    notes: {
                        type: string;
                        nullable: boolean;
                        example: string;
                    };
                    ipAddress: {
                        type: string;
                        nullable: boolean;
                        example: string;
                    };
                    userAgent: {
                        type: string;
                        nullable: boolean;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        example: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateContactRequest: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                    };
                    company: {
                        type: string;
                    };
                    subject: {
                        type: string;
                    };
                    message: {
                        type: string;
                    };
                    source: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            UpdateContactRequest: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                    };
                    company: {
                        type: string;
                    };
                    subject: {
                        type: string;
                    };
                    message: {
                        type: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                    };
                    priority: {
                        type: string;
                        enum: string[];
                    };
                    source: {
                        type: string;
                        enum: string[];
                    };
                    isRead: {
                        type: string;
                    };
                    isReplied: {
                        type: string;
                    };
                    repliedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    notes: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            TestimonialImage: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        format: string;
                    };
                    publicId: {
                        type: string;
                    };
                };
                required: string[];
            };
            Testimonial: {
                type: string;
                properties: {
                    _id: {
                        type: string;
                    };
                    clientName: {
                        type: string;
                    };
                    clientPosition: {
                        type: string;
                    };
                    clientCompany: {
                        type: string;
                    };
                    clientImage: {
                        $ref: string;
                    };
                    clientWebsite: {
                        type: string;
                        format: string;
                    };
                    projectName: {
                        type: string;
                    };
                    review: {
                        type: string;
                    };
                    rating: {
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    clientType: {
                        type: string;
                        enum: string[];
                    };
                    isFeatured: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateTestimonialRequest: {
                type: string;
                required: string[];
                properties: {
                    clientName: {
                        type: string;
                    };
                    clientPosition: {
                        type: string;
                    };
                    clientCompany: {
                        type: string;
                    };
                    clientImage: {
                        $ref: string;
                    };
                    clientWebsite: {
                        type: string;
                        format: string;
                    };
                    projectName: {
                        type: string;
                    };
                    review: {
                        type: string;
                    };
                    rating: {
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    clientType: {
                        type: string;
                        enum: string[];
                    };
                    isFeatured: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            UpdateTestimonialRequest: {
                type: string;
                properties: {
                    clientName: {
                        type: string;
                    };
                    clientPosition: {
                        type: string;
                    };
                    clientCompany: {
                        type: string;
                    };
                    clientImage: {
                        $ref: string;
                    };
                    clientWebsite: {
                        type: string;
                        format: string;
                    };
                    projectName: {
                        type: string;
                    };
                    review: {
                        type: string;
                    };
                    rating: {
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    clientType: {
                        type: string;
                        enum: string[];
                    };
                    isFeatured: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            AverageRatingResponse: {
                type: string;
                properties: {
                    averageRating: {
                        type: string;
                    };
                    totalTestimonials: {
                        type: string;
                    };
                };
            };
            BlogImage: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        format: string;
                    };
                    publicId: {
                        type: string;
                    };
                };
                required: string[];
            };
            Blog: {
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
                    excerpt: {
                        type: string;
                    };
                    content: {
                        type: string;
                    };
                    featuredImage: {
                        $ref: string;
                    };
                    category: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    author: {
                        type: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                    };
                    readTime: {
                        type: string;
                    };
                    viewCount: {
                        type: string;
                    };
                    isFeatured: {
                        type: string;
                    };
                    isPublished: {
                        type: string;
                    };
                    publishedAt: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    seoTitle: {
                        type: string;
                    };
                    seoDescription: {
                        type: string;
                    };
                    seoKeywords: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    canonicalUrl: {
                        type: string;
                        format: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateBlogRequest: {
                type: string;
                required: string[];
                properties: {
                    title: {
                        type: string;
                    };
                    excerpt: {
                        type: string;
                    };
                    content: {
                        type: string;
                    };
                    featuredImage: {
                        $ref: string;
                    };
                    category: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    author: {
                        type: string;
                    };
                    status: {
                        type: string;
                    };
                    readTime: {
                        type: string;
                    };
                    isFeatured: {
                        type: string;
                    };
                    seoTitle: {
                        type: string;
                    };
                    seoDescription: {
                        type: string;
                    };
                    seoKeywords: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    canonicalUrl: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            UpdateBlogRequest: {
                type: string;
                properties: {
                    title: {
                        type: string;
                    };
                    excerpt: {
                        type: string;
                    };
                    content: {
                        type: string;
                    };
                    featuredImage: {
                        $ref: string;
                    };
                    category: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    author: {
                        type: string;
                    };
                    status: {
                        type: string;
                    };
                    readTime: {
                        type: string;
                    };
                    isFeatured: {
                        type: string;
                    };
                    isPublished: {
                        type: string;
                    };
                    publishedAt: {
                        type: string;
                        format: string;
                    };
                    seoTitle: {
                        type: string;
                    };
                    seoDescription: {
                        type: string;
                    };
                    seoKeywords: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    canonicalUrl: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            ProjectImage: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        format: string;
                    };
                    publicId: {
                        type: string;
                    };
                };
                required: string[];
            };
            Project: {
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
                    shortDescription: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    thumbnail: {
                        $ref: string;
                    };
                    gallery: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    category: {
                        type: string;
                    };
                    githubUrl: {
                        type: string;
                        format: string;
                    };
                    liveUrl: {
                        type: string;
                        format: string;
                    };
                    featured: {
                        type: string;
                    };
                    status: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateProjectRequest: {
                type: string;
                required: string[];
                properties: {
                    title: {
                        type: string;
                    };
                    shortDescription: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    thumbnail: {
                        $ref: string;
                    };
                    gallery: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    category: {
                        type: string;
                    };
                    githubUrl: {
                        type: string;
                        format: string;
                    };
                    liveUrl: {
                        type: string;
                        format: string;
                    };
                    featured: {
                        type: string;
                    };
                    status: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            UpdateProjectRequest: {
                type: string;
                properties: {
                    title: {
                        type: string;
                    };
                    shortDescription: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    thumbnail: {
                        $ref: string;
                    };
                    gallery: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    category: {
                        type: string;
                    };
                    githubUrl: {
                        type: string;
                        format: string;
                    };
                    liveUrl: {
                        type: string;
                        format: string;
                    };
                    featured: {
                        type: string;
                    };
                    status: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            CertificationImage: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        format: string;
                    };
                    publicId: {
                        type: string;
                    };
                };
                required: string[];
            };
            Certification: {
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
                    issuer: {
                        type: string;
                    };
                    certificateImage: {
                        $ref: string;
                    };
                    credentialId: {
                        type: string;
                    };
                    credentialUrl: {
                        type: string;
                        format: string;
                    };
                    issueDate: {
                        type: string;
                        format: string;
                    };
                    expiryDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    neverExpires: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    skills: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateCertificationRequest: {
                type: string;
                required: string[];
                properties: {
                    title: {
                        type: string;
                    };
                    issuer: {
                        type: string;
                    };
                    certificateImage: {
                        $ref: string;
                    };
                    credentialId: {
                        type: string;
                    };
                    credentialUrl: {
                        type: string;
                        format: string;
                    };
                    issueDate: {
                        type: string;
                        format: string;
                    };
                    expiryDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    neverExpires: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    skills: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            UpdateCertificationRequest: {
                type: string;
                properties: {
                    title: {
                        type: string;
                    };
                    issuer: {
                        type: string;
                    };
                    certificateImage: {
                        $ref: string;
                    };
                    credentialId: {
                        type: string;
                    };
                    credentialUrl: {
                        type: string;
                        format: string;
                    };
                    issueDate: {
                        type: string;
                        format: string;
                    };
                    expiryDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    neverExpires: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    skills: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            EducationImage: {
                type: string;
                properties: {
                    url: {
                        type: string;
                        format: string;
                    };
                    publicId: {
                        type: string;
                    };
                };
                required: string[];
            };
            Education: {
                type: string;
                properties: {
                    _id: {
                        type: string;
                    };
                    institution: {
                        type: string;
                    };
                    slug: {
                        type: string;
                    };
                    institutionLogo: {
                        $ref: string;
                    };
                    degree: {
                        type: string;
                    };
                    fieldOfStudy: {
                        type: string;
                    };
                    educationLevel: {
                        type: string;
                        enum: string[];
                    };
                    educationType: {
                        type: string;
                        enum: string[];
                    };
                    location: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    isCurrent: {
                        type: string;
                    };
                    gradeType: {
                        type: string;
                        enum: string[];
                    };
                    grade: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    achievements: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    skills: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    institutionWebsite: {
                        type: string;
                        format: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateEducationRequest: {
                type: string;
                required: string[];
                properties: {
                    institution: {
                        type: string;
                    };
                    degree: {
                        type: string;
                    };
                    fieldOfStudy: {
                        type: string;
                    };
                    institutionLogo: {
                        $ref: string;
                    };
                    educationLevel: {
                        type: string;
                    };
                    educationType: {
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    isCurrent: {
                        type: string;
                    };
                    gradeType: {
                        type: string;
                    };
                    grade: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    achievements: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    skills: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    institutionWebsite: {
                        type: string;
                        format: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            UpdateEducationRequest: {
                type: string;
                properties: {
                    institution: {
                        type: string;
                    };
                    degree: {
                        type: string;
                    };
                    fieldOfStudy: {
                        type: string;
                    };
                    institutionLogo: {
                        $ref: string;
                    };
                    educationLevel: {
                        type: string;
                    };
                    educationType: {
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    isCurrent: {
                        type: string;
                    };
                    gradeType: {
                        type: string;
                    };
                    grade: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    achievements: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    skills: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    institutionWebsite: {
                        type: string;
                        format: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            Experience: {
                type: string;
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    company: {
                        type: string;
                        example: string;
                    };
                    slug: {
                        type: string;
                        example: string;
                    };
                    companyLogo: {
                        type: string;
                        properties: {
                            url: {
                                type: string;
                                example: string;
                            };
                            publicId: {
                                type: string;
                                example: string;
                            };
                        };
                    };
                    position: {
                        type: string;
                        example: string;
                    };
                    employmentType: {
                        type: string;
                        enum: string[];
                    };
                    workMode: {
                        type: string;
                        enum: string[];
                    };
                    location: {
                        type: string;
                        example: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                        example: null;
                    };
                    isCurrent: {
                        type: string;
                        example: boolean;
                    };
                    summary: {
                        type: string;
                        example: string;
                    };
                    responsibilities: {
                        type: string;
                        items: {
                            type: string;
                        };
                        example: string[];
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                        example: string[];
                    };
                    companyWebsite: {
                        type: string;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        example: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateExperienceRequest: {
                type: string;
                required: string[];
                properties: {
                    company: {
                        type: string;
                    };
                    position: {
                        type: string;
                    };
                    employmentType: {
                        type: string;
                    };
                    workMode: {
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                        format: string;
                    };
                    endDate: {
                        type: string;
                        format: string;
                        nullable: boolean;
                    };
                    isCurrent: {
                        type: string;
                    };
                    summary: {
                        type: string;
                    };
                    responsibilities: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    companyWebsite: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            UpdateExperienceRequest: {
                type: string;
                properties: {
                    company: {
                        type: string;
                    };
                    position: {
                        type: string;
                    };
                    employmentType: {
                        type: string;
                    };
                    workMode: {
                        type: string;
                    };
                    location: {
                        type: string;
                    };
                    startDate: {
                        type: string;
                    };
                    endDate: {
                        type: string;
                        nullable: boolean;
                    };
                    isCurrent: {
                        type: string;
                    };
                    summary: {
                        type: string;
                    };
                    responsibilities: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                    companyWebsite: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            Image: {
                type: string;
                required: string[];
                properties: {
                    url: {
                        type: string;
                        format: string;
                        maxLength: 500;
                        example: string;
                    };
                    publicId: {
                        type: string;
                        maxLength: 255;
                        example: string;
                    };
                };
            };
            Skill: {
                type: string;
                required: string[];
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    name: {
                        type: string;
                        minLength: 2;
                        maxLength: 100;
                        example: string;
                    };
                    slug: {
                        type: string;
                        example: string;
                    };
                    category: {
                        type: string;
                        enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                        example: string;
                    };
                    proficiency: {
                        type: string;
                        minimum: 0;
                        maximum: 100;
                        default: 50;
                        example: number;
                    };
                    image: {
                        allOf: {
                            $ref: string;
                        }[];
                        nullable: boolean;
                    };
                    description: {
                        type: string;
                        maxLength: 1000;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        minimum: 0;
                        maximum: 9999;
                        default: 0;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        default: true;
                        example: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                        example: string;
                    };
                };
            };
            CreateSkillRequest: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        minLength: 2;
                        maxLength: 100;
                        example: string;
                    };
                    category: {
                        type: string;
                        enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                        example: string;
                    };
                    proficiency: {
                        type: string;
                        minimum: 0;
                        maximum: 100;
                        default: 50;
                        example: number;
                    };
                    image: {
                        allOf: {
                            $ref: string;
                        }[];
                    };
                    description: {
                        type: string;
                        maxLength: 1000;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        minimum: 0;
                        maximum: 9999;
                        default: 0;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        default: true;
                        example: boolean;
                    };
                };
            };
            UpdateSkillRequest: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        minLength: 2;
                        maxLength: 100;
                        example: string;
                    };
                    category: {
                        type: string;
                        enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                        example: string;
                    };
                    proficiency: {
                        type: string;
                        minimum: 0;
                        maximum: 100;
                        example: number;
                    };
                    image: {
                        allOf: {
                            $ref: string;
                        }[];
                    };
                    description: {
                        type: string;
                        maxLength: 1000;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        minimum: 0;
                        maximum: 9999;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        example: boolean;
                    };
                };
            };
            SkillResponse: {
                type: string;
                properties: {
                    success: {
                        type: string;
                        example: boolean;
                    };
                    statusCode: {
                        type: string;
                        example: number;
                    };
                    message: {
                        type: string;
                        example: string;
                    };
                    data: {
                        $ref: string;
                    };
                };
            };
            SkillsResponse: {
                type: string;
                properties: {
                    success: {
                        type: string;
                        example: boolean;
                    };
                    statusCode: {
                        type: string;
                        example: number;
                    };
                    message: {
                        type: string;
                        example: string;
                    };
                    meta: {
                        type: string;
                        properties: {
                            page: {
                                type: string;
                                example: number;
                            };
                            limit: {
                                type: string;
                                example: number;
                            };
                            total: {
                                type: string;
                                example: number;
                            };
                            totalPage: {
                                type: string;
                                example: number;
                            };
                        };
                    };
                    data: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            SkillDeleteResponse: {
                type: string;
                properties: {
                    success: {
                        type: string;
                        example: boolean;
                    };
                    statusCode: {
                        type: string;
                        example: number;
                    };
                    message: {
                        type: string;
                        example: string;
                    };
                    data: {
                        $ref: string;
                    };
                };
            };
            Service: {
                type: string;
                required: string[];
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    title: {
                        type: string;
                        example: string;
                    };
                    slug: {
                        type: string;
                        example: string;
                    };
                    shortDescription: {
                        type: string;
                        example: string;
                    };
                    description: {
                        type: string;
                        example: string;
                    };
                    icon: {
                        type: string;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        example: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateServiceRequest: {
                type: string;
                required: string[];
                properties: {
                    title: {
                        type: string;
                        example: string;
                    };
                    shortDescription: {
                        type: string;
                        example: string;
                    };
                    description: {
                        type: string;
                        example: string;
                    };
                    icon: {
                        type: string;
                        example: string;
                    };
                    sortOrder: {
                        type: string;
                        example: number;
                    };
                    isActive: {
                        type: string;
                        default: boolean;
                    };
                };
            };
            UpdateServiceRequest: {
                type: string;
                properties: {
                    title: {
                        type: string;
                        example: string;
                    };
                    shortDescription: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    icon: {
                        type: string;
                    };
                    sortOrder: {
                        type: string;
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            ServiceResponse: {
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
                        $ref: string;
                    };
                };
            };
            ServicesResponse: {
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
                    meta: {
                        type: string;
                        properties: {
                            page: {
                                type: string;
                                example: number;
                            };
                            limit: {
                                type: string;
                                example: number;
                            };
                            total: {
                                type: string;
                                example: number;
                            };
                            totalPage: {
                                type: string;
                                example: number;
                            };
                        };
                    };
                    data: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                };
            };
            ServiceDeleteResponse: {
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
                        $ref: string;
                    };
                };
            };
            AboutStat: {
                type: string;
                required: string[];
                properties: {
                    label: {
                        type: string;
                        example: string;
                    };
                    value: {
                        type: string;
                        example: string;
                    };
                };
            };
            About: {
                type: string;
                required: string[];
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    profileImage: {
                        $ref: string;
                    };
                    fullName: {
                        type: string;
                        example: string;
                    };
                    designation: {
                        type: string;
                        example: string;
                    };
                    bio: {
                        type: string;
                        example: string;
                    };
                    email: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    phone: {
                        type: string;
                        example: string;
                    };
                    address: {
                        type: string;
                        example: string;
                    };
                    resumeUrl: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    yearsOfExperience: {
                        type: string;
                        example: number;
                    };
                    stats: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    isActive: {
                        type: string;
                        example: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateAboutRequest: {
                type: string;
                required: string[];
                properties: {
                    profileImage: {
                        $ref: string;
                    };
                    fullName: {
                        type: string;
                    };
                    designation: {
                        type: string;
                    };
                    bio: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    resumeUrl: {
                        type: string;
                        format: string;
                    };
                    yearsOfExperience: {
                        type: string;
                    };
                    stats: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    isActive: {
                        type: string;
                        default: boolean;
                    };
                };
            };
            UpdateAboutRequest: {
                type: string;
                properties: {
                    profileImage: {
                        $ref: string;
                    };
                    fullName: {
                        type: string;
                    };
                    designation: {
                        type: string;
                    };
                    bio: {
                        type: string;
                    };
                    email: {
                        type: string;
                        format: string;
                    };
                    phone: {
                        type: string;
                    };
                    address: {
                        type: string;
                    };
                    resumeUrl: {
                        type: string;
                        format: string;
                    };
                    yearsOfExperience: {
                        type: string;
                    };
                    stats: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            AboutResponse: {
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
                        $ref: string;
                    };
                };
            };
            AboutDeleteResponse: {
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
                        example: null;
                    };
                };
            };
            HeroImage: {
                type: string;
                required: string[];
                properties: {
                    url: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    publicId: {
                        type: string;
                        example: string;
                    };
                };
            };
            Hero: {
                type: string;
                required: string[];
                properties: {
                    _id: {
                        type: string;
                        example: string;
                    };
                    title: {
                        type: string;
                        example: string;
                    };
                    subtitle: {
                        type: string;
                        example: string;
                    };
                    description: {
                        type: string;
                        example: string;
                    };
                    profileImage: {
                        $ref: string;
                    };
                    resumeUrl: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    ctaButtonText: {
                        type: string;
                        example: string;
                    };
                    ctaButtonLink: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    technologies: {
                        type: string;
                        items: {
                            type: string;
                        };
                        example: string[];
                    };
                    isActive: {
                        type: string;
                        example: boolean;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
            CreateHeroRequest: {
                type: string;
                required: string[];
                properties: {
                    title: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    subtitle: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    description: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    profileImage: {
                        $ref: string;
                    };
                    resumeUrl: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    ctaButtonText: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                    ctaButtonLink: {
                        type: string;
                        format: string;
                        maxLength: number;
                        example: string;
                    };
                    technologies: {
                        type: string;
                        maxItems: number;
                        items: {
                            type: string;
                            maxLength: number;
                        };
                        example: string[];
                    };
                    isActive: {
                        type: string;
                        default: boolean;
                    };
                };
            };
            UpdateHeroRequest: {
                type: string;
                properties: {
                    title: {
                        type: string;
                        maxLength: number;
                    };
                    subtitle: {
                        type: string;
                        maxLength: number;
                    };
                    description: {
                        type: string;
                        maxLength: number;
                    };
                    profileImage: {
                        $ref: string;
                    };
                    resumeUrl: {
                        type: string;
                        format: string;
                    };
                    ctaButtonText: {
                        type: string;
                        maxLength: number;
                    };
                    ctaButtonLink: {
                        type: string;
                        format: string;
                        maxLength: number;
                    };
                    technologies: {
                        type: string;
                        maxItems: number;
                        items: {
                            type: string;
                            maxLength: number;
                        };
                    };
                    isActive: {
                        type: string;
                    };
                };
            };
            HeroResponse: {
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
                        $ref: string;
                    };
                };
            };
            DeleteHeroResponse: {
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
                    };
                };
            };
            ValidationErrorResponse: {
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
                    errorSources: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                path: {
                                    type: string;
                                    example: string;
                                };
                                message: {
                                    type: string;
                                    example: string;
                                };
                            };
                        };
                    };
                };
            };
            UnauthorizedResponse: {
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
            ForbiddenResponse: {
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
            NotFoundResponse: {
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
            LoginRequest: {
                type: "object";
                required: string[];
                properties: {
                    email: {
                        type: "string";
                        format: string;
                        example: string;
                    };
                    password: {
                        type: "string";
                        format: string;
                        example: string;
                    };
                };
                additionalProperties: false;
            };
            GoogleLoginRequest: {
                type: "object";
                required: string[];
                properties: {
                    token: {
                        type: "string";
                        example: string;
                    };
                };
                additionalProperties: false;
            };
            ChangePasswordRequest: {
                type: "object";
                required: string[];
                properties: {
                    oldPassword: {
                        type: "string";
                        example: string;
                    };
                    newPassword: {
                        type: "string";
                        example: string;
                    };
                };
                additionalProperties: false;
            };
            Avatar: {
                type: "object";
                properties: {
                    url: {
                        type: "string";
                        example: string;
                    };
                    publicId: {
                        type: "string";
                        example: string;
                    };
                };
            };
            UserProfile: {
                type: "object";
                properties: {
                    _id: {
                        type: "string";
                        example: string;
                    };
                    name: {
                        type: "string";
                        example: string;
                    };
                    email: {
                        type: "string";
                        format: string;
                        example: string;
                    };
                    role: {
                        type: "string";
                        enum: string[];
                        example: string;
                    };
                    authProvider: {
                        type: "string";
                        enum: string[];
                        example: string;
                    };
                    googleId: {
                        type: "string";
                        example: string;
                    };
                    emailVerified: {
                        type: "boolean";
                        example: boolean;
                    };
                    givenName: {
                        type: "string";
                        example: string;
                    };
                    familyName: {
                        type: "string";
                        example: string;
                    };
                    locale: {
                        type: "string";
                        example: string;
                    };
                    hostedDomain: {
                        type: "string";
                        example: string;
                    };
                    avatar: {
                        $ref: string;
                    };
                    isActive: {
                        type: "boolean";
                        example: boolean;
                    };
                    isDeleted: {
                        type: "boolean";
                        example: boolean;
                    };
                    lastLoginAt: {
                        type: "string";
                        format: string;
                    };
                    createdAt: {
                        type: "string";
                        format: string;
                    };
                    updatedAt: {
                        type: "string";
                        format: string;
                    };
                };
            };
            LoginResponse: {
                type: "object";
                properties: {
                    success: {
                        type: "boolean";
                        example: boolean;
                    };
                    statusCode: {
                        type: "integer";
                        example: number;
                    };
                    message: {
                        type: "string";
                        example: string;
                    };
                    data: {
                        type: "object";
                        properties: {
                            accessToken: {
                                type: "string";
                                example: string;
                            };
                        };
                    };
                };
            };
            RefreshTokenResponse: {
                type: "object";
                properties: {
                    success: {
                        type: "boolean";
                        example: boolean;
                    };
                    statusCode: {
                        type: "integer";
                        example: number;
                    };
                    message: {
                        type: "string";
                        example: string;
                    };
                    data: {
                        type: "object";
                        properties: {
                            accessToken: {
                                type: "string";
                                example: string;
                            };
                        };
                    };
                };
            };
            ProfileResponse: {
                type: "object";
                properties: {
                    success: {
                        type: "boolean";
                        example: boolean;
                    };
                    statusCode: {
                        type: "integer";
                        example: number;
                    };
                    message: {
                        type: "string";
                        example: string;
                    };
                    data: {
                        $ref: string;
                    };
                };
            };
            SuccessResponse: {
                type: "object";
                properties: {
                    success: {
                        type: "boolean";
                        example: boolean;
                    };
                    statusCode: {
                        type: "integer";
                        example: number;
                    };
                    message: {
                        type: "string";
                        example: string;
                    };
                    data: {
                        type: "object";
                        additionalProperties: true;
                    };
                };
            };
            ErrorResponse: {
                type: "object";
                properties: {
                    success: {
                        type: "boolean";
                        example: boolean;
                    };
                    statusCode: {
                        type: "integer";
                        example: number;
                    };
                    message: {
                        type: "string";
                        example: string;
                    };
                };
            };
        };
    };
    paths: {
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
        "/upload/image": {
            post: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "multipart/form-data": {
                            schema: {
                                type: string;
                                required: string[];
                                properties: {
                                    file: {
                                        type: string;
                                        format: string;
                                        description: string;
                                    };
                                };
                            };
                        };
                    };
                };
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
                    400: {
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
            delete: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
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
                    400: {
                        description: string;
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
                    404: {
                        description: string;
                    };
                };
            };
        };
        "/settings": {
            get: {
                tags: string[];
                summary: string;
                description: string;
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
                    404: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                    401: {
                        description: string;
                    };
                    409: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                    401: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
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
                    };
                    404: {
                        description: string;
                    };
                };
            };
        };
        "/contact": {
            post: {
                tags: string[];
                summary: string;
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/stats": {
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/active": {
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/unread": {
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/read": {
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/replied": {
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/{id}": {
            get: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/{id}/read": {
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/contact/{id}/replied": {
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/testimonials": {
            get: {
                tags: string[];
                summary: string;
                parameters: ({
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum: string[];
                    };
                })[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
        };
        "/testimonials/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/testimonials/featured": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/testimonials/active": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/testimonials/average-rating": {
            get: {
                tags: string[];
                summary: string;
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
                };
            };
        };
        "/testimonials/rating/{rating}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                }[];
            };
        };
        "/testimonials/client-type/{clientType}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/testimonials/project/{projectName}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/blogs": {
            get: {
                tags: string[];
                summary: string;
                parameters: ({
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum: string[];
                    };
                })[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
        };
        "/blogs/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    name: string;
                    in: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/blogs/featured": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/blogs/popular": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/blogs/published": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/blogs/active": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/blogs/category/{category}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/blogs/tag/{tag}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/blogs/slug/{slug}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/blogs/slug/{slug}/view": {
            patch: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/projects": {
            get: {
                tags: string[];
                summary: string;
                parameters: ({
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum: string[];
                    };
                })[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
        };
        "/projects/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/projects/featured": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/projects/active": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/projects/slug/{slug}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/projects/category/{category}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/projects/technology/{technology}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/projects/status/{status}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
            };
        };
        "/certifications": {
            get: {
                tags: string[];
                summary: string;
                parameters: ({
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum: string[];
                    };
                })[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
        };
        "/certifications/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/certifications/active": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/certifications/valid": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/certifications/expired": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/certifications/slug/{slug}": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/certifications/issuer/{issuer}": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/certifications/skill/{skill}": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/education": {
            get: {
                tags: string[];
                summary: string;
                parameters: ({
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum: string[];
                    };
                })[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
        };
        "/education/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/education/active": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/education/current": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/education/slug/{slug}": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/education/level/{level}": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/education/skill/{skill}": {
            get: {
                tags: string[];
                summary: string;
            };
        };
        "/experience": {
            get: {
                tags: string[];
                summary: string;
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                    };
                };
            };
        };
        "/experience/active": {
            get: {
                tags: string[];
                summary: string;
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/experience/current": {
            get: {
                tags: string[];
                summary: string;
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/experience/slug/{slug}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/experience/company/{company}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/experience/technology/{technology}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/experience/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                };
            };
        };
        "/skills": {
            get: {
                tags: string[];
                summary: string;
                description: string;
                parameters: ({
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        example: string;
                        minimum?: never;
                        default?: never;
                        maximum?: never;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        minimum: number;
                        default: number;
                        example: number;
                        maximum?: never;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        default: number;
                        example: number;
                        enum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                        example: string;
                        minimum?: never;
                        default?: never;
                        maximum?: never;
                    };
                } | {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        example: boolean;
                        minimum?: never;
                        default?: never;
                        maximum?: never;
                        enum?: never;
                    };
                })[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                                examples: {
                                    success: {
                                        summary: string;
                                        value: {
                                            success: boolean;
                                            statusCode: number;
                                            message: string;
                                            meta: {
                                                page: number;
                                                limit: number;
                                                total: number;
                                                totalPage: number;
                                            };
                                            data: {
                                                _id: string;
                                                name: string;
                                                slug: string;
                                                category: string;
                                                proficiency: number;
                                                image: {
                                                    url: string;
                                                    publicId: string;
                                                };
                                                description: string;
                                                sortOrder: number;
                                                isActive: boolean;
                                                createdAt: string;
                                                updatedAt: string;
                                            }[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                            examples: {
                                frontendSkill: {
                                    summary: string;
                                    value: {
                                        name: string;
                                        category: string;
                                        proficiency: number;
                                        image: {
                                            url: string;
                                            publicId: string;
                                        };
                                        description: string;
                                        sortOrder: number;
                                        isActive: boolean;
                                    };
                                };
                                backendSkill: {
                                    summary: string;
                                    value: {
                                        name: string;
                                        category: string;
                                        proficiency: number;
                                        image: {
                                            url: string;
                                            publicId: string;
                                        };
                                        description: string;
                                        sortOrder: number;
                                        isActive: boolean;
                                    };
                                };
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                                examples: {
                                    success: {
                                        summary: string;
                                        value: {
                                            success: boolean;
                                            statusCode: number;
                                            message: string;
                                            data: {
                                                _id: string;
                                                name: string;
                                                slug: string;
                                                category: string;
                                                proficiency: number;
                                                image: {
                                                    url: string;
                                                    publicId: string;
                                                };
                                                description: string;
                                                sortOrder: number;
                                                isActive: boolean;
                                                createdAt: string;
                                                updatedAt: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                    errorMessages: {
                                        path: string;
                                        message: string;
                                    }[];
                                };
                            };
                        };
                    };
                    401: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                    403: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                    409: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        "/skills/active": {
            get: {
                tags: string[];
                summary: string;
                description: string;
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                                examples: {
                                    success: {
                                        summary: string;
                                        value: {
                                            success: boolean;
                                            statusCode: number;
                                            message: string;
                                            data: {
                                                _id: string;
                                                name: string;
                                                slug: string;
                                                category: string;
                                                proficiency: number;
                                                image: {
                                                    url: string;
                                                    publicId: string;
                                                };
                                                description: string;
                                                sortOrder: number;
                                                isActive: boolean;
                                                createdAt: string;
                                                updatedAt: string;
                                            }[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        "/skills/category/{category}": {
            get: {
                tags: string[];
                summary: string;
                description: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        enum: ("Frontend" | "Backend" | "Database" | "Mobile" | "DevOps" | "Tools" | "Cloud" | "AI / ML" | "Testing" | "Other")[];
                        example: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                                examples: {
                                    success: {
                                        summary: string;
                                        value: {
                                            success: boolean;
                                            statusCode: number;
                                            message: string;
                                            data: {
                                                _id: string;
                                                name: string;
                                                slug: string;
                                                category: string;
                                                proficiency: number;
                                                image: {
                                                    url: string;
                                                    publicId: string;
                                                };
                                                description: string;
                                                sortOrder: number;
                                                isActive: boolean;
                                                createdAt: string;
                                                updatedAt: string;
                                            }[];
                                        };
                                    };
                                };
                            };
                        };
                    };
                    400: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                    404: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                        content: {
                            "application/json": {
                                example: {
                                    success: boolean;
                                    statusCode: number;
                                    message: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        "/skills/{id}": {
            get: {
                tags: string[];
                summary: string;
                description: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        example: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                                examples: {
                                    success: {
                                        value: {
                                            success: boolean;
                                            statusCode: number;
                                            message: string;
                                            data: {
                                                _id: string;
                                                name: string;
                                                slug: string;
                                                category: string;
                                                proficiency: number;
                                                image: {
                                                    url: string;
                                                    publicId: string;
                                                };
                                                description: string;
                                                sortOrder: number;
                                                isActive: boolean;
                                                createdAt: string;
                                                updatedAt: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        example: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                            examples: {
                                updateSkill: {
                                    value: {
                                        name: string;
                                        category: string;
                                        proficiency: number;
                                        image: {
                                            url: string;
                                            publicId: string;
                                        };
                                        description: string;
                                        sortOrder: number;
                                        isActive: boolean;
                                    };
                                };
                            };
                        };
                    };
                };
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
                    400: {
                        description: string;
                    };
                    401: {
                        description: string;
                    };
                    403: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                    409: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    description: string;
                    schema: {
                        type: string;
                        example: string;
                    };
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                                examples: {
                                    success: {
                                        value: {
                                            success: boolean;
                                            statusCode: number;
                                            message: string;
                                            data: {
                                                _id: string;
                                                name: string;
                                                slug: string;
                                                category: string;
                                                proficiency: number;
                                                image: {
                                                    url: string;
                                                    publicId: string;
                                                };
                                                description: string;
                                                sortOrder: number;
                                                isActive: boolean;
                                                createdAt: string;
                                                updatedAt: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                    401: {
                        description: string;
                    };
                    403: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        "/services": {
            get: {
                tags: string[];
                summary: string;
                description: string;
                parameters: {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                    };
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
                };
            };
            post: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
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
                    };
                    403: {
                        description: string;
                    };
                    409: {
                        description: string;
                    };
                };
            };
        };
        "/services/{id}": {
            get: {
                tags: string[];
                summary: string;
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
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
                    404: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
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
                    };
                    403: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                };
            };
            delete: {
                tags: string[];
                summary: string;
                security: {
                    bearerAuth: never[];
                }[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
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
                    };
                    403: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                };
            };
        };
        "/about": {
            get: {
                tags: string[];
                summary: string;
                description: string;
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
                    404: {
                        description: string;
                    };
                };
            };
            post: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
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
                    };
                    403: {
                        description: string;
                    };
                    409: {
                        description: string;
                    };
                };
            };
            patch: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
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
                    };
                    403: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                };
            };
            delete: {
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
                    };
                    403: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                };
            };
        };
        "/hero": {
            get: {
                tags: string[];
                summary: string;
                description: string;
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
                    404: {
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
            post: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    201: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    400: {
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
                    403: {
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
            patch: {
                tags: string[];
                summary: string;
                description: string;
                security: {
                    bearerAuth: never[];
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        "application/json": {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
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
                    400: {
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
                    403: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    404: {
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
            delete: {
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
                    403: {
                        description: string;
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    404: {
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
};
//# sourceMappingURL=swagger.d.ts.map