"use client";

import { MotionConfig } from "motion/react";
import * as motion from "motion/react-client";

import { useNavbarStore } from "@/stores/NavbarStore";

function MobileNavbarTrigger() {
  const { isOpened, open, close } = useNavbarStore();

  return (
    <MotionConfig transition={{ duration: 0.2, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={isOpened ? "open" : "closed"}
        onClick={isOpened ? close : open}
        className="relative w-10 h-10 rounded-xl border border-light-neutral-400 dark:border-dark-neutral-400 md:hidden"
      >
        <motion.span
          className="absolute h-px w-5 bg-light-neutral-900 dark:bg-dark-neutral-900"
          style={{
            left: "calc(50%)",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              top: ["35%", "50%", "50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            closed: {
              top: ["50%", "50%", "35%"],
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-px w-5 bg-light-neutral-900 dark:bg-dark-neutral-900"
          style={{
            left: "calc(50%)",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        />
        <motion.span
          className="absolute h-px w-3 bg-light-neutral-900 dark:bg-dark-neutral-900"
          style={{
            left: "calc(50% + 4px)",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: ["calc(50% + 4px)", "calc(50% + 4px)", "50%"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: ["50%", "calc(50% + 4px)", "calc(50% + 4px)"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export { MobileNavbarTrigger };
