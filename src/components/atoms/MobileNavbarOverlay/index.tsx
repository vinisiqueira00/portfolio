"use client";

import * as motion from "motion/react-client";

import { useNavbarStore } from "@/stores/NavbarStore";

function MobileNavbarOverlay() {
  const { isOpened, close } = useNavbarStore();

  return (
    <motion.div
      animate={isOpened ? "open" : "closed"}
      style={{ opacity: "0", pointerEvents: "none" }}
      variants={{
        open: { opacity: "1", pointerEvents: "all" },
        closed: { opacity: "0", pointerEvents: "none" },
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onClick={close}
      className="md:!hidden fixed top-0 left-0 w-screen h-screen opacity-0 pointer-events-none z-[10] bg-light-neutral-400/80 dark:bg-dark-neutral-400/80 group-data-[opened=true]:opacity-80 group-data-[opened=true]:pointer-events-auto transition-all"
    />
  );
}

export { MobileNavbarOverlay };
