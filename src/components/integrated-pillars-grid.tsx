"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { homeContent, type IconContent } from "@/content/site";

type BorderMetrics = {
  width: number;
  height: number;
  radius: number;
};

export function IntegratedPillarsGrid() {
  return (
    <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
      {homeContent.integratedPillars.pillars.map(({ title, description, icon }, index) => (
        <ProductArchitectureCard
          key={title}
          index={index + 1}
          title={title}
          description={description}
          icon={icon}
        />
      ))}
    </div>
  );
}

function ProductArchitectureCard({
  index,
  title,
  description,
  icon: Icon,
}: {
  index: number;
  title: string;
  description: string;
  icon: IconContent["icon"];
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
    <Card
      ref={cardRef}
      className="card-glimmer group relative overflow-hidden border-transparent p-6"
    >
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
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c9a35d]/35 bg-[#c9a35d]/6 text-[#f0d7ae]">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-heading text-5xl leading-none text-[#6d5835]/34">
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-6 font-heading text-xl font-medium text-[#f7efe8]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#e9dfd6]/66">{description}</p>
      </div>
    </Card>
  );
}
