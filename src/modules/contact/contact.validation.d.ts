import { z } from "zod";
export declare const ContactValidation: {
    createContactValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodString;
            email: z.ZodEmail;
            phone: z.ZodOptional<z.ZodString>;
            company: z.ZodOptional<z.ZodString>;
            subject: z.ZodString;
            message: z.ZodString;
            source: z.ZodDefault<z.ZodEnum<{
                [x: string]: string;
            }>>;
            sortOrder: z.ZodDefault<z.ZodNumber>;
            isActive: z.ZodDefault<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateContactValidationSchema: z.ZodObject<{
        body: z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodEmail>;
            phone: z.ZodOptional<z.ZodString>;
            company: z.ZodOptional<z.ZodString>;
            subject: z.ZodOptional<z.ZodString>;
            message: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            priority: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            source: z.ZodOptional<z.ZodEnum<{
                [x: string]: string;
            }>>;
            isRead: z.ZodOptional<z.ZodBoolean>;
            isReplied: z.ZodOptional<z.ZodBoolean>;
            repliedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodCoercedDate<unknown>, z.ZodNull]>>;
            notes: z.ZodOptional<z.ZodString>;
            sortOrder: z.ZodOptional<z.ZodNumber>;
            isActive: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=contact.validation.d.ts.map