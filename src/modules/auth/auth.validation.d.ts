import { z } from "zod";
export declare const AuthValidation: {
    loginValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            email: z.ZodEmail;
            password: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    googleLoginValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            token: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    changePasswordValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            oldPassword: z.ZodString;
            newPassword: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    refreshTokenValidationSchema: z.ZodObject<{
        cookies: z.ZodObject<{
            refreshToken: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=auth.validation.d.ts.map