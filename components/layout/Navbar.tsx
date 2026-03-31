"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const mobileMenuId = "mobile-menu";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24);

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigate = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    return (
        <nav className="section-padding fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
            <div
                className={clsx(
                    "container-width mx-auto border px-5 py-3 transition-all duration-300 sm:px-6 sm:py-3.5",
                    menuOpen ? "rounded-[2rem]" : "rounded-full",
                    scrolled || menuOpen
                        ? "border-[rgba(246,182,69,0.16)] bg-[rgba(7,11,18,0.82)] shadow-[0_22px_70px_rgba(2,6,23,0.48)] backdrop-blur-xl"
                        : "border-transparent bg-transparent"
                )}
            >
                <div className="flex items-center justify-between gap-4">
                    <button
                        type="button"
                        onClick={() => handleNavigate("home")}
                        className="flex flex-col text-left focus:outline-none"
                        aria-label="Go to PIXVEDA homepage"
                    >
                        <span className="block font-[var(--font-display)] text-[1.15rem] font-semibold leading-none tracking-[0.22em] text-[var(--foreground)] sm:text-xl">
                            PIXVEDA
                        </span>
                        <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-white/55 sm:block sm:pt-1">
                            Digital Marketing Enterprise
                        </span>
                    </button>

                    <div className="hidden items-center gap-2 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleNavigate(item.id)}
                                className="rounded-full px-4 py-2 text-sm font-semibold text-white/72 transition-all duration-300 hover:bg-white/8 hover:text-[var(--brand)]"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <button
                            type="button"
                            onClick={() => handleNavigate("contact")}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--accent-deep)] to-[var(--accent)] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(59,130,246,0.35)]"
                        >
                            Let&apos;s Talk
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((value) => !value)}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(246,182,69,0.16)] bg-[rgba(255,255,255,0.05)] shadow-sm transition-transform active:scale-95 md:hidden"
                        aria-label="Toggle navigation menu"
                        aria-controls={mobileMenuId}
                    >
                        <div className="relative flex h-[12px] w-[16px] flex-col justify-between overflow-hidden">
                            <span
                                className={clsx(
                                    "absolute left-0 h-[1.5px] w-full bg-[var(--foreground)] transition-all duration-300",
                                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                                )}
                            />
                            <span
                                className={clsx(
                                    "absolute left-0 h-[1.5px] w-full bg-[var(--foreground)] transition-all duration-300",
                                    menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                                )}
                            />
                        </div>
                    </button>
                </div>

                <div
                    id={mobileMenuId}
                    className={clsx(
                        "grid overflow-hidden transition-all duration-300 ease-in-out md:hidden",
                        menuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                >
                    <div className="min-h-0 overflow-hidden rounded-[1.25rem] border border-[rgba(246,182,69,0.14)] bg-[rgba(12,17,26,0.92)] p-2 shadow-sm">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleNavigate(item.id)}
                                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/6"
                            >
                                <span>{item.name}</span>
                                <span className="text-[var(--brand)]">/</span>
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => handleNavigate("contact")}
                            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[var(--accent-deep)] to-[var(--accent)] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-transform active:scale-[0.98]"
                        >
                            Book a Call
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
