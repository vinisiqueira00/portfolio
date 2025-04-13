import {
  Controller,
  FieldError,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactInputTypeProps {
  type: "CONTACT";
  nameSelect: string;
}
interface ContactInputOthersProps {
  type?: "TEXT" | "MESSAGE";
}

type ContactInputProps = (ContactInputTypeProps | ContactInputOthersProps) & {
  error?: FieldError;
  registerInput: UseFormRegisterReturn;
  placeholder: string;
};

function ContactInput(props: ContactInputProps) {
  const { control } = useForm();

  if (props.type === "MESSAGE") {
    return (
      <fieldset className="relative flex-1 w-full h-full bg-transparent rounded-2xl border border-light-neutral-500 dark:border-dark-neutral-500 overflow-hidden">
        <textarea
          className="w-full h-full  p-4 border-0 bg-transparent font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 outline-none select-none resize-none"
          placeholder={props.placeholder}
          {...props.registerInput}
        />
      </fieldset>
    );
  }

  if (props.type === "CONTACT") {
    return (
      <fieldset className="relative flex w-full h-14 min-h-14 max-h-14 bg-transparent rounded-2xl border border-light-neutral-500 dark:border-dark-neutral-500 overflow-hidden">
        <Controller
          control={control}
          name={props.nameSelect}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-24 h-full p-4 font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600 bg-light-neutral-400 dark:bg-dark-neutral-400 rounded-none border-r !border-r-light-neutral-500 dark:!border-r-dark-neutral-500">
                <SelectValue placeholder="Contact" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Email">Email</SelectItem>
                <SelectItem value="Phone">Phone</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <input
          type="text"
          className="w-full h-full p-4 font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 bg-transparent border-0 placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 outline-none select-none"
          placeholder={props.placeholder}
          {...props.registerInput}
        />
      </fieldset>
    );
  }

  return (
    <fieldset className="relative w-full h-14 min-h-14 max-h-14 bg-transparent rounded-2xl border border-light-neutral-500 dark:border-dark-neutral-500 overflow-hidden">
      <input
        type="text"
        className="w-full h-full p-4 font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 bg-transparent border-0 outline-none select-none"
        placeholder={props.placeholder}
        {...props.registerInput}
      />

      {props.error && <span>!</span>}
    </fieldset>
  );
}

export { ContactInput };
