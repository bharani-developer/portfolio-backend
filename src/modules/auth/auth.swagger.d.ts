import type { OpenAPIV3_1 } from "openapi-types";
export declare const authSchemas: {
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
export declare const authPaths: OpenAPIV3_1.PathsObject;
//# sourceMappingURL=auth.swagger.d.ts.map