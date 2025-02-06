import * as motion from "motion/react-client";

interface ImagePresentationContactProps {
  text: string;
}

function ImagePresentationContact({ text }: ImagePresentationContactProps) {
  return (
    <span className="flex items-center justify-center gap-2 w-full h-8 py-2 px-3 rounded-2xl border border-light-neutral-400 dark:border-dark-neutral-400 text-xs font-normal leading-none text-light-primary-main dark:text-dark-primary-main">
      <span className="relative">
        <div className="w-2.5 h-2.5 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />
        <motion.div
          className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-light-primary-main"
          animate={{
            scale: [1, 3, 1, 1],
            opacity: [1, 0, 0, 1],
          }}
          transition={{
            duration: 0.75,
            ease: "easeInOut",
            times: [0, 1, 1, 1],
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </span>
      {text}
    </span>
  );
}

export { ImagePresentationContact };
