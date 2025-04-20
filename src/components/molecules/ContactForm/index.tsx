"use client";

import { useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/atoms/Button";
import { ContactInput } from "@/components/atoms/ContactInput";

import { createContactSchema, ContactFormData } from "@/schemas/contactSchema";
import { useEffect, useMemo } from "react";

function ContactForm() {
  const locale = useLocale();
  const t = useTranslations("footer.contact.form");

  const contactSchema = useMemo(
    () =>
      createContactSchema({
        fullNameMinError: t("full-name.errors.min-character"),
        fullNameMaxError: t("full-name.errors.max-character"),
        companyNameMaxError: t("company-name.errors.max-character"),
        emailValidateError: t("email.errors.format"),
        phoneValidateError: t("phone.errors.format"),
        subjectMinError: t("subject.errors.min-character"),
        subjectMaxError: t("subject.errors.max-character"),
        messageMinError: t("message.errors.min-character"),
        messageMaxError: t("message.errors.max-character"),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
    control,
    watch,
    trigger,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { preferredContact: "email" },
  });

  const preferredContact = watch("preferredContact");

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: data.fullName,
            companyName: data.companyName,
            contact:
              data.preferredContact === "email" ? data.email : data.phone,
            subject: data.subject,
            message: data.message,
          }),
        }
      );

      if (response.status !== 201) throw new Error();

      reset();
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (isSubmitted) trigger();
  }, [isSubmitted, locale, trigger]);

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-stretch justify-center gap-4 w-full max-w-3xl h-auto"
    >
      <div className="flex flex-col items-stretch justify-start gap-4 w-full h-auto md:flex-row md:justify-center">
        <div className="flex-1 flex flex-col items-stretch justify-start gap-4 w-auto h-auto">
          <ContactInput
            type="TEXT"
            placeholder={t("full-name.placeholder")}
            registerInput={register("fullName")}
            error={errors.fullName}
          />
          <ContactInput
            type="TEXT"
            placeholder={t("company-name.placeholder")}
            registerInput={register("companyName")}
            error={errors.companyName}
          />
          <ContactInput
            type="CONTACT"
            placeholder={
              preferredContact === "email"
                ? t("email.placeholder")
                : t("phone.placeholder")
            }
            nameSelect={"preferredContact"}
            registerInput={
              preferredContact === "email"
                ? register("email")
                : register("phone")
            }
            control={control}
            labelEmail={t("email.label")}
            labelPhone={t("phone.label")}
            error={preferredContact === "email" ? errors.email : errors.phone}
          />
        </div>
        <div className="flex-1 flex flex-col items-stretch justify-start gap-4 w-auto h-auto">
          <ContactInput
            type="TEXT"
            placeholder={t("subject.placeholder")}
            registerInput={register("subject")}
            error={errors.subject}
          />
          <ContactInput
            type="MESSAGE"
            placeholder={t("message.placeholder")}
            registerInput={register("message")}
            error={errors.message}
          />
        </div>
      </div>

      <div className="flex flex-col items-stretch justify-center w-full h-auto md:w-auto md:items-center">
        <Button
          isLoading={isSubmitting}
          label={t("submit-button.label")}
          type="primary"
          onClick={() => {}}
        />
      </div>
    </form>
  );
}

export { ContactForm };
