import { Card } from "@/components/ui/card";
import { homeContent } from "@/content/site";

export function AiCompanionSection() {
  const companion = homeContent.aiCompanion;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
      <Card className="p-7 sm:p-9">
        <p className="section-kicker">{companion.kicker}</p>
        <h2 className="editorial-heading mt-4 max-w-4xl font-heading text-3xl text-[#f7efe8] sm:text-4xl lg:text-[4rem]">
          {companion.title}
        </h2>
        <p className="luxury-text mt-5 max-w-3xl text-base leading-7 sm:text-lg">
          {companion.description}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {companion.groups.map(({ label, title, items, icon: Icon }) => (
            <Card key={title} className="h-full p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-[#efe1d5]">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="section-kicker !text-[#cda96a]">{label}</span>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-medium text-[#f7efe8]">
                {title}
              </h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-[#e9dfd6]/70">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1rem] border border-white/7 bg-white/4 px-3 py-2.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Card>
    </section>
  );
}
