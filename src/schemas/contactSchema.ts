import { z } from "zod";

export function createContactSchema(t: Record<string, string>) {
  return z
    .object({
      fullName: z
        .string()
        .min(5, t.fullNameMinError)
        .max(30, t.fullNameMaxError),
      companyName: z
        .string()
        .min(2, t.companyNameMinError)
        .max(100, t.companyNameMaxError),
      preferredContact: z.enum(["email", "phone"]),
      email: z.string().optional(),
      phone: z.string().optional(),
      subject: z.string().min(5, t.subjectMinError).max(25, t.subjectMaxError),
      message: z.string().min(5, t.messageMinError).max(250, t.messageMaxError),
    })
    .superRefine((data, ctx) => {
      if (data.preferredContact === "email") {
        if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          ctx.addIssue({
            path: ["email"],
            code: z.ZodIssueCode.custom,
            message: t.emailValidateError,
          });
        }
      }

      if (data.preferredContact === "phone") {
        if (!data.phone || !/^\(\d{2}\) \d{4,5}-\d{4}$/.test(data.phone)) {
          ctx.addIssue({
            path: ["phone"],
            code: z.ZodIssueCode.custom,
            message: t.phoneValidateError,
          });
        }
      }
    });
}

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
