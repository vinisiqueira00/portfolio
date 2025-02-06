"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/atoms/Button";
import { ContactInput } from "@/components/atoms/ContactInput";

function ContactForm() {
  const t = useTranslations("");

  function handleSubmit() {}

  return (
    <form
      id="contact"
      onSubmit={() => handleSubmit()}
      className="flex flex-col items-stretch justify-center gap-2 w-full h-auto p-2 rounded-2xl border border-light-neutral-500 dark:border-dark-neutral-500 md:flex-row md:max-w-[28rem]"
    >
      <ContactInput placeholder={t("contact-placeholder")} />
      <Button
        label={t("contact-button-submit")}
        type="primary"
        onClick={() => {}}
      />
    </form>
  );
}

export { ContactForm };
