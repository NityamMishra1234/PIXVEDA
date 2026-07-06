import Link from "next/link";
import { services } from "@/lib/services";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
];

const connectLinks = [
    {
        label: "pixveda1@gmail.com",
        href: "mailto:pixveda1@gmail.com",
        icon: (
            <path
                d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z M3.5 6.5 12 13l8.5-6.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        ),
    },
    {
        label: "+91 91151 61704",
        href: "tel:+919115161704",
        icon: (
            <path
                d="M6.6 3h2.2l1.2 4.4-2 1.6a11.6 11.6 0 0 0 5 5l1.6-2 4.4 1.2v2.2c0 1-.86 1.78-1.85 1.62A16.6 16.6 0 0 1 4.98 4.85C4.82 3.86 5.6 3 6.6 3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
        ),
    },
    {
        label: "WhatsApp",
        href: "https://wa.me/919115161704",
        icon: (
            <path
                d="M12 3a9 9 0 0 0-7.79 13.5L3 21l4.65-1.19A9 9 0 1 0 12 3Z M8.3 8.7c.2-.6.4-.6.7-.6h.5c.2 0 .4 0 .6.5s.7 1.7.75 1.8c.05.1.08.25 0 .4s-.13.24-.26.37l-.36.42c-.13.13-.26.28-.11.53.15.26.66 1.1 1.42 1.78.98.87 1.8 1.15 2.06 1.28s.4.1.55-.06.63-.72.8-.98c.16-.25.33-.2.55-.12s1.42.67 1.66.8c.24.12.4.18.46.28.06.1.06.6-.14 1.18s-1.16 1.1-1.62 1.16c-.42.06-.94.08-1.52-.1a13 13 0 0 1-1.72-.63 10 10 0 0 1-3.9-3.45c-.6-.82-1-1.83-1.12-2.62-.12-.8.05-1.24.2-1.5Z"
                fill="currentColor"
            />
        ),
    },
];

export default function Footer() {
    return (
        <footer className="pixveda-footer relative mt-10 border-t border-white/10 bg-[rgba(3,7,13,0.95)] px-4 pb-6 pt-0 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[-8%] top-0 h-56 w-56 rounded-full bg-[var(--brand)]/15 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] h-64 w-64 rounded-full bg-[#3b82f6]/12 blur-[130px]" />
            </div>

            {/* Signature element: live growth-signal line */}
            <div className="container-width relative mx-auto max-w-7xl pt-6">
                <div className="flex items-center gap-3 pb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-white/40">
                    <span className="relative flex h-2 w-2">
                        <span className="pulse-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand)]" />
                    </span>
                    Growth signal — still compounding
                    <svg
                        className="ml-1 h-5 flex-1 opacity-70"
                        viewBox="0 0 600 24"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M0 18 L60 16 L100 19 L140 8 L180 14 L220 6 L260 12 L300 4 L340 10 L380 3 L420 9 L460 2 L500 7 L540 1 L600 5"
                            fill="none"
                            stroke="url(#signal-gradient)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <circle className="signal-dot" r="3.5" fill="var(--brand)">
                            <animateMotion
                                dur="7s"
                                repeatCount="indefinite"
                                path="M0 18 L60 16 L100 19 L140 8 L180 14 L220 6 L260 12 L300 4 L340 10 L380 3 L420 9 L460 2 L500 7 L540 1 L600 5"
                            />
                        </circle>
                        <defs>
                            <linearGradient id="signal-gradient" x1="0" x2="600" y1="0" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                                <stop offset="55%" stopColor="var(--brand)" stopOpacity="0.9" />
                                <stop offset="100%" stopColor="var(--brand)" stopOpacity="1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="container-width relative mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_30px_90px_rgba(2,6,23,0.28)] backdrop-blur-xl sm:p-8 lg:p-10">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/50 to-transparent"
                    />

                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.6fr_0.6fr_0.65fr]">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-white/75 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                                PIXVEDA
                            </div>

                            <h3 className="mt-5 max-w-xl font-[var(--font-display)] text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
                                Premium growth systems for brands that want to look inevitable.
                            </h3>

                            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                                We build strategy, media, web experiences, and content engines that help ambitious companies move faster, convert better, and scale with clarity.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="mailto:nityam1111@gmail.com"
                                    className="group inline-flex items-center gap-2 rounded-full border border-[rgba(246,182,69,0.3)] bg-[rgba(246,182,69,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--foreground)] shadow-[0_0_0_0_rgba(246,182,69,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(246,182,69,0.5)] hover:bg-[rgba(246,182,69,0.2)] hover:shadow-[0_10px_30px_-8px_rgba(246,182,69,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/60"
                                >
                                    Start a project
                                    <svg
                                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 8h10M9 4l4 4-4 4"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="tel:+919905805143"
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(59,130,246,0.35)] hover:bg-[rgba(59,130,246,0.1)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]/60"
                                >
                                    +91 99058 05143
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--brand)]">
                                Quick Links
                            </p>
                            <ul className="mt-4 space-y-3 text-sm text-white/70">
                                {quickLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="transition-colors duration-300 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:text-[var(--foreground)]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#93c5fd]">
                                Core Services
                            </p>
                            <ul className="mt-4 space-y-3 text-sm text-white/70">
                                {services.slice(0, 4).map((service) => (
                                    <li key={service.slug}>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="transition-colors duration-300 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:text-[var(--foreground)]"
                                        >
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                                Connect
                            </p>
                            <ul className="mt-4 space-y-3">
                                {connectLinks.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                                            className="group inline-flex items-center gap-2.5 text-sm text-white/70 transition-colors duration-300 hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:text-[var(--foreground)]"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-300 group-hover:border-[var(--brand)]/40 group-hover:bg-[rgba(246,182,69,0.12)] group-hover:text-[var(--brand)]">
                                                <svg viewBox="0 0 24 24" className="h-4 w-4">
                                                    {link.icon}
                                                </svg>
                                            </span>
                                            <span className="truncate">{link.label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 PIXVEDA. Crafted for ambitious brands.</p>

                        <a
                            href="#top"
                            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white sm:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                        >
                            Back to top
                            <svg
                                className="h-3 w-3 -translate-y-px transition-transform duration-300 group-hover:-translate-y-1"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M8 12V4M4 7l4-4 4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pixveda-pulse-ping {
                    75%, 100% {
                        transform: scale(2.2);
                        opacity: 0;
                    }
                }
                .pulse-ping {
                    animation: pixveda-pulse-ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                @media (prefers-reduced-motion: reduce) {
                    .pulse-ping {
                        animation: none;
                    }
                    .pixveda-footer animateMotion {
                        display: none;
                    }
                }
            `}</style>
        </footer>
    );
}