import { WandSparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { homeContent } from "@/content/site";

export function ExperienceLoopSection() {
  const experienceLoop = homeContent.experienceLoop;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <Card className="p-7 sm:p-9">
          <div className="flex items-center gap-3 text-[#efe1d5]">
            <WandSparkles className="h-5 w-5" />
            <p className="section-kicker !text-[#efe1d5]">{experienceLoop.kicker}</p>
          </div>
          <h2 className="editorial-heading mt-4 font-heading text-3xl text-[#f7efe8] sm:text-4xl">
            {experienceLoop.title}
          </h2>
          <p className="luxury-text mt-5 max-w-xl text-base leading-7">
            {experienceLoop.description}
          </p>
        </Card>

        <div className="grid gap-4">
          {experienceLoop.steps.map(({ step, title, description }) => (
            <Card key={step} className="p-6">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 font-heading text-sm font-semibold text-white">
                  {step}
                </span>
                <h3 className="font-heading text-2xl font-medium text-[#f7efe8]">
                  {title}
                </h3>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#e9dfd6]/66">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
