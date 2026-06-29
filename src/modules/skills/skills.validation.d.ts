import { z } from "zod";
export declare const SkillsValidation: {
    createSkillValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            category: z.ZodEnum<{
                [x: string]: string;
            }>;
            proficiency: z.ZodDefault<z.ZodNumber>;
            image: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            description: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateSkillValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            category: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            proficiency: z.ZodOptional<z.ZodNumber>;
            image: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            description: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=skills.validation.d.ts.map