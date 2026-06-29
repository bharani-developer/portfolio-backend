// src/modules/contact/contact.validation.ts
import { z } from "zod";
import { CONTACT_DEFAULT, CONTACT_PRIORITIES, CONTACT_SOURCES, CONTACT_STATUSES, } from "./contact.constant.js";
const createContactValidationSchema = z.object({
    body: z.object({
        name: z
            .string()
            .trim()
            .min(2, "Name must be at least 2 characters")
            .max(100, "Name cannot exceed 100 characters"),
        email: z.email("Invalid email address").trim().toLowerCase(),
        phone: z
            .string()
            .trim()
            .min(6, "Phone number is too short")
            .max(25, "Phone number cannot exceed 25 characters")
            .regex(/^[+\d\s\-()]+$/, "Invalid phone number format")
            .optional(),
        company: z
            .string()
            .trim()
            .max(150, "Company name cannot exceed 150 characters")
            .optional(),
        subject: z
            .string()
            .trim()
            .min(5, "Subject must be at least 5 characters")
            .max(200, "Subject cannot exceed 200 characters"),
        message: z
            .string()
            .trim()
            .min(10, "Message must be at least 10 characters")
            .max(5000, "Message cannot exceed 5000 characters"),
        source: z
            .enum(CONTACT_SOURCES, {
            error: () => ({
                message: "Invalid contact source",
            }),
        })
            .default("Website"),
        sortOrder: z
            .number()
            .int()
            .min(0, "Sort order cannot be negative")
            .default(CONTACT_DEFAULT.SORT_ORDER),
        isActive: z.boolean().default(CONTACT_DEFAULT.IS_ACTIVE),
    }),
});
const updateContactValidationSchema = z.object({
    body: z
        .object({
        name: z.string().trim().min(2).max(100).optional(),
        email: z.email().trim().toLowerCase().optional(),
        phone: z
            .string()
            .trim()
            .min(6)
            .max(25)
            .regex(/^[+\d\s\-()]+$/)
            .optional(),
        company: z.string().trim().max(150).optional(),
        subject: z.string().trim().min(5).max(200).optional(),
        message: z.string().trim().min(10).max(5000).optional(),
        status: z
            .enum(CONTACT_STATUSES, {
            error: () => ({
                message: "Invalid contact status",
            }),
        })
            .optional(),
        priority: z
            .enum(CONTACT_PRIORITIES, {
            error: () => ({
                message: "Invalid contact priority",
            }),
        })
            .optional(),
        source: z
            .enum(CONTACT_SOURCES, {
            error: () => ({
                message: "Invalid contact source",
            }),
        })
            .optional(),
        isRead: z.boolean().optional(),
        isReplied: z.boolean().optional(),
        repliedAt: z.union([z.coerce.date(), z.null()]).optional(),
        notes: z
            .string()
            .trim()
            .max(3000, "Notes cannot exceed 3000 characters")
            .optional(),
        sortOrder: z.number().int().min(0).optional(),
        isActive: z.boolean().optional(),
    })
        .superRefine((data, ctx) => {
        if (data.isReplied === true && !data.repliedAt) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["repliedAt"],
                message: "Reply date is required when contact is marked as replied",
            });
        }
        if (data.repliedAt && data.repliedAt > new Date()) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["repliedAt"],
                message: "Reply date cannot be in the future",
            });
        }
    }),
});
export const ContactValidation = {
    createContactValidationSchema,
    updateContactValidationSchema,
};
//# sourceMappingURL=contact.validation.js.map