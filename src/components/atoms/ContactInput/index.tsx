import { Dispatch, SetStateAction } from "react";

interface ContactInputProps {
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function ContactInput({ placeholder, value, setValue }: ContactInputProps) {
  return (
    <input
      type="text"
      className="w-full h-14 px-2 font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 bg-transparent border-0 placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 outline-none md:w-auto md:flex-1"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export { ContactInput };
