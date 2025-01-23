"use client";

import { Copy, BadgeCheck } from "lucide-react";
import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
}

function CopyToClipboard({ text }: CopyToClipboardProps) {
  const [copied, setCopied] = useState<boolean>(false);

  function copy(text: string) {
    navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      className="flex items-center justify-end gap-2"
      onClick={() => copy(text)}
    >
      <span className="font-medium text-base text-text-02 dark:text-text-07 text-right">
        {text}
      </span>
      {copied ? (
        <BadgeCheck
          className="text-text-02 dark:text-text-07"
          size={16}
          strokeWidth={2}
        />
      ) : (
        <Copy
          className="text-text-02 dark:text-text-07"
          size={16}
          strokeWidth={2}
        />
      )}
    </button>
  );
}

export { CopyToClipboard };
