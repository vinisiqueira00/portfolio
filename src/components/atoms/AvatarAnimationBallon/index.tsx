interface AvatarAnimationBallonProps {
  handleClick: () => void;
  text: string;
}

function AvatarAnimationBallon(props: AvatarAnimationBallonProps) {
  return (
    <button
      className="relative flex items-center justify-center px-4 py-1 mb-1 bg-background-01 dark:bg-background-10 rounded-2xl after:content-[''] after:bg-background-01 dark:after:bg-background-10 after:w-4 after:h-4 after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:rotate-45 after:z-0"
      onClick={props.handleClick}
    >
      <span className="relative font-medium text-xs text-center text-text-04 dark:text-text-07 z-10">
        {props.text}
      </span>
    </button>
  );
}

export { AvatarAnimationBallon };
