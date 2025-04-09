interface ProjectDetailsContentSubjectListProps {
  list: {
    index: string;
    text: string;
  }[];
}

export function ProjectDetailsContentSubjectList(
  props: ProjectDetailsContentSubjectListProps
) {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-y-4 flex-wrap w-auto h-auto md:flex-row">
      {props.list.map((item, idx) => (
        <div
          key={item.index}
          data-is-odd={idx % 2 === 0}
          data-order={item.index}
          className="flex items-center justify-start gap-3 w-full md:w-1/2 md:data-[is-odd=true]:pr-4 md:data-[is-odd=false]:pl-4 data-[order=1]:order-1 data-[order=2]:order-2 data-[order=3]:order-3 data-[order=4]:order-4 data-[order=5]:order-5 data-[order=6]:order-6 md:!order-none"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-light-neutral-400 dark:bg-dark-neutral-400 text-center text-sm font-bold font-heading leading-none text-light-neutral-900 dark:text-dark-neutral-900">
            {item.index}
          </span>
          <p className="flex-1 w-auto h-auto text-left text-base font-normal font-body leading-normal text-light-neutral-600 dark:text-dark-neutral-600">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
