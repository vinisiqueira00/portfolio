import React from "react";

interface ResumeButtonProps {
  label: string;
}

function ResumeButton({ label }: ResumeButtonProps) {
  return (
    <button className="flex items-center justify-center w-auto h-8 px-4 font-semibold text-base text-text-03 bg-background-gradient-01 rounded-full">
      {label}
    </button>
  );
}

export { ResumeButton };
