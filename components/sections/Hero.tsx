"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PhoneCall, ArrowUpRight } from "lucide-react";

const proofColumns = [
    {
        title: "Growth Channels",
        copy: "SEO, Google Ads, social, content, web, and brand systems — planned around one commercial goal, not disconnected campaigns.",
    },
    {
        title: "Proof-Led Delivery",
        copy: "240% average pipeline lift, 32+ brands launched, 4.9/5 client satisfaction — one senior team, shared targets, no handoffs.",
    },
];

export default function Hero() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // If the visitor has a slow connection, don't force the video to load.
        const connection = (navigator as any).connection;
        if (connection && (connection.saveData || /2g/.test(connection.effectiveType))) {
            videoRef.current?.removeAttribute("src");
        }

        if (prefersReducedMotion) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(
                "[data-hero-badge]",
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.7 }
            )
                .fromTo(
                    "[data-hero-heading] > *",
                    { opacity: 0, y: 28 },
                    { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 },
                    "-=0.35"
                )
                .fromTo(
                    "[data-hero-line]",
                    { scaleX: 0, opacity: 0 },
                    { scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: "left center" },
                    "-=0.5"
                )
                .fromTo(
                    "[data-hero-copy]",
                    { opacity: 0, y: 18 },
                    { opacity: 1, y: 0, duration: 0.7 },
                    "-=0.5"
                )
                .fromTo(
                    "[data-hero-cta]",
                    { opacity: 0, y: 18 },
                    { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
                    "-=0.45"
                )
                .fromTo(
                    "[data-hero-proof]",
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
                    "-=0.3"
                );

            gsap.to("[data-cta-glow]", {
                boxShadow:
                    "0 0 0 1px rgba(59,130,246,0.28), 0 16px 46px rgba(37,99,235,0.35)",
                yoyo: true,
                repeat: -1,
                duration: 2.2,
                ease: "sine.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            // min-h-screen alone jumps on mobile as the browser chrome
            // shows/hides; min-h-[100dvh] locks to the actual visible
            // viewport so the hero height stays put while scrolling.
            className="relative isolate flex min-h-screen min-h-[100dvh] items-center sm:px-30  overflow-hidden bg-black pb-14 pt-28 sm:pt-32"
        >
            {/* Video background */}
            <div className="absolute inset-0 -z-20">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/hero-poster.jpg"
                >
                    <source src="/video/pixveda_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/15" />
            </div>

            <div className="container container-width relative z-10 mx-auto lg:mt-15 mt-5">
                <div className="flex flex-col items-start text-left [text-shadow:0_2px_18px_rgba(0,0,0,0.45)]">
                    <div
                        data-hero-badge
                        className="flex w-fit items-center gap-2 rounded-full border border-[rgba(246,182,69,0.28)] bg-black/30 px-4 py-1.5 backdrop-blur-md"
                    >
                        <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                            Pixveda Media — Digital Creative Agency
                        </span>
                    </div>

                    {/* Bigger and wider so it fills the freed-up horizontal
                        space now that the stat cards are gone. */}
                    <h1
                        data-hero-heading
                        className="mt-5 max-w-7xl font-[var(--font-display)] text-[clamp(2.6rem,7.4vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-white"
                    >
                        <span className="block">We Build <span className="text-[var(--brand)]">Brand</span> </span>
                        <span className="block ">for the Digital ERA</span>
                    </h1>

                    <div
                        data-hero-line
                        className="mt-5 h-px w-28 bg-gradient-to-r from-[var(--brand)] via-[var(--accent)] to-transparent"
                    />

                    <p
                        data-hero-copy
                        className="mt-5 max-w-3xl text-lg font-medium leading-8 text-white sm:text-2xl"
                    >
                        We create digital presence that leaves impact.
                    </p>

                    {/* Wider + taller: bigger type, more line-height, more
                        max-width so the description reads as a fuller block
                        instead of a thin single line. */}
                    <p
                        data-hero-copy
                        className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9"
                    >
                        Cinematic storytelling, sharp strategy, and AI-powered marketing —
                        built to capture attention and drive real, measurable growth.
                    </p>

                    <div
                        data-hero-cta
                        className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
                    >
                        <a
                            href="#contact"
                            data-cta-glow
                            className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--accent-deep)] via-[var(--accent)] to-[#60a5fa] px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-transform duration-300 sm:h-14 sm:w-auto sm:px-8 sm:text-xs sm:hover:scale-[1.04]"
                        >
                            <PhoneCall className="relative z-10 h-4 w-4" strokeWidth={2.4} />
                            <span className="relative z-10">Book an Enterprise Audit</span>
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                            </span>
                        </a>
                        <a
                            href="#services"
                            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-black/25 px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md transition-colors duration-300 hover:border-white/45 hover:bg-black/40 sm:h-14 sm:w-auto sm:px-8 sm:text-xs"
                        >
                            <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
                            View Growth Systems
                        </a>
                    </div>

                    <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60 sm:text-[11px]">
                        Founder-led strategy. Premium execution. Blue-chip presentation.
                    </p>

                    {/* Transparent proof panel */}
                    <div className="mt-8 grid w-full grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md sm:grid-cols-2 sm:gap-10 sm:p-8">
                        {proofColumns.map((col) => (
                            <div key={col.title} data-hero-proof>
                                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                                    {col.title}
                                </p>
                                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                                    {col.copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}