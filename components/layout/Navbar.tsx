"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { services } from "@/lib/services";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Contact", id: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuId = "mobile-menu";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openServices = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    closeTimerRef.current = window.setTimeout(() => setServicesOpen(false), 120);
  };

  const handleNavigate = (target: string) => {
    setMenuOpen(false);
    setServicesOpen(false);

    // Route navigation
    if (target.startsWith("/")) {
      router.push(target);
      return;
    }

    // Single-page section navigation
    if (pathname === "/") {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    router.push(`/#${target}`);
  };

  return (
    <nav className="section-padding fixed inset-x-0 top-0 z-50 pt-4 sm:pt-6">
      <div
        className={clsx(
          "container-width mx-auto border px-5 py-3 transition-all duration-300 sm:px-6 sm:py-3.5",
          menuOpen ? "rounded-[2rem]" : "rounded-full",
          scrolled || menuOpen || servicesOpen
            ? "border-transparent bg-transparent shadow-[0_22px_70px_rgba(2,6,23,0.58)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <div className="flex items-center justify-between gap-0">
          <button
            type="button"
            onClick={() => handleNavigate("home")}
            className="focus:outline-none"
            aria-label="Go to PIXVEDA homepage"
          >
            <div className="flex items-center">
              {/* Logo */}
              <img
                src="/Pixveda .png"
                alt="PIXVEDA"
                className="h-10 w-44 shrink-0"
              />

            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.slice(0, 1).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="group relative px-4 py-2 text-sm font-semibold text-white/76 transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-4 h-[2px] w-[calc(100%-2rem)] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[var(--accent-deep)] via-[var(--accent)] to-[#60a5fa] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}

            <div
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((value) => !value)}
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white/76 transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <span>Services</span>
                <svg
                  className={clsx(
                    "h-4 w-4 transition-transform duration-300",
                    servicesOpen ? "rotate-180 text-[var(--accent)]" : "rotate-0 text-white/55"
                  )}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute bottom-0 left-4 h-[2px] w-[calc(100%-2rem)] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[var(--accent-deep)] via-[var(--accent)] to-[#60a5fa] transition-transform duration-300 group-hover:scale-x-100" />
              </button>

              <div
                className={clsx(
                  "absolute left-1/2 top-full mt-5 w-[720px] -translate-x-1/2 transition-all duration-250",
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0"
                )}
              >
                <div className="overflow-hidden rounded-[2rem] border border-[rgba(246,182,69,0.14)] bg-[rgba(3,6,11,0.99)] p-3 shadow-[0_34px_90px_rgba(2,6,23,0.62)]">
                  <div className="rounded-[1.5rem] border border-[rgba(255,255,255,0.05)] bg-[rgba(7,10,15,1)] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                        Service Stack
                      </p>
                      <button
                        type="button"
                        onClick={() => handleNavigate("services")}
                        className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand)] transition-colors duration-300 hover:text-[var(--foreground)]"
                      >
                        <span>View All Services</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {"->"}
                        </span>
                      </button>
                    </div>

                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group rounded-[1.1rem] border border-[rgba(255,255,255,0.05)] bg-[rgba(10,14,20,1)] px-4 py-4 transition-all duration-300 hover:border-[rgba(246,182,69,0.18)] hover:bg-[rgba(14,19,27,1)]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#93c5fd]">
                                {service.shortLabel}
                              </p>
                              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                                {service.title}
                              </p>
                              <p className="mt-1 text-xs leading-5 text-white/58">
                                {service.points.join(" • ")}
                              </p>
                            </div>
                            <span className="text-[var(--brand)] transition-transform duration-300 group-hover:translate-x-1">
                              {"->"}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="group relative px-4 py-2 text-sm font-semibold text-white/76 transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-4 h-[2px] w-[calc(100%-2rem)] origin-left scale-x-0 rounded-full bg-gradient-to-r from-[var(--accent-deep)] via-[var(--accent)] to-[#60a5fa] transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => handleNavigate("/contact")}
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
          <div className="min-h-0 overflow-hidden rounded-[1.25rem] border border-[rgba(246,182,69,0.14)] bg-[rgba(8,12,18,0.96)] p-2 shadow-sm">
            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/6"
            >
              <span>Home</span>
              <span className="text-[var(--brand)]">/</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("services")}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/6"
            >
              <span>View All Services</span>
              <span className="text-[var(--brand)]">/</span>
            </button>
            <div className="mt-1 rounded-[1rem] border border-[rgba(255,255,255,0.05)] bg-[rgba(10,14,20,1)] p-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-white/72 transition hover:bg-white/6 hover:text-[var(--foreground)]"
                >
                  <span>{service.title}</span>
                  <span className="text-[var(--brand)]">{"->"}</span>
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleNavigate("about")}
              className="mt-1 flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/6"
            >
              <span>About</span>
              <span className="text-[var(--brand)]">/</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("/contact")}
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/6"
            >
              <span>Contact</span>
              <span className="text-[var(--brand)]">/</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("/contact")}
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
