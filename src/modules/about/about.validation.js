// src\modules\about\about.validation.ts
import { z } from "zod";
const imageValidationSchema = z.object({
    url: z.url("Image URL must be a valid URL").trim(),
    publicId: z.string().trim().min(1, "Image public ID is required"),
});
const statsValidationSchema = z.object({
    label: z
        .string()
        .trim()
        .min(1, "Stat label is required")
        .max(100, "Stat label cannot exceed 100 characters"),
    value: z
        .string()
        .trim()
        .min(1, "Stat value is required")
        .max(100, "Stat value cannot exceed 100 characters"),
});
const createAboutValidationSchema = z.object({
    body: z.object({
        profileImage: imageValidationSchema.optional(),
        fullName: z
            .string()
            .trim()
            .min(1, "Full name is required")
            .max(100, "Full name cannot exceed 100 characters"),
        designation: z
            .string()
            .trim()
            .min(1, "Designation is required")
            .max(150, "Designation cannot exceed 150 characters"),
        bio: z
            .string()
            .trim()
            .min(1, "Bio is required")
            .max(3000, "Bio cannot exceed 3000 characters"),
        email: z.email("Email must be valid").trim().optional(),
        phone: z
            .string()
            .trim()
            .max(30, "Phone number cannot exceed 30 characters")
            .optional(),
        address: z
            .string()
            .trim()
            .max(500, "Address cannot exceed 500 characters")
            .optional(),
        resumeUrl: z.url("Resume URL must be a valid URL").trim().optional(),
        yearsOfExperience: z
            .number()
            .int()
            .min(0, "Years of experience cannot be negative")
            .max(100, "Years of experience is invalid")
            .optional(),
        stats: z
            .array(statsValidationSchema)
            .max(20, "Maximum 20 stats are allowed")
            .optional(),
        isActive: z.boolean().default(true),
    }),
});
const updateAboutValidationSchema = z.object({
    body: z.object({
        profileImage: imageValidationSchema.optional(),
        fullName: z
            .string()
            .trim()
            .min(1, "Full name cannot be empty")
            .max(100, "Full name cannot exceed 100 characters")
            .optional(),
        designation: z
            .string()
            .trim()
            .min(1, "Designation cannot be empty")
            .max(150, "Designation cannot exceed 150 characters")
            .optional(),
        bio: z
            .string()
            .trim()
            .min(1, "Bio cannot be empty")
            .max(3000, "Bio cannot exceed 3000 characters")
            .optional(),
        email: z.email("Email must be valid").trim().optional(),
        phone: z
            .string()
            .trim()
            .max(30, "Phone number cannot exceed 30 characters")
            .optional(),
        address: z
            .string()
            .trim()
            .max(500, "Address cannot exceed 500 characters")
            .optional(),
        resumeUrl: z.url("Resume URL must be a valid URL").trim().optional(),
        yearsOfExperience: z
            .number()
            .int()
            .min(0, "Years of experience cannot be negative")
            .max(100, "Years of experience is invalid")
            .optional(),
        stats: z
            .array(statsValidationSchema)
            .max(20, "Maximum 20 stats are allowed")
            .optional(),
        isActive: z.boolean().optional(),
    }),
});
export const AboutValidation = {
    createAboutValidationSchema,
    updateAboutValidationSchema,
};
//# sourceMappingURL=about.validation.js.map