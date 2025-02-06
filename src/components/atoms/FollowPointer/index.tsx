"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";

import { useFollowPointer } from "@/hooks/useFollowPointer";

function FollowPointer() {
  const ref = useRef<HTMLDivElement>(null);

  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="hidden fixed top-0 left-0 w-4 h-4 rounded-full bg-light-neutral-900 md:block invert mix-blend-difference pointer-events-none z-20"
      style={{ x, y }}
    />
  );
}

export { FollowPointer };
