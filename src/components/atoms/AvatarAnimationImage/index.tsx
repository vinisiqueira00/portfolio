import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface AvatarAnimationImageProps {
  lightImage: string;
  darkImage: string;
}

function AvatarAnimationImage(props: AvatarAnimationImageProps) {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  return (
    <Image
      src={resolvedTheme === "light" ? props.lightImage : props.darkImage}
      alt="My avatar image"
      width={100}
      height={162}
    />
  );
}

export { AvatarAnimationImage };
