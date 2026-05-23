import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,244,236,0.075),rgba(255,244,236,0.022))] shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl",
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";
