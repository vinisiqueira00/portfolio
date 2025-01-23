"use client";

import { useState } from "react";

import { AvatarAnimationBallon } from "@/components/atoms/AvatarAnimationBallon";
import { AvatarAnimationImage } from "@/components/atoms/AvatarAnimationImage";
import { useTranslations } from "next-intl";

interface AvatarAnimationProps {
  animationSteps: {
    text: string;
    avatar: {
      light: string;
      dark: string;
    };
  }[];
}

function AvatarAnimation() {
  const t = useTranslations("Home.Presentation");

  const [clickAnimationId, setClickAnimationId] = useState<number>(0);

  const animationSteps: AvatarAnimationProps["animationSteps"] = [
    {
      text: t("text-animated-01"),
      avatar: {
        light: t("avatar-url.initial.light"),
        dark: t("avatar-url.initial.dark"),
      },
    },
    {
      text: t("text-animated-02"),
      avatar: {
        light: t("avatar-url.animated.light"),
        dark: t("avatar-url.animated.dark"),
      },
    },
    {
      text: t("text-animated-03"),
      avatar: {
        light: t("avatar-url.animated.light"),
        dark: t("avatar-url.animated.dark"),
      },
    },
  ];

  function handleClickText() {
    if (clickAnimationId === animationSteps.length - 1) {
      setClickAnimationId(0);
    } else {
      setClickAnimationId(clickAnimationId + 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 w-60 h-60 bg-background-03 dark:bg-background-08 rounded-2xl shadow-shadow-01">
      <AvatarAnimationBallon
        handleClick={handleClickText}
        text={animationSteps[clickAnimationId].text}
      />

      <AvatarAnimationImage
        lightImage={animationSteps[clickAnimationId].avatar.light}
        darkImage={animationSteps[clickAnimationId].avatar.dark}
      />
    </div>
  );
}

export { AvatarAnimation };
