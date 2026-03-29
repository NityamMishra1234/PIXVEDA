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
    const orbitContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // 1. Initial Fade In (Left Side)
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

            // 2. The Pop-In for the Cards
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
            className="relative overflow-hidden bg-[#F6F3ED] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px] pb-16 pt-32 sm:pt-40 lg:pt-48 [perspective:1000px]"
        >
            {/* Soft Ambient Glows */}
            <div className="absolute -left-[10%] top-0 h-[500px] w-[500px] rounded-full bg-[#E5B69E]/50 blur-[120px]" />
            <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#C8D5D0]/50 blur-[120px]" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

                    {/* LEFT COLUMN: Typography & CTA */}
                    <div className="relative z-10 flex flex-col justify-center">

                        <div data-hero-fade className="flex w-fit items-center gap-2 rounded-full border border-[rgba(19,17,14,0.1)] bg-white/40 px-4 py-1.5 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-[#D95F27]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#181511]">
                                Enterprise Digital Growth Architecture
                            </span>
                        </div>

                        <h1
                            data-hero-fade
                            className="mt-8 font-[var(--font-display)] text-[clamp(4rem,7.5vw,7.5rem)] font-medium leading-[0.85] tracking-[-0.05em] text-[#181511]"
                        >
                            PIXVEDA<br />
                            builds<br />
                            digital<br />
                            marketing<br />
                            systems<br />
                            that turn<br />
                            attention<br />
                            into<br />
                            revenue.
                        </h1>

                        <p
                            data-hero-fade
                            className="mt-8 max-w-lg text-base leading-relaxed text-[rgba(19,17,14,0.65)] sm:text-lg"
                        >
                            We help ambitious startups and modern brands create category-defining
                            visibility through strategy, performance media, funnel design, content
                            ecosystems, and premium web experiences that convert.
                        </p>

                        <div
                            data-hero-fade
                            className="mt-10 flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#contact"
                                className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-8 text-xs font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 group hover:scale-[1.05] hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)]"
                            >
                                <span className="relative z-10">Book a Growth Audit</span>
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                </span>
                            </a>
                            <a
                                href="#services"
                                className="inline-flex h-14 items-center justify-center rounded-full border border-[rgba(19,17,14,0.15)] bg-white px-8 text-xs font-bold uppercase tracking-[0.15em] text-[#181511] transition-all hover:scale-[1.02] hover:border-[rgba(19,17,14,0.3)] hover:shadow-sm"
                            >
                                Explore Capabilities
                            </a>
                        </div>

                        <div
                            data-hero-fade
                            className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
                        >
                            {metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-[1.5rem] border border-white/40 bg-white/50 p-6 shadow-sm backdrop-blur-md"
                                >
                                    <p className="text-3xl font-medium tracking-[-0.04em] text-[#181511]">
                                        {metric.value}
                                    </p>
                                    <p className="mt-2 text-xs leading-relaxed text-[rgba(19,17,14,0.6)]">
                                        {metric.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: The Interactive 3D Card Collage */}
                    <div ref={orbitContainerRef} className="relative mt-12 hidden min-h-[750px] w-full transform-style-3d lg:block">

                        {/* 1. Base Card (Command Center) - Slowest Parallax */}
                        <div
                            className="orbit-card absolute right-4 top-0 z-10 w-[420px] rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.05)] backdrop-blur-xl"
                            data-depth="0.4"
                        >
                            <div className="flex items-center justify-between border-b border-[rgba(19,17,14,0.06)] pb-6">
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a2f14]">
                                        Command Center
                                    </p>
                                    <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#181511]">
                                        Full-funnel growth engine
                                    </h2>
                                </div>
                                <div className="rounded-full border border-[#D95F27]/30 bg-[#D95F27]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D95F27]">
                                    Live
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-5">
                                {featureCards.map((item) => (
                                    <div key={item.title} className="group cursor-pointer">
                                        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1e6b5c] transition-colors group-hover:text-[#181511]">
                                            {item.title}
                                        </p>
                                        <p className="mt-1.5 text-sm leading-relaxed text-[rgba(19,17,14,0.6)]">
                                            {item.copy}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Black Card (Positioning) - Medium Parallax */}
                        <div
                            className="orbit-card absolute -left-12 top-[30%] z-30 w-[300px] rounded-[1.5rem] border border-white/10 bg-[#181511] p-6 text-[#f8f1e6] shadow-[0_40px_80px_rgba(24,21,17,0.35)]"
                            data-depth="0.9"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D95F27]">
                                Positioning
                            </p>
                            <p className="mt-3 text-xl font-medium leading-snug tracking-[-0.03em]">
                                We make brands feel premium before the first sales call.
                            </p>
                        </div>

                        {/* 3. White Floating Card (Founder Ready) - Fastest Parallax (Floating higher) */}
                        <div
                            className="orbit-card absolute -right-8 top-[15%] z-40 w-[240px] rounded-[1.5rem] border border-white bg-white/90 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] backdrop-blur-md"
                            data-depth="1.4"
                        >
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a2f14]">
                                Founder Ready
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-[rgba(19,17,14,0.65)]">
                                Premium presence, persuasive message, and clear digital execution
                                from the first impression onward.
                            </p>
                        </div>

                        {/* 4. Yellow Card (Signal) - Medium Parallax */}
                        <div
                            className="orbit-card absolute bottom-16 right-12 z-20 w-[260px] rounded-[1.5rem] border border-[#F5B544]/50 bg-[#F5B544] p-6 text-[#181511] shadow-[0_40px_80px_rgba(245,181,68,0.4)]"
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