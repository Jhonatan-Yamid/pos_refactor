"use client";
import Link from "next/link";

const VARIANTS = {
  primary: "bg-primary hover:bg-primary-hover text-white",
  ghost: "text-content hover:text-content-muted",
};

export default function NavButton({ href, variant = "primary", children }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-control font-medium px-4 py-2 transition ${VARIANTS[variant]}`}
    >
      {children}
    </Link>
  );
}
