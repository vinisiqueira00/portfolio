"use client";

import { Copy } from "lucide-react";

interface CopyToClipboardProps {
  text: string;
}

function CopyToClipboard({ text }: CopyToClipboardProps) {
  function copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <button
      className="flex items-center justify-end gap-2"
      onClick={() => copy(text)}
    >
      <span className="font-medium text-base text-text-02 dark:text-text-07 text-right">
        {text}
      </span>
      <Copy
        className="text-text-02 dark:text-text-07"
        size={16}
        strokeWidth={2}
      />
    </button>
  );
}

export { CopyToClipboard };
