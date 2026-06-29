import { z } from "zod";
export declare const CertificationValidation: {
    createCertificationValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            issuer: z.ZodString;
            certificateImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            credentialId: z.ZodOptional<z.ZodString>;
            credentialUrl: z.ZodOptional<z.ZodString>;
            issueDate: z.ZodCoercedDate<unknown>;
            expiryDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            neverExpires: z.ZodDefault<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            skills: z.ZodDefault<z.ZodArray<z.ZodString>>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateCertificationValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            issuer: z.ZodOptional<z.ZodString>;
            certificateImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            credentialId: z.ZodOptional<z.ZodString>;
            credentialUrl: z.ZodOptional<z.ZodString>;
            issueDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            expiryDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            neverExpires: z.ZodOptional<z.ZodBoolean>;
            description: z.ZodOptional<z.ZodString>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=certifications.validation.d.ts.map