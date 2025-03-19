import * as motion from "motion/react-client";

interface CertificateTimelineCircleProps {
  isVisible: boolean;
}

function CertificateTimelineCircle(props: CertificateTimelineCircleProps) {
  return (
    <div
      data-visible={props.isVisible}
      className="relative flex items-center justify-center w-full h-4 data-[visible=false]:hidden"
    >
      <div className="w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main border-0" />

      <motion.div
        className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-light-primary-main dark:bg-dark-primary-main"
        animate={{
          translateX: ["-50%", "-50%", "-50%", "-50%"],
          scale: [1, 2, 1, 1],
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
    </div>
  );
}

export { CertificateTimelineCircle };
