type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-bold uppercase text-[#FFB6D9]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-8 text-zinc-300">{description}</p> : null}
    </div>
  );
}
