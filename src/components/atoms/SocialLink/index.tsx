import Image from "next/image";

import { Link } from "@/i18n/routing";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

function SocialLink({ href, src, alt }: SocialLinkProps) {
  return (
    <Link target="_blank" href={href}>
      <Image src={src} alt={alt} width={24} height={24} />
    </Link>
  );
}

export { SocialLink };
