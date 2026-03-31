"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const metrics = [
    { value: "240%", label: "average pipeline lift in 2 quarters" },
    { value: "32+", label: "brands launched into growth mode" },
    { value: "4.9/5", label: "client satisfaction from retained partners" },
];

const featureCards = [
    {
        title: "Growth Strategy",
        copy: "Positioning, offer refinement, funnel planning, and channel prioritization.",
    },
    {
        title: "Creative Performance",
        copy: "Ads, landing pages, and content systems designed to earn trust quickly.",
    },
    {
        title: "Revenue Systems",
        copy: "CRO, CRM alignment, analytics, and automation that help the pipeline compound.",
    },
];

export default function Hero() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                "[data-hero-fade]",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.1,
                }
            );

            gsap.fromTo(
                "[data-hero-line]",
                { scaleX: 0, transformOrigin: "left center", opacity: 0 },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1,
                    delay: 0.45,
                    ease: "power3.out",
                }
            );

            gsap.to("[data-cta-glow]", {
                boxShadow: "0 0 0 1px rgba(59,130,246,0.28), 0 16px 46px rgba(37,99,235,0.35)",
                yoyo: true,
                repeat: -1,
                duration: 1.8,
                ease: "sine.inOut",
            });

            gsap.fromTo(
                ".orbit-card",
                { y: 80, scale: 0.85, opacity: 0, rotationZ: () => Math.random() * 10 - 5 },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    rotationZ: 0,
                    duration: 1.4,
                    ease: "expo.out",
                    stagger: 0.15,
                    delay: 0.2,
                    onComplete: () => {
                        // 3. Continuous "Breathing" Float after they pop in
                        gsap.to(".orbit-card", {
                            y: "+=12",
                            duration: () => 2 + Math.random() * 2,
                            yoyo: true,
                            repeat: -1,
                            ease: "sine.inOut",
                            stagger: {
                                amount: 1.5,
                                from: "random"
                            }
                        });
                    }
                }
            );

            // 4. MOUSE PARALLAX EFFECT (The "Wow" Factor)
            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;

                // Calculate mouse position relative to center (-1 to 1)
                const moveX = (clientX - centerX) / centerX;
                const moveY = (clientY - centerY) / centerY;

                // Move each card based on its data-depth attribute
                gsap.utils.toArray<HTMLElement>(".orbit-card").forEach((card) => {
                    const depth = parseFloat(card.dataset.depth || "1");

                    gsap.to(card, {
                        x: moveX * 40 * depth,
                        y: moveY * 40 * depth,
                        rotationY: moveX * 5 * depth,
                        rotationX: -moveY * 5 * depth,
                        duration: 1.5,
                        ease: "power2.out",
                    });
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative overflow-hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] pb-16 pt-32 sm:pt-40 lg:pt-48 [perspective:1000px]"
        >
            <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-[#f6b645]/18 blur-[120px]" />
            <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#2563eb]/18 blur-[140px]" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

                    <div className="relative z-10 flex flex-col justify-center">
                        <div data-hero-fade className="flex w-fit items-center gap-2 rounded-full border border-[rgba(246,182,69,0.18)] bg-white/5 px-4 py-1.5 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--foreground)]">
                                Enterprise Digital Growth Architecture
                            </span>
                        </div>

                        <h1
                            data-hero-fade
                            className="mt-6 max-w-4xl font-[var(--font-display)] text-[clamp(2.6rem,7vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.045em] text-[var(--foreground)] sm:mt-8"
                        >
                            Enterprise digital marketing
                            <span className="block text-[var(--brand)]">built to make premium brands</span>
                            <span className="block">impossible to ignore.</span>
                        </h1>

                        <div
                            data-hero-line
                            className="mt-6 h-px w-28 bg-gradient-to-r from-[var(--brand)] via-[var(--accent)] to-transparent sm:mt-7"
                        />

                        <p
                            data-hero-fade
                            className="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-lg sm:leading-relaxed"
                        >
                            PIXVEDA combines positioning, paid media, conversion-focused websites,
                            and growth systems into one enterprise-grade engine, so your brand looks
                            sharper, sells faster, and scales with authority.
                        </p>

                        <div
                            data-hero-fade
                            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
                        >
                            <a
                                href="#contact"
                                data-cta-glow
                                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-[var(--accent-deep)] via-[var(--accent)] to-[#60a5fa] px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 sm:h-14 sm:w-auto sm:px-8 sm:text-xs sm:hover:scale-[1.05]"
                            >
                                <span className="relative z-10">Book an Enterprise Audit</span>
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                </span>
                            </a>
                            <a
                                href="#services"
                                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-[rgba(246,182,69,0.18)] bg-white/5 px-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--foreground)] transition-all hover:border-[rgba(246,182,69,0.34)] hover:bg-white/7 hover:shadow-sm sm:h-14 sm:w-auto sm:px-8 sm:text-xs sm:hover:scale-[1.02]"
                            >
                                View Growth Systems
                            </a>
                        </div>

                        <p
                            data-hero-fade
                            className="mt-4 text-xs uppercase tracking-[0.2em] text-white/48 sm:text-[11px]"
                        >
                            Founder-led strategy. Premium execution. Blue-chip presentation.
                        </p>

                        <div
                            data-hero-fade
                            className="mt-10 grid grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-6"
                        >
                            {metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-[1.35rem] border border-[rgba(246,182,69,0.12)] bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_20px_50px_rgba(2,6,23,0.18)] backdrop-blur-md sm:rounded-[1.5rem] sm:p-6"
                                >
                                    <p className="text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)]">
                                        {metric.value}
                                    </p>
                                    <p className="mt-2 text-xs leading-relaxed text-white/62">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 grid gap-3 lg:hidden">
                            {featureCards.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-[1.35rem] border border-[rgba(246,182,69,0.14)] bg-[rgba(255,255,255,0.05)] p-4 shadow-sm backdrop-blur-md"
                                >
                                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
                                        {item.title}
                                    </p>
                                    <p className="mt-2 text-sm leading-6 text-white/68">
                                        {item.copy}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-12 hidden min-h-[750px] w-full transform-style-3d lg:block">
                        <div
                            className="orbit-card absolute right-4 top-0 z-10 w-[420px] rounded-[2rem] border border-[rgba(246,182,69,0.16)] bg-[rgba(11,17,26,0.82)] p-8 shadow-[0_30px_60px_rgba(2,6,23,0.32)] backdrop-blur-xl"
                            data-depth="0.4"
                        >
                            <div className="flex items-center justify-between border-b border-white/8 pb-6">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                                        Command Center
                                    </p>
                                    <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">
                                        Full-funnel growth engine
                                    </h2>
                                </div>
                                <div className="rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#93c5fd]">
                                    Live
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-5">
                                {featureCards.map((item) => (
                                    <div key={item.title} className="group cursor-pointer">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#93c5fd] transition-colors group-hover:text-[var(--brand)]">
                                            {item.title}
                                        </p>
                                        <p className="mt-1.5 text-sm leading-relaxed text-white/62">
                                            {item.copy}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="orbit-card absolute -left-12 top-[30%] z-30 w-[300px] rounded-[1.5rem] border border-[rgba(246,182,69,0.16)] bg-[#070b12] p-6 text-[#f8f1e6] shadow-[0_40px_80px_rgba(2,6,23,0.42)]"
                            data-depth="0.9"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                                Positioning
                            </p>
                            <p className="mt-3 text-xl font-medium leading-snug tracking-[-0.03em]">
                                We make brands feel premium before the first sales call.
                            </p>
                        </div>

                        <div
                            className="orbit-card absolute -right-8 top-[15%] z-40 w-[240px] rounded-[1.5rem] border border-[rgba(59,130,246,0.2)] bg-[rgba(23,35,56,0.88)] p-6 shadow-[0_30px_60px_rgba(2,6,23,0.28)] backdrop-blur-md"
                            data-depth="1.4"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                                Founder Ready
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">
                                Premium presence, persuasive message, and clear digital execution
                                from the first impression onward.
                            </p>
                        </div>

                        <div
                            className="orbit-card absolute bottom-16 right-12 z-20 w-[260px] rounded-[1.5rem] border border-[#F5B544]/50 bg-[#F5B544] p-6 text-[#070b12] shadow-[0_40px_80px_rgba(245,181,68,0.32)]"
                            data-depth="0.7"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                                Signal
                            </p>
                            <p className="mt-3 text-sm leading-relaxed font-medium">
                                The site, the strategy, and the campaigns all tell one clear story:
                                PIXVEDA grows serious companies.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
