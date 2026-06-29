export declare const settingsSchemas: {
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
};
export declare const settingsPaths: {
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
};
//# sourceMappingURL=settings.swagger.d.ts.map