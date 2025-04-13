"use client";

import { useForm } from "react-hook-form";
// import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";

// import { Button } from "@/components/atoms/Button";
import { ContactInput } from "@/components/atoms/ContactInput";

import { contactSchema, ContactFormData } from "@/schemas/contactSchema";

function ContactForm() {
  // const t = useTranslations("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { preferredContact: "email" },
  });

  async function onSubmit(data: ContactFormData) {
    console.log("#SEND", data);

    // if (value.trim().length === 0) return;

    // try {
    //   setStatus("LOADING");

    //   const response = await fetch(
    //     "https://portfolio-backend-cmoh.onrender.com/contact",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ message: value }),
    //     }
    //   );

    //   if (response.status !== 201) throw new Error();

    //   setValue("");
    //   setStatus("SUCCESS");
    // } catch (err) {
    //   console.error(err);

    //   setStatus("ERROR");
    // }
  }

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-stretch justify-center gap-4 w-full max-w-3xl h-auto"
    >
      <div className="flex items-stretch justify-center gap-4 w-full h-auto">
        <div className="flex-1 flex flex-col items-stretch justify-start gap-4 w-auto h-auto">
          <ContactInput
            type="TEXT"
            placeholder="Full name"
            registerInput={register("fullName")}
            error={errors.fullName}
          />
          <ContactInput
            type="TEXT"
            placeholder="Company name"
            registerInput={register("companyName")}
            error={errors.companyName}
          />
          <ContactInput
            type="CONTACT"
            placeholder="Email for contact (optional)"
            nameSelect={"preferredContact"}
            registerInput={register("email")}
            error={errors.email}
          />
        </div>
        <div className="flex-1 flex flex-col items-stretch justify-start gap-4 w-auto h-auto">
          <ContactInput
            type="TEXT"
            placeholder="Subject"
            registerInput={register("subject")}
            error={errors.subject}
          />
          <ContactInput
            type="MESSAGE"
            placeholder="Your message"
            registerInput={register("message")}
            error={errors.message}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-auto h-auto">
        {/* <Button
          isLoading={isSubmitting}
          label={t("contact-button-submit")}
          type="primary"
          onClick={() => {}}
        /> */}

        <button type="submit">{isSubmitting ? "loading" : "Send"}</button>
      </div>
    </form>
  );
}

export { ContactForm };
