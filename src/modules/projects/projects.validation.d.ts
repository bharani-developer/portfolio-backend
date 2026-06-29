import { z } from "zod";
export declare const ProjectValidation: {
    createProjectValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            shortDescription: z.ZodString;
            description: z.ZodString;
            thumbnail: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            gallery: z.ZodDefault<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>>;
            technologies: z.ZodArray<z.ZodString>;
            category: z.ZodEnum<{
                [x: string]: string;
            }>;
            githubUrl: z.ZodOptional<z.ZodString>;
            liveUrl: z.ZodOptional<z.ZodString>;
            featured: z.ZodDefault<z.ZodBoolean>;
            status: z.ZodEnum<{
                [x: string]: string;
            }>;
            startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            endDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateProjectValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            thumbnail: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            gallery: z.ZodOptional<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>>;
            technologies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            category: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            githubUrl: z.ZodOptional<z.ZodString>;
            liveUrl: z.ZodOptional<z.ZodString>;
            featured: z.ZodOptional<z.ZodBoolean>;
            status: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            startDate: z.ZodOptional<z.ZodCoercedDate<unknown>>;
            endDate: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=projects.validation.d.ts.map