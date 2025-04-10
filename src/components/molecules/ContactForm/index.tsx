"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/atoms/Button";
import { ContactInput } from "@/components/atoms/ContactInput";
import { FormEvent, useState } from "react";

function ContactForm() {
  const t = useTranslations("");

  const [value, setValue] = useState<string>("");
  const [status, setStatus] = useState<"LOADING" | "ERROR" | "SUCCESS">();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (value.trim().length === 0) return;

    try {
      setStatus("LOADING");

      const response = await fetch(
        "https://portfolio-backend-cmoh.onrender.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: value }),
        }
      );

      if (response.status !== 201) throw new Error();

      setValue("");
      setStatus("SUCCESS");
    } catch (err) {
      console.error(err);

      setStatus("ERROR");
    }
  }

  return (
    <form
      id="contact"
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-stretch justify-center gap-2 w-full h-auto p-2 rounded-2xl border border-light-neutral-500 dark:border-dark-neutral-500 md:flex-row md:max-w-[28rem]"
    >
      <ContactInput
        placeholder={t("contact-placeholder")}
        value={value}
        setValue={setValue}
      />
      <Button
        isLoading={status === "LOADING"}
        label={t("contact-button-submit")}
        type="primary"
        onClick={() => {}}
      />
    </form>
  );
}

export { ContactForm };
