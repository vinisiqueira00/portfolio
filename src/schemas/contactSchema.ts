import { z } from "zod";

const errorMessages = {
  fullNameMinError: "Nome completo deve ter no mínimo 5 caracteres",
  fullNameMaxError: "Nome completo deve ter no máximo 30 caracteres",
  companyNameMinError: "Nome da empresa deve ter no mínimo 2 caracteres",
  companyNameMaxError: "Nome da empresa deve ter no máximo 100 caracteres",
  emailValidateError: "Email inválido",
  phoneValidateError: "Telefone inválido",
  subjectMinError: "Assunto deve ter no mínimo 5 caracteres",
  subjectMaxError: "Assunto deve ter no máximo 25 caracteres",
  messageMinError: "Mensagem deve ter no mínimo 5 caracteres",
  messageMaxError: "Mensagem deve ter no máximo 250 caracteres",
};

export const contactSchema = z
  .object({
    fullName: z
      .string()
      .min(5, errorMessages.fullNameMinError)
      .max(30, errorMessages.fullNameMaxError),
    companyName: z
      .string()
      .min(2, errorMessages.fullNameMinError)
      .max(100, errorMessages.fullNameMaxError),
    email: z
      .string()
      .email(errorMessages.emailValidateError)
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .regex(/^\(\d{2}\) \d{4,5}-\d{4}$/, errorMessages.phoneValidateError)
      .optional()
      .or(z.literal("")),

    subject: z
      .string()
      .min(5, errorMessages.subjectMinError)
      .max(25, errorMessages.subjectMaxError),

    message: z
      .string()
      .min(5, errorMessages.messageMinError)
      .max(250, errorMessages.messageMaxError),

    preferredContact: z.enum(["email", "phone"]),
  })
  .refine(
    (data) =>
      (data.preferredContact === "email" && data.email) ||
      (data.preferredContact === "phone" && data.phone),
    {
      message: "Informe um contato válido conforme a preferência",
      path: ["email"], // Aponta o erro para email, mas pode ajustar para 'phone'
    }
  );

export type ContactFormData = z.infer<typeof contactSchema>;
