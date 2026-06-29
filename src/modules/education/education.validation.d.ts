import { z } from "zod";
export declare const EducationValidation: {
    createEducationValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            institution: z.ZodString;
            degree: z.ZodString;
            fieldOfStudy: z.ZodString;
            institutionLogo: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            educationLevel: z.ZodEnum<{
                [x: string]: string;
            }>;
            educationType: z.ZodEnum<{
                [x: string]: string;
            }>;
            location: z.ZodString;
            startDate: z.ZodCoercedDate<unknown>;
            endDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            isCurrent: z.ZodDefault<z.ZodBoolean>;
            gradeType: z.ZodEnum<{
                [x: string]: string;
            }>;
            grade: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            achievements: z.ZodDefault<z.ZodArray<z.ZodString>>;
            skills: z.ZodDefault<z.ZodArray<z.ZodString>>;
            institutionWebsite: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateEducationValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            institution: z.ZodOptional<z.ZodString>;
            degree: z.ZodOptional<z.ZodString>;
            fieldOfStudy: z.ZodOptional<z.ZodString>;
            institutionLogo: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            educationLevel: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            educationType: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            location: z.ZodOptional<z.ZodString>;
            startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            endDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            isCurrent: z.ZodOptional<z.ZodBoolean>;
            gradeType: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            grade: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            achievements: z.ZodOptional<z.ZodArray<z.ZodString>>;
            skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
            institutionWebsite: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=education.validation.d.ts.map