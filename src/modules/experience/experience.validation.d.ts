import { z } from "zod";
export declare const ExperienceValidation: {
    createExperienceValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            company: z.ZodString;
            position: z.ZodString;
            companyLogo: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            employmentType: z.ZodEnum<{
                [x: string]: string;
            }>;
            workMode: z.ZodEnum<{
                [x: string]: string;
            }>;
            location: z.ZodString;
            startDate: z.ZodCoercedDate<unknown>;
            endDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            isCurrent: z.ZodDefault<z.ZodBoolean>;
            summary: z.ZodString;
            responsibilities: z.ZodArray<z.ZodString>;
            technologies: z.ZodArray<z.ZodString>;
            companyWebsite: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateExperienceValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            company: z.ZodOptional<z.ZodString>;
            position: z.ZodOptional<z.ZodString>;
            companyLogo: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            employmentType: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            workMode: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            location: z.ZodOptional<z.ZodString>;
            startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            endDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            isCurrent: z.ZodOptional<z.ZodBoolean>;
            summary: z.ZodOptional<z.ZodString>;
            responsibilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            technologies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            companyWebsite: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=experience.validation.d.ts.map