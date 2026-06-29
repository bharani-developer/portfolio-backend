import { z } from "zod";
declare const createHeroBodySchema: z.ZodObject<{
    title: z.ZodString;
    subtitle: z.ZodString;
    description: z.ZodString;
    profileImage: z.ZodOptional<z.ZodObject<{
        url: z.ZodURL;
        publicId: z.ZodString;
    }, z.core.$strict>>;
    resumeUrl: z.ZodOptional<z.ZodURL>;
    ctaButtonText: z.ZodOptional<z.ZodString>;
    ctaButtonLink: z.ZodOptional<z.ZodURL>;
    technologies: z.ZodDefault<z.ZodArray<z.ZodString>>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
declare const updateHeroBodySchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    subtitle: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    profileImage: z.ZodOptional<z.ZodObject<{
        url: z.ZodURL;
        publicId: z.ZodString;
    }, z.core.$strict>>;
    resumeUrl: z.ZodOptional<z.ZodURL>;
    ctaButtonText: z.ZodOptional<z.ZodString>;
    ctaButtonLink: z.ZodOptional<z.ZodURL>;
    technologies: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export declare const HeroValidation: {
    createHeroValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodString;
            subtitle: z.ZodString;
            description: z.ZodString;
            profileImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodURL;
                publicId: z.ZodString;
            }, z.core.$strict>>;
            resumeUrl: z.ZodOptional<z.ZodURL>;
            ctaButtonText: z.ZodOptional<z.ZodString>;
            ctaButtonLink: z.ZodOptional<z.ZodURL>;
            technologies: z.ZodDefault<z.ZodArray<z.ZodString>>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strict>;
    }, z.core.$strip>;
    updateHeroValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            title: z.ZodOptional<z.ZodString>;
            subtitle: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            profileImage: z.ZodOptional<z.ZodObject<{
                url: z.ZodURL;
                publicId: z.ZodString;
            }, z.core.$strict>>;
            resumeUrl: z.ZodOptional<z.ZodURL>;
            ctaButtonText: z.ZodOptional<z.ZodString>;
            ctaButtonLink: z.ZodOptional<z.ZodURL>;
            technologies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>;
    }, z.core.$strip>;
};
export type TCreateHeroInput = z.infer<typeof createHeroBodySchema>;
export type TUpdateHeroInput = z.infer<typeof updateHeroBodySchema>;
export {};
//# sourceMappingURL=hero.validation.d.ts.map