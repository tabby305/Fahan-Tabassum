type SectionHeadingProps = {
  index: string;
  title: string;
  note?: string;
};

export default function SectionHeading({ index, title, note }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5 sm:mb-14">
      <div className="flex items-baseline gap-4 sm:gap-6">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">{index}</span>
        <h2 className="text-3xl font-light tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {note ? (
        <span className="hidden font-mono text-xs tracking-wider text-muted-foreground sm:block">
          {note}
        </span>
      ) : null}
    </div>
  );
}
