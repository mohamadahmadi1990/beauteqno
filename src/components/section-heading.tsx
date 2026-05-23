type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignmentClassName =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignmentClassName}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="editorial-heading mt-4 font-heading text-3xl text-[#f7efe8] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="luxury-text mt-5 text-base leading-7 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
