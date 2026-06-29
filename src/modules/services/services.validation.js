// src\modules\services\services.validation.ts
import { z } from "zod";
const createServiceValidationSchema = z.object({
    body: z.object({
        title: z
            .string()
            .trim()
            .min(1, "Title is required")
            .max(100, "Title cannot exceed 100 characters"),
        shortDescription: z
            .string()
            .trim()
            .min(1, "Short description is required")
            .max(200, "Short description cannot exceed 200 characters"),
        description: z
            .string()
            .trim()
            .min(1, "Description is required")
            .max(3000, "Description cannot exceed 3000 characters"),
        icon: z
            .string()
            .trim()
            .max(100, "Icon cannot exceed 100 characters")
            .optional(),
        sortOrder: z
            .number()
            .int()
            .min(0, "Sort order cannot be negative")
            .default(0),
        isActive: z.boolean().default(true),
    }),
});
const updateServiceValidationSchema = z.object({
    body: z.object({
        title: z
            .string()
            .trim()
            .min(1, "Title cannot be empty")
            .max(100, "Title cannot exceed 100 characters")
            .optional(),
        shortDescription: z
            .string()
            .trim()
            .min(1, "Short description cannot be empty")
            .max(200, "Short description cannot exceed 200 characters")
            .optional(),
        description: z
            .string()
            .trim()
            .min(1, "Description cannot be empty")
            .max(3000, "Description cannot exceed 3000 characters")
            .optional(),
        icon: z
            .string()
            .trim()
            .max(100, "Icon cannot exceed 100 characters")
            .optional(),
        sortOrder: z
            .number()
            .int()
            .min(0, "Sort order cannot be negative")
            .optional(),
        isActive: z.boolean().optional(),
    }),
});
export const ServicesValidation = {
    createServiceValidationSchema,
    updateServiceValidationSchema,
};
//# sourceMappingURL=services.validation.js.map