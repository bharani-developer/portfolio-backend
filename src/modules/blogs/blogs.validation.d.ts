import { z } from "zod";
export declare const BlogValidation: {
    createBlogValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            excerpt: z.ZodString;
            content: z.ZodString;
            featuredImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            category: z.ZodEnum<{
                [x: string]: string;
            }>;
            tags: z.ZodDefault<z.ZodArray<z.ZodString>>;
            author: z.ZodString;
            status: z.ZodDefault<z.ZodEnum<{
                [x: string]: string;
            }>>;
            readTime: z.ZodDefault<z.ZodNumber>;
            isFeatured: z.ZodDefault<z.ZodBoolean>;
            isPublished: z.ZodDefault<z.ZodBoolean>;
            publishedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            seoTitle: z.ZodOptional<z.ZodString>;
            seoDescription: z.ZodOptional<z.ZodString>;
            seoKeywords: z.ZodDefault<z.ZodArray<z.ZodString>>;
            canonicalUrl: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateBlogValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            excerpt: z.ZodOptional<z.ZodString>;
            content: z.ZodOptional<z.ZodString>;
            featuredImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodString;
                publicId: z.ZodString;
            }, z.core.$strip>>;
            category: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            author: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            readTime: z.ZodOptional<z.ZodNumber>;
            isFeatured: z.ZodOptional<z.ZodBoolean>;
            isPublished: z.ZodOptional<z.ZodBoolean>;
            publishedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            seoTitle: z.ZodOptional<z.ZodString>;
            seoDescription: z.ZodOptional<z.ZodString>;
            seoKeywords: z.ZodOptional<z.ZodArray<z.ZodString>>;
            canonicalUrl: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=blogs.validation.d.ts.map