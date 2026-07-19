"use client";

/**
 * SignalSection.tsx
 * -------------------------------------------------------------------------
 * Drop-in section for Pixveda Media
 * -------------------------------------------------------------------------
 */

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Eye, Layers, Radio, type LucideIcon } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

type Accent = "yellow" | "blue";

interface CardData {
    id: string;
    accent: Accent;
    Icon: LucideIcon;
    title: string;
    lede: string;
    body?: string;
    list?: string[];
    closing?: React.ReactNode;
    bulletStyle?: "dot" | "diamond";
}

const CARDS: CardData[] = [
    {
        id: "mission",
        accent: "yellow",
        Icon: Target,
        title: "Our Mission",
        lede: "Our mission is to empower modern brands through creativity and innovation.",
        body: "We transform ideas into visually powerful stories that connect with people, build trust, and deliver measurable results.",
        closing: (
            <>
                We exist to help brands not just be seen, but{" "}
                <b className="text-[var(--card-accent)] font-semibold">be remembered.</b>
            </>
        ),
    },
    {
        id: "belief",
        accent: "blue",
        Icon: Eye,
        title: "What We Believe",
        lede: "Great branding is more than just visuals — it's about creating perception, emotion, and identity.",
        list: [
            "Great visuals create first impressions.",
            "Storytelling builds emotional connection.",
            "Creativity drives attention.",
            "Strategy turns attention into growth.",
            "AI and innovation shape the future of branding.",
        ],
        closing: (
            <>
                We believe in{" "}
                <b className="text-[var(--card-accent)] font-semibold">
                    honesty, quality, consistency,
                </b>{" "}
                and long-term impact.
            </>
        ),
    },
    {
        id: "approach",
        accent: "yellow",
        Icon: Layers,
        title: "Our Approach",
        lede: "Our approach is simple — understand, create, and grow.",
        body: "We combine creativity, strategy, and technology to build brands that look premium and perform exceptionally.",
        list: [
            "Deep understanding of your brand and audience",
            "Creative storytelling that connects",
            "High-quality production & design",
            "AI-powered marketing & automation",
            "Performance-driven execution",
            "Continuous optimization for growth",
        ],
        bulletStyle: "diamond",
    },
    {
        id: "why",
        accent: "blue",
        Icon: Radio,
        title: "Why We Exist",
        lede: "In a world full of content, we help brands stand out.",
        body: "Most brands struggle to cut through the noise. Pixveda Media was created to help businesses break through it with visuals, stories, and strategies that feel modern, authentic, and impactful.",
        closing: (
            <>
                We don&apos;t just create content — we create{" "}
                <b className="text-[var(--card-accent)] font-semibold">
                    digital experiences people remember.
                </b>
            </>
        ),
    },
];

// Mapped directly to your global CSS variables
const ACCENT_HEX: Record<Accent, string> = {
    yellow: "#f6b645", // --brand
    blue: "#3b82f6",   // --accent
};

function Card({ data }: { data: CardData }) {
    const accentHex = ACCENT_HEX[data.accent];

    return (
        <motion.div
            // INCREASED HEIGHT: Changed h-[480px] to h-[560px] to fit content effortlessly
            className="card-item shrink-0 w-[320px] md:w-[340px] h-[580px] rounded-[20px] border p-7 md:p-8 flex flex-col"
            style={
                {
                    "--card-accent": accentHex,
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                } as React.CSSProperties
            }
            whileHover={{
                y: -4,
                borderColor: accentHex,
                backgroundColor: "var(--surface-strong)",
                transition: { duration: 0.25 },
            }}
        >
            {/* Header / Icon */}
            <div
                className="w-[52px] h-[52px] shrink-0 rounded-full flex items-center justify-center mb-5 border"
                style={{
                    backgroundColor: `${accentHex}24`,
                    borderColor: `${accentHex}73`,
                }}
            >
                <data.Icon size={24} color={accentHex} strokeWidth={1.8} />
            </div>

            <h3 className="font-[var(--font-display,inherit)] text-[14.5px] shrink-0 font-bold tracking-[0.14em] uppercase mb-3 text-white">
                {data.title}
            </h3>
            <div
                className="w-[34px] h-[2px] mb-4 shrink-0"
                style={{ background: accentHex }}
            />

            {/* Scrollable content block with hidden scrollbar */}
            <div className="flex-grow overflow-y-auto no-scrollbar pr-2 -mr-2">
                <p className="text-[14.5px] leading-[1.75] text-[#D7D9DE] mb-3.5">
                    {data.lede}
                </p>

                {data.body && (
                    <p className="text-[14.5px] leading-[1.75] text-[#9AA0AC] mb-3.5">
                        {data.body}
                    </p>
                )}

                {data.list && (
                    <ul className="flex flex-col gap-2.5 my-3.5 mb-4">
                        {data.list.map((item, i) => (
                            <li
                                key={i}
                                className="flex gap-2.5 items-start text-[13.5px] leading-[1.6] text-[#9AA0AC]"
                            >
                                <span
                                    className={
                                        "mt-[6px] w-[6px] h-[6px] shrink-0 " +
                                        (data.bulletStyle === "diamond" ? "rotate-45" : "rounded-full")
                                    }
                                    style={{ background: accentHex }}
                                />
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Closing statement pushed dynamically to the bottom */}
            {data.closing && (
                <div className="pt-3.5 mt-4 shrink-0 border-t border-white/[0.07] text-[14px] text-white/90 font-medium">
                    {data.closing}
                </div>
            )}
        </motion.div>
    );
}

export default function SignalSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const dotRef = useRef<SVGCircleElement>(null);
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, amount: 0.6 });

    // Marquee loop + hover-slow (desktop only)
    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 900px)", () => {
            const track = trackRef.current;
            if (!track) return;

            const cards = Array.from(track.children) as HTMLElement[];
            const half = cards.length / 2;
            const gap = 24;
            let setWidth = 0;
            for (let i = 0; i < half; i++) setWidth += cards[i].offsetWidth + gap;

            const tween = gsap.to(track, {
                x: -setWidth,
                duration: setWidth / 42,
                ease: "none",
                repeat: -1,
            });

            const slow = () => tween.timeScale(0.06);
            const resume = () => tween.timeScale(1);

            track.addEventListener("mouseenter", slow);
            track.addEventListener("mouseleave", resume);
            track.addEventListener("touchstart", slow, { passive: true });
            track.addEventListener("touchend", resume, { passive: true });

            return () => {
                tween.kill();
                gsap.set(track, { x: 0 });
                track.removeEventListener("mouseenter", slow);
                track.removeEventListener("mouseleave", resume);
                track.removeEventListener("touchstart", slow);
                track.removeEventListener("touchend", resume);
            };
        });

        return () => mm.revert();
    }, []);

    // Animated signal dot traveling the SVG path
    useEffect(() => {
        const path = pathRef.current;
        const dot = dotRef.current;
        if (!path || !dot) return;

        const len = path.getTotalLength();

        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2.2,
            ease: "power2.out",
            scrollTrigger: { trigger: path, start: "top 90%", once: true },
        });

        const dotTween = gsap.to(
            { t: 0 },
            {
                t: 1,
                duration: 5.5,
                repeat: -1,
                ease: "sine.inOut",
                onUpdate: function () {
                    const p = path.getPointAtLength(this.targets()[0].t * len);
                    dot.setAttribute("cx", String(p.x));
                    dot.setAttribute("cy", String(p.y));
                },
            }
        );

        return () => {
            dotTween.kill();
        };
    }, []);

    return (
        <section className="relative overflow-hidden py-20 md:py-[90px] bg-[var(--background)]">
            {/* ambient glow utilizing brand and accent hexes */}
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 900px 500px at 15% 0%, rgba(246,182,69,0.08), transparent 60%), radial-gradient(ellipse 900px 500px at 85% 100%, rgba(59,130,246,0.10), transparent 60%)",
                }}
            />
            {/* grain */}
            <div className="grain pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay" />

            {/* header */}
            <div ref={headRef} className="relative z-10 max-w-[900px] mx-auto px-6 text-center mb-[70px]">
                <motion.span
                    initial={{ opacity: 0, y: 16 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 font-semibold text-[12px] tracking-[0.22em] uppercase text-[var(--brand)] mb-5"
                >
                    <span className="w-6 h-px bg-gradient-to-r from-transparent to-[var(--brand)]" />
                    Why We Do What We Do
                    <span className="w-6 h-px bg-gradient-to-l from-transparent to-[var(--brand)]" />
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="font-bold text-[clamp(30px,4.4vw,52px)] leading-[1.12] tracking-tight mb-5 text-white"
                >
                    The{" "}
                    <span className="bg-gradient-to-r from-[var(--brand)] via-[#f8c973] to-[var(--accent)] bg-clip-text text-transparent">
                        signal
                    </span>{" "}
                    behind every brand we build
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-[16.5px] leading-[1.7] text-[#9AA0AC] max-w-[620px] mx-auto"
                >
                    Four ideas, one thread. This is the thinking that shapes every deck,
                    every campaign, and every pixel that leaves Pixveda Media.
                </motion.p>
            </div>

            {/* animated signal line */}
            <div className="relative z-10 hidden md:block h-[34px] max-w-[1100px] mx-auto mb-14 px-6">
                <svg viewBox="0 0 1100 34" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="signalGrad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#f6b645" stopOpacity="0" />
                            <stop offset="15%" stopColor="#f6b645" stopOpacity="0.9" />
                            <stop offset="50%" stopColor="#e3a02f" />
                            <stop offset="85%" stopColor="#3B82F6" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path
                        ref={pathRef}
                        fill="none"
                        stroke="url(#signalGrad)"
                        strokeWidth={1.4}
                        strokeLinecap="round"
                        d="M0,17 C 40,4 80,30 120,17 C 160,4 200,30 240,17 C 280,4 320,30 360,17
               C 400,4 440,30 480,17 C 520,4 560,30 600,17 C 640,4 680,30 720,17
               C 760,4 800,30 840,17 C 880,4 920,30 960,17 C 1000,4 1040,30 1080,17
               C 1090,15 1100,17 1100,17"
                    />
                    <circle ref={dotRef} r={4} fill="#f6b645" style={{ filter: "drop-shadow(0 0 6px rgba(246,182,69,0.9))" }} />
                </svg>
            </div>

            {/* card track */}
            <div className="relative z-10 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)] md:[mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
                <div
                    ref={trackRef}
                    className="flex flex-col md:flex-row gap-[18px] md:gap-6 w-full md:w-max px-5 md:pl-6"
                >
                    {[...CARDS, ...CARDS].map((c, i) => (
                        <motion.div
                            key={`${c.id}-${i}`}
                            className={i >= CARDS.length ? "hidden md:block" : ""}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: (i % CARDS.length) * 0.08 }}
                        >
                            <Card data={c} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <p className="hidden md:block relative z-10 text-center mt-11 text-[12px] tracking-[0.08em] uppercase text-[#585D68]">
                Hover a card to pause the drift
            </p>

            <style jsx>{`
        .grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        
        /* completely hide the scrollbar, keeping the functionality if ever needed */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        @media (prefers-reduced-motion: reduce) {
          .card-item {
            transition: none !important;
          }
        }
      `}</style>
        </section>
    );
}