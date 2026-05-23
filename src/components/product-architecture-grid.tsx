"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  BrainCircuit,
  Cpu,
  DatabaseZap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";

type BorderMetrics = {
  width: number;
  height: number;
  radius: number;
};

const pillars = [
  {
    title: "Connected beauty hardware",
    description:
      "Elegant treatment devices become part of one intelligent platform instead of stand-alone moments.",
    icon: Cpu,
  },
  {
    title: "Personalization engine",
    description:
      "AI tunes routines, recovery cadence, and device recommendations around each user's profile.",
    icon: BrainCircuit,
  },
  {
    title: "Operator-ready SaaS",
    description:
      "Studios and partners get a clear software layer for consultations, follow-up, and retention.",
    icon: DatabaseZap,
  },
  {
    title: "Premium trust cues",
    description:
      "A controlled visual system and calm motion language make the product feel credible from the first second.",
    icon: ShieldCheck,
  },
];

export function ProductArchitectureGrid() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
      {pillars.map(({ title, description, icon }) => (
        <ProductArchitectureCard
          key={title}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </div>
  );
}

function ProductArchitectureCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  const gradientId = useId().replace(/:/g, "");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [metrics, setMetrics] = useState<BorderMetrics | null>(null);

  useEffect(() => {
    const element = cardRef.current;

    if (!element) {
      return;
    }

    const updateMetrics = () => {
      const rect = element.getBoundingClientRect();
      const styles = window.getComputedStyle(element);
      const radius = Number.parseFloat(styles.borderTopLeftRadius) || 28.8;

      setMetrics({
        width: rect.width,
        height: rect.height,
        radius,
      });
    };

    updateMetrics();

    const observer = new ResizeObserver(() => {
      updateMetrics();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const strokeWidth = 0.31;

  return (
    <Card ref={cardRef} className="card-glimmer group relative overflow-hidden border-transparent p-6">
      <div
        className="pointer-events-none absolute inset-0 border border-white/10"
        style={{ borderRadius: "inherit" }}
        aria-hidden="true"
      />

      {metrics ? (
        <svg
          className="border-trail pointer-events-none absolute inset-0"
          width={metrics.width}
          height={metrics.height}
          viewBox={`0 0 ${metrics.width} ${metrics.height}`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(244,230,219,0.95)">
                <animate
                  attributeName="stop-color"
                  dur="6s"
                  repeatCount="indefinite"
                  values="rgba(244,230,219,0.95);rgba(216,227,239,0.92);rgba(231,207,194,0.95);rgba(244,230,219,0.95)"
                />
              </stop>
              <stop offset="55%" stopColor="rgba(216,227,239,0.92)">
                <animate
                  attributeName="stop-color"
                  dur="6s"
                  repeatCount="indefinite"
                  values="rgba(216,227,239,0.92);rgba(231,207,194,0.95);rgba(244,230,219,0.95);rgba(216,227,239,0.92)"
                />
              </stop>
              <stop offset="100%" stopColor="rgba(231,207,194,0.95)">
                <animate
                  attributeName="stop-color"
                  dur="6s"
                  repeatCount="indefinite"
                  values="rgba(231,207,194,0.95);rgba(244,230,219,0.95);rgba(216,227,239,0.92);rgba(231,207,194,0.95)"
                />
              </stop>
            </linearGradient>
          </defs>
          <rect
            x={strokeWidth / 2}
            y={strokeWidth / 2}
            width={Math.max(0, metrics.width - strokeWidth)}
            height={Math.max(0, metrics.height - strokeWidth)}
            rx={Math.max(0, metrics.radius - strokeWidth / 2)}
            ry={Math.max(0, metrics.radius - strokeWidth / 2)}
            pathLength={100}
            vectorEffect="non-scaling-stroke"
            shapeRendering="geometricPrecision"
            className="border-trail__path"
            stroke={`url(#${gradientId})`}
          />
        </svg>
      ) : null}

      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/7 text-[#efe1d5]">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-6 font-heading text-xl font-medium text-[#f7efe8]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#e9dfd6]/66">{description}</p>
      </div>
    </Card>
  );
}
