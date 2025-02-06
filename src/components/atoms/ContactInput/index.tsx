interface ContactInputProps {
  placeholder: string;
}

function ContactInput({ placeholder }: ContactInputProps) {
  return (
    <input
      type="text"
      className="w-full h-14 px-2 font-normal text-base text-light-neutral-900 dark:text-dark-neutral-900 bg-transparent border-0 placeholder-light-neutral-600 dark:placeholder-dark-neutral-600 outline-none md:w-auto md:flex-1"
      placeholder={placeholder}
    />
  );
}

export { ContactInput };
