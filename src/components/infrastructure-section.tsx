import { Card } from "@/components/ui/card";
import { homeContent } from "@/content/site";

export function InfrastructureSection() {
  const infrastructure = homeContent.infrastructure;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-8 lg:px-10">
      <div className="max-w-4xl">
        <p className="section-kicker">{infrastructure.kicker}</p>
        <h2 className="editorial-heading mt-4 font-heading text-4xl text-[#f7efe8] sm:text-5xl lg:text-[4.1rem]">
          {infrastructure.title}
        </h2>
        <p className="luxury-text mt-5 max-w-3xl text-base leading-8 sm:text-lg">
          {infrastructure.description}
        </p>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-[#8c6b38]/35 bg-[#8c6b38]/28 md:grid-cols-2 xl:grid-cols-3">
        {infrastructure.groups.map(({ label, items }) => (
          <Card
            key={label}
            className="h-full rounded-none border-0 bg-[#120e13]/96 p-7 shadow-none"
          >
            <p className="section-kicker !text-[#cda96a]">{label}</p>
            <ul className="mt-6 grid gap-3 text-base leading-7 text-[#eadfd5]/80">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
