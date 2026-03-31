"use client";

const actions = [
  {
    label: "Email",
    href: "mailto:nityam1111@gmail.com",
    accent: "text-[var(--brand)]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 7.5 12 13l8-5.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="3" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919905805143",
    accent: "text-[#60d669]",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path
          d="M12 20a8 8 0 1 0-4.15-1.16L4 20l1.28-3.67A8 8 0 0 0 12 20Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.55 9.8c.2-.45.41-.46.6-.47h.5c.15 0 .4.06.61.52.2.46.68 1.6.74 1.72.06.12.1.27.02.44-.08.17-.12.27-.24.41-.12.14-.24.31-.34.42-.12.13-.24.27-.1.53.14.26.64 1.05 1.36 1.7.93.83 1.7 1.1 1.95 1.22.24.12.39.1.53-.06.14-.16.59-.68.75-.91.16-.23.32-.19.54-.12.23.08 1.44.68 1.69.8.25.13.41.19.47.3.06.1.06.61-.14 1.2-.2.59-1.16 1.15-1.6 1.2-.41.04-.93.07-1.5-.12-.34-.12-.77-.25-1.34-.49-2.36-.99-3.89-3.42-4-3.58-.1-.15-.95-1.26-.95-2.4 0-1.13.6-1.7.8-1.94Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function FloatingContactDock() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.label === "WhatsApp" ? "_blank" : undefined}
          rel={action.label === "WhatsApp" ? "noreferrer" : undefined}
          aria-label={action.label}
          className="group flex items-center justify-end"
        >
          <span className="pointer-events-none mr-3 hidden rounded-full border border-[rgba(246,182,69,0.14)] bg-[rgba(4,8,14,0.92)] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--foreground)] opacity-0 shadow-[0_14px_34px_rgba(2,6,23,0.36)] transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 sm:block">
            {action.label}
          </span>
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(246,182,69,0.18)] bg-[rgba(4,8,14,0.96)] shadow-[0_18px_38px_rgba(2,6,23,0.42)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[rgba(246,182,69,0.28)]">
            <span className={`h-6 w-6 ${action.accent}`}>{action.icon}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
