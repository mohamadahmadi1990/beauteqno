import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg" | "sm";
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-[linear-gradient(135deg,#f4e6db_0%,#e7d7cb_54%,#d8e3ef_100%)] text-[#1b1418] shadow-[0_18px_50px_rgba(223,203,192,0.2)] hover:-translate-y-0.5",
  outline:
    "border border-white/12 bg-white/6 text-[#f3ece5] hover:bg-white/10",
  ghost: "text-[#eee5de]/72 hover:bg-white/8 hover:text-[#f3ece5]",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-sm",
  sm: "h-9 px-4 text-xs",
};

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium transition duration-300 disabled:pointer-events-none disabled:opacity-60",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
}
