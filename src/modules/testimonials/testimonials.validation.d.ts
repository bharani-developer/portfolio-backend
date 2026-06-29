import { z } from "zod";
export declare const TestimonialValidation: {
    createTestimonialValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            clientName: z.ZodString;
            clientPosition: z.ZodOptional<z.ZodString>;
            clientCompany: z.ZodOptional<z.ZodString>;
            clientImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            clientWebsite: z.ZodOptional<z.ZodString>;
            projectName: z.ZodOptional<z.ZodString>;
            review: z.ZodString;
            rating: z.ZodDefault<z.ZodNumber>;
            clientType: z.ZodEnum<{
                [x: string]: string;
            }>;
            isFeatured: z.ZodDefault<z.ZodBoolean>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateTestimonialValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            clientName: z.ZodOptional<z.ZodString>;
            clientPosition: z.ZodOptional<z.ZodString>;
            clientCompany: z.ZodOptional<z.ZodString>;
            clientImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            clientWebsite: z.ZodOptional<z.ZodString>;
            projectName: z.ZodOptional<z.ZodString>;
            review: z.ZodOptional<z.ZodString>;
            rating: z.ZodOptional<z.ZodNumber>;
            clientType: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            isFeatured: z.ZodOptional<z.ZodBoolean>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=testimonials.validation.d.ts.map