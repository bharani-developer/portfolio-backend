import { z } from "zod";
export declare const ServicesValidation: {
    createServiceValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            shortDescription: z.ZodString;
            description: z.ZodString;
            icon: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateServiceValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            icon: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=services.validation.d.ts.map