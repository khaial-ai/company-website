"use client";

import { ReactNode } from "react";

type PillProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
  variant?: "default" | "brand";
};

const DefaultSparkIcon = () => (
  <span aria-hidden className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3l2.1 4.26L19 8.27l-3.4 3.32L16.2 16 12 13.77 7.8 16l.6-4.41L5 8.27l4.9-1L12 3z" fill="currentColor" opacity="0.9" />
    </svg>
  </span>
);

const Pill = ({ label, icon, className = "", ariaLabel, variant = "default" }: PillProps) => {
  const base = "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-white/90";
  const styles =
    variant === "brand"
      ? "border border-white/10 bg-gradient-to-r from-[var(--k-primary-from)]/40 to-[var(--k-primary-to)]/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
      : "border border-[var(--k-border)]/60 bg-white/5 backdrop-blur-sm";
  return (
    <div
      className={[base, styles, className].join(" ")}
      role="note"
      aria-label={ariaLabel || label}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.currentTarget.click();
        }
      }}
    >
      {icon ?? <DefaultSparkIcon />}
      <span>{label}</span>
    </div>
  );
};

export default Pill;



