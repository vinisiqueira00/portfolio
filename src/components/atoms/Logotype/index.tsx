import Link from "next/link";
import Image from "next/image";

import { useNavbarStore } from "@/stores/NavbarStore";

interface LogotypeProps {
  source: string;
  alt: string;
  firstName: string;
  lastName: string;
}

function Logotype(props: LogotypeProps) {
  const { close } = useNavbarStore();

  return (
    <Link
      href="/"
      className="flex items-center justify-start gap-4"
      onClick={close}
    >
      <Image src={props.source} alt={props.alt} width={24} height={24} />

      <h2 className="font-semibold text-base text-light-neutral-900 dark:text-dark-neutral-900">
        {`${props.firstName} `}
        <span className="text-light-neutral-600 dark:text-dark-neutral-600">
          {props.lastName}
        </span>
      </h2>
    </Link>
  );
}

export { Logotype };
