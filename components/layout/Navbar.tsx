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
        <nav className="section-padding fixed inset-x-0 top-0 z-50 pt-4">
            <div
                className={clsx(
                    "container-width mx-auto rounded-full border px-4 py-3 transition-all duration-300 sm:px-6",
                    scrolled
                        ? "border-[rgba(19,17,14,0.08)] bg-[rgba(255,248,235,0.84)] shadow-[0_18px_60px_rgba(74,40,16,0.12)] backdrop-blur-xl"
                        : "border-transparent bg-transparent"
                )}
            >
                <div className="flex items-center justify-between gap-4">
                    {/* Logo Section */}
                    <button
                        type="button"
                        onClick={() => handleNavigate("home")}
                        className="text-left focus:outline-none"
                        aria-label="Go to PIXVEDA homepage"
                    >
                        <span className="block font-[var(--font-display)] text-xl font-semibold tracking-[0.22em] text-[#181511]">
                            PIXVEDA
                        </span>
                        <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[rgba(19,17,14,0.56)] sm:block">
                            Digital Marketing Enterprise
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-2 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleNavigate(item.id)}
                                className="rounded-full px-4 py-2 text-sm font-semibold text-[rgba(19,17,14,0.7)] transition-all duration-300 hover:bg-white/80 hover:text-[#181511]"
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <button
                            type="button"
                            onClick={() => handleNavigate("contact")}
                            className="inline-flex items-center justify-center rounded-full bg-[#181511] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-[#f8f1e6] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg hover:shadow-black/20"
                        >
                            Let&apos;s Talk
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((value) => !value)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(19,17,14,0.1)] bg-white/70 transition-colors hover:bg-white md:hidden"
                        aria-label="Toggle navigation menu"

                        aria-controls={mobileMenuId}
                    >
                        {/* Animated Hamburger Icon */}
                        <div className="relative flex h-[10px] w-5 flex-col justify-between overflow-hidden">
                            <span
                                className={clsx(
                                    "absolute left-0 h-[2px] w-full bg-[#181511] transition-all duration-300",
                                    menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                                )}
                            />
                            <span
                                className={clsx(
                                    "absolute left-0 h-[2px] w-full bg-[#181511] transition-all duration-300",
                                    menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                                )}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                <div
                    id={mobileMenuId}
                    className={clsx(
                        "grid overflow-hidden transition-all duration-300 ease-in-out md:hidden",
                        menuOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                >
                    <div className="overflow-hidden rounded-[1.5rem] border border-[rgba(19,17,14,0.08)] bg-[rgba(255,248,235,0.94)] p-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => handleNavigate(item.id)}
                                className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-semibold text-[#181511] transition hover:bg-white"
                            >
                                <span>{item.name}</span>
                                <span className="text-[rgba(19,17,14,0.38)]">/</span>
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => handleNavigate("contact")}
                            className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-[#181511] px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#f8f1e6] transition-transform hover:scale-[0.98]"
                        >
                            Book a Call
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}