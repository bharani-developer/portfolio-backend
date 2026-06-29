// src\modules\experience\experience.validation.ts
import { z } from "zod";
import { EMPLOYMENT_TYPES, EXPERIENCE_DEFAULT, WORK_MODES, } from "./experience.constant.js";
const imageSchema = z.object({
    url: z.string().trim().url("Invalid image URL"),
    publicId: z.string().trim().min(1, "Public ID is required"),
});
const createExperienceValidationSchema = z.object({
    body: z
        .object({
        company: z
            .string()
            .trim()
            .min(1, "Company is required")
            .max(150, "Company cannot exceed 150 characters"),
        position: z
            .string()
            .trim()
            .min(1, "Position is required")
            .max(150, "Position cannot exceed 150 characters"),
        companyLogo: imageSchema.optional(),
        employmentType: z.enum(EMPLOYMENT_TYPES, {
            error: () => ({
                message: "Invalid employment type",
            }),
        }),
        workMode: z.enum(WORK_MODES, {
            error: () => ({
                message: "Invalid work mode",
            }),
        }),
        location: z
            .string()
            .trim()
            .min(1, "Location is required")
            .max(150, "Location cannot exceed 150 characters"),
        startDate: z.coerce.date({
            error: () => ({
                message: "Invalid start date",
            }),
        }),
        endDate: z.union([z.coerce.date(), z.null()]).optional(),
        isCurrent: z.boolean().default(EXPERIENCE_DEFAULT.IS_CURRENT),
        summary: z
            .string()
            .trim()
            .min(1, "Summary is required")
            .max(2000, "Summary cannot exceed 2000 characters"),
        responsibilities: z
            .array(z.string().trim().min(1))
            .min(1, "At least one responsibility is required")
            .max(50, "Responsibilities cannot exceed 50 items"),
        technologies: z
            .array(z.string().trim().min(1))
            .min(1, "At least one technology is required")
            .max(50, "Technologies cannot exceed 50 items"),
        companyWebsite: z
            .string()
            .trim()
            .url("Invalid company website URL")
            .optional(),
        sortOrder: z
            .number()
            .int()
            .min(0, "Sort order cannot be negative")
            .default(EXPERIENCE_DEFAULT.SORT_ORDER),
        isActive: z.boolean().default(EXPERIENCE_DEFAULT.IS_ACTIVE),
    })
        .superRefine((data, ctx) => {
        if (data.isCurrent && data.endDate) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["endDate"],
                message: "Current experience cannot have an end date",
            });
        }
        if (!data.isCurrent && data.endDate && data.endDate < data.startDate) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["endDate"],
                message: "End date cannot be earlier than start date",
            });
        }
    }),
});
const updateExperienceValidationSchema = z.object({
    body: z
        .object({
        company: z.string().trim().min(1).max(150).optional(),
        position: z.string().trim().min(1).max(150).optional(),
        companyLogo: imageSchema.optional(),
        employmentType: z
            .enum(EMPLOYMENT_TYPES, {
            error: () => ({
                message: "Invalid employment type",
            }),
        })
            .optional(),
        workMode: z
            .enum(WORK_MODES, {
            error: () => ({
                message: "Invalid work mode",
            }),
        })
            .optional(),
        location: z.string().trim().min(1).max(150).optional(),
        startDate: z.coerce.date().optional(),
        endDate: z.union([z.coerce.date(), z.null()]).optional(),
        isCurrent: z.boolean().optional(),
        summary: z.string().trim().min(1).max(2000).optional(),
        responsibilities: z.array(z.string().trim().min(1)).max(50).optional(),
        technologies: z.array(z.string().trim().min(1)).max(50).optional(),
        companyWebsite: z
            .string()
            .trim()
            .url("Invalid company website URL")
            .optional(),
        sortOrder: z.number().int().min(0).optional(),
        isActive: z.boolean().optional(),
    })
        .refine((data) => {
        if (data.isCurrent === true && data.endDate) {
            return false;
        }
        return true;
    }, {
        message: "Current experience cannot have an end date",
        path: ["endDate"],
    }),
});
export const ExperienceValidation = {
    createExperienceValidationSchema,
    updateExperienceValidationSchema,
};
//# sourceMappingURL=experience.validation.js.map