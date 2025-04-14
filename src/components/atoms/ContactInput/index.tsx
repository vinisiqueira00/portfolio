import {
  Control,
  Controller,
  FieldError,
  Path,
  UseFormRegisterReturn,
} from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ContactFormData } from "@/schemas/contactSchema";

interface ContactInputTypeProps {
  type: "CONTACT";
  control?: Control<ContactFormData>;
  nameSelect: Path<ContactFormData>;
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
  if (props.type === "MESSAGE") {
    return (
      <fieldset className="relative flex-1 w-full h-full bg-transparent rounded-2xl border border-light-neutral-500 dark:border-dark-neutral-500 overflow-hidden">
        <textarea
          className="w-full h-full  p-4 border-0 bg-transparent font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 outline-none select-none resize-none"
          placeholder={props.placeholder}
          {...props.registerInput}
        />

        {props.error && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute right-4 top-4 flex items-center justify-center w-5.5 h-5.5 rounded-full border border-light-status-error dark:border-dark-status-error font-body font-normal text-sm text-light-status-error dark:text-dark-status-error">
                !
              </TooltipTrigger>
              <TooltipContent>
                <p>{props.error.message}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </fieldset>
    );
  }

  if (props.type === "CONTACT") {
    return (
      <fieldset className="relative flex w-full h-14 min-h-14 max-h-14 bg-transparent border-none">
        <Controller
          control={props.control}
          name={props.nameSelect}
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="min-w-28 w-28 h-full p-4 font-normal text-base text-light-neutral-600 dark:text-dark-neutral-600 bg-light-neutral-400 dark:bg-dark-neutral-400 rounded-none rounded-s-2xl border border-light-neutral-500 dark:border-dark-neutral-500 overflow-hidden">
                <SelectValue placeholder="Contact" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <input
          type="text"
          className="w-full h-full p-4 font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 bg-transparent rounded-e-2xl border border-l-0 border-light-neutral-500 dark:border-dark-neutral-500 overflow-hidden placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 outline-none select-none"
          placeholder={props.placeholder}
          {...props.registerInput}
        />
        {props.error && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="absolute right-4 top-4 flex items-center justify-center w-5.5 h-5.5 rounded-full border border-light-status-error dark:border-dark-status-error font-body font-normal text-sm text-light-status-error dark:text-dark-status-error">
                !
              </TooltipTrigger>
              <TooltipContent>
                <p>{props.error.message}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
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

      {props.error && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="absolute right-4 top-4 flex items-center justify-center w-5.5 h-5.5 rounded-full border border-light-status-error dark:border-dark-status-error font-body font-normal text-sm text-light-status-error dark:text-dark-status-error">
              !
            </TooltipTrigger>
            <TooltipContent>
              <p>{props.error.message}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </fieldset>
  );
}

export { ContactInput };
