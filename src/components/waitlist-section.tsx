import { BeauteqnoWaitlistForm } from "@/components/beauteqno-waitlist-form";
import { Card } from "@/components/ui/card";
import { homeContent } from "@/content/site";

export function WaitlistSection() {
  const waitlist = homeContent.waitlist;

  return (
    <section id="waitlist" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Card className="p-7 sm:p-9">
          <p className="section-kicker">{waitlist.kicker}</p>
          <h2 className="editorial-heading mt-4 font-heading text-3xl text-[#f7efe8] sm:text-5xl">
            {waitlist.title}
          </h2>
          <p className="luxury-text mt-5 text-base leading-7">
            {waitlist.description}
          </p>

          <div className="mt-8 grid gap-3">
            {waitlist.bullets.map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-[#eadfd5]/70"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <BeauteqnoWaitlistForm />
      </div>
    </section>
  );
}
