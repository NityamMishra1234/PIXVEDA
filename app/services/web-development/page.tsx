"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    ChevronDown, ArrowRight, ArrowUpRight, Sparkles,
    Layout, Code2, LineChart, Gauge, ShieldCheck, RefreshCcw,
    Search, ShoppingCart, Smartphone, Layers,
} from "lucide-react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

const HERO_STATS = [
    { label: "Avg. Lighthouse score", value: 97, suffix: "" },
    { label: "Avg. load time", value: 0.9, suffix: "s", decimals: 1 },
    { label: "Avg. traffic lift, 90 days", value: 142, suffix: "%" },
];

const PILLARS = [
    {
        icon: <Layout className="w-5 h-5" />,
        title: "Design",
        desc: "Interfaces built around how your customer actually thinks and scrolls — not a template dragged into your brand colors.",
        points: ["Custom UI systems", "Mobile-first layouts", "Brand-true typography"],
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: "Build",
        desc: "Hand-written, production-grade code. Fast by default, not fast after six rounds of 'why is this slow.'",
        points: ["Next.js / React", "Headless CMS", "Clean, documented handoff"],
    },
    {
        icon: <LineChart className="w-5 h-5" />,
        title: "Grow",
        desc: "A site is a starting line. We tune it against real analytics until it's converting, not just existing.",
        points: ["Core Web Vitals", "SEO foundations", "Conversion tracking"],
    },
];

const PROCESS = [
    { step: "01", title: "Audit", desc: "We look at what you have now — traffic, speed, structure — and tell you honestly what's holding it back.", time: "Week 1" },
    { step: "02", title: "Design", desc: "Wireframes, then full visual design in your actual content, reviewed with you at every stage.", time: "Week 1–2" },
    { step: "03", title: "Build", desc: "Production code, staged on a live preview link you can share and test the whole way through.", time: "Week 2–4" },
    { step: "04", title: "Launch & tune", desc: "We ship it, then watch real performance data for the first month and tighten what needs tightening.", time: "Week 4+" },
];

const VALUE_PROPS = [
    { icon: <Gauge className="w-5 h-5" />, title: "Performance-first", label: "Every build is scored against Core Web Vitals before it ships, not after a complaint." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Straight timelines", label: "If it takes six weeks, we say six weeks — not 'soon.'" },
    { icon: <RefreshCcw className="w-5 h-5" />, title: "Built to be changed", label: "Clean handoff and documentation, so editing it later doesn't require calling us first." },
    { icon: <Search className="w-5 h-5" />, title: "Findable by default", label: "Technical SEO and structured data are part of the build, not a bolt-on afterward." },
];

const WORK = [
    { tag: "E-commerce", title: "A storefront that loads before the third-party scripts do", metric: "+68% mobile conversion", accent: "from-[#3a3a3a] to-[#141414]" },
    { tag: "SaaS", title: "A marketing site that finally matches the product's polish", metric: "2.1x demo signups", accent: "from-[#4a4a4a] to-[#1a1a1a]" },
    { tag: "Hospitality", title: "Bookings moved from a phone line to a 40-second flow", metric: "3x online bookings", accent: "from-[#525252] to-[#1c1c1c]" },
];

const FAQS = [
    { q: "How long does a typical build take?", a: "Most sites launch in 3–6 weeks depending on scope. You'll get a firm timeline before any work starts — not an estimate that grows." },
    { q: "Do you work with an existing brand, or design from scratch?", a: "Both. If you already have brand guidelines, we build inside them. If not, we'll shape a visual direction as part of the design phase." },
    { q: "What happens after launch?", a: "You get full ownership of the code and content. Ongoing support and iteration is available if you want it, but nothing is locked to us." },
    { q: "Can you work with our existing CMS or stack?", a: "Usually, yes. We'll tell you plainly if something in your current setup will slow the project down before we commit to it." },
    { q: "What if I only need part of this — just design, or just a rebuild?", a: "That's normal. Design-only and development-only engagements are both common; we'll scope it to what you actually need." },
];

/* ------------------------------------------------------------------ */
/*  Small pieces                                                       */
/* ------------------------------------------------------------------ */

function AnimatedNumber({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const motionVal = useMotionValue(0);
    const spring = useSpring(motionVal, { duration: 1400, bounce: 0 });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (inView) motionVal.set(value);
    }, [inView, value, motionVal]);

    useEffect(() => {
        const unsub = spring.on("change", (v) => setDisplay(v.toFixed(decimals)));
        return () => unsub();
    }, [spring, decimals]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

/** Signature hero element: a live-feeling growth chart standing in for a
 *  before/after of a client's actual site performance. */
function GrowthPanel() {
    const pathRef = useRef<SVGPathElement>(null);
    const inView = useInView(pathRef, { once: true, margin: "-60px" });

    const points = "0,150 40,138 80,142 120,110 160,118 200,80 240,88 280,48 320,54 360,18";

    return (
        <div className="glass-panel rounded-[1.5rem] p-5 sm:p-7 shadow-[0_30px_80px_rgba(0,0,0,0.55)] relative z-10 flex flex-col gap-5">
            <div className="flex items-center justify-between px-1">
                <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-[var(--ink-soft)] uppercase tracking-widest">Organic traffic</span>
                    <span className="text-2xl font-[var(--font-display)] font-semibold text-[var(--foreground)]">+142%</span>
                </div>
                <span className="font-mono text-[10px] text-[var(--brand)] uppercase tracking-widest bg-[var(--brand)]/10 border border-[var(--brand)]/30 px-3 py-1.5 rounded-full">90 days post-launch</span>
            </div>

            <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] overflow-hidden shadow-inner p-4 sm:p-6">
                <svg viewBox="0 0 360 170" className="w-full h-[160px]" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.28" />
                            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {[0, 1, 2, 3].map((i) => (
                        <line key={i} x1="0" x2="360" y1={40 * i + 10} y2={40 * i + 10} stroke="var(--border)" strokeWidth="1" />
                    ))}
                    <motion.polygon
                        points={`0,170 ${points} 360,170`}
                        fill="url(#growthFill)"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                    <motion.polyline
                        ref={pathRef as unknown as React.RefObject<SVGPolylineElement>}
                        points={points}
                        fill="none"
                        stroke="var(--brand)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={inView ? { pathLength: 1 } : {}}
                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.circle
                        cx="360" cy="18" r="4.5" fill="var(--brand)"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1.5, duration: 0.4 }}
                    />
                </svg>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {HERO_STATS.map((s, i) => (
                    <div key={i} className="bg-[var(--surface-strong)] border border-[var(--border)] rounded-xl px-3 py-3 text-center">
                        <div className="font-[var(--font-display)] font-semibold text-lg text-[var(--foreground)]">
                            <AnimatedNumber value={s.value} decimals={s.decimals ?? 0} suffix={s.suffix} />
                        </div>
                        <div className="text-[10px] text-[var(--ink-soft)] font-mono uppercase tracking-wide mt-1 leading-tight">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Stand-in browser-frame thumbnail for a featured project, built entirely
 *  from CSS/SVG so it never depends on external image assets. */
function SiteFrame({ accent }: { accent: string }) {
    return (
        <div className={cn("relative w-full aspect-[4/3] rounded-t-[1.4rem] overflow-hidden bg-gradient-to-br", accent)}>
            <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center gap-1.5 px-3">
                <span className="w-2 h-2 rounded-full bg-white/25" />
                <span className="w-2 h-2 rounded-full bg-white/25" />
                <span className="w-2 h-2 rounded-full bg-white/25" />
            </div>
            <div className="absolute inset-0 top-8 p-5 flex flex-col gap-3">
                <div className="h-3 w-1/3 rounded-full bg-white/20" />
                <div className="flex-1 grid grid-cols-3 gap-2 mt-2">
                    <div className="rounded-lg bg-white/10 col-span-2" />
                    <div className="rounded-lg bg-white/10" />
                </div>
                <div className="h-2.5 w-2/3 rounded-full bg-white/15" />
                <div className="h-2.5 w-1/2 rounded-full bg-white/10" />
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function WebDevelopmentPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const timelineContainerRef = useRef<HTMLDivElement>(null);
    const timelineFillRef = useRef<HTMLDivElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".reveal-element").forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 85%" },
                    }
                );
            });

            if (timelineContainerRef.current && timelineFillRef.current) {
                gsap.fromTo(
                    timelineFillRef.current,
                    { height: "0%" },
                    {
                        height: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: timelineContainerRef.current,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        },
                    }
                );
            }
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="page-shell min-h-screen text-[var(--foreground)] overflow-hidden font-sans">
            <Navbar />

            <div className="absolute top-[-15%] right-[-10%] w-[750px] h-[750px] bg-[var(--accent)]/5 rounded-full blur-[160px] pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-[var(--brand)]/5 rounded-full blur-[160px] pointer-events-none -z-10 mix-blend-screen" />

            <main className="pt-32 pb-24 sm:pt-40 relative z-10 w-full">

                {/* ===== HERO ===== */}
                <section className="container-width section-padding grid lg:grid-cols-12 gap-16 lg:gap-12 items-center min-h-[78vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 flex flex-col items-start z-10"
                    >
                        <div className="eyebrow mb-8">Web design &amp; development</div>

                        <h1 className="text-[3rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-[var(--font-display)] font-semibold tracking-tighter leading-[1.05] mb-8 text-[var(--foreground)]">
                            <span className="block">Websites built</span>
                            <span className="block">
                                to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--accent)]">grow</span>, not
                            </span>
                            <span className="block">just launch.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-lg leading-relaxed font-light mb-10">
                            We design and build websites, then keep tuning them against real traffic and
                            speed data — so the number that matters isn&apos;t how it looks on launch day,
                            it&apos;s what it does ninety days later.
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link
                                href="/contact"
                                className="group relative px-9 py-4.5 bg-[var(--brand)] text-[#05080e] rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(246,182,69,0.3)]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start your project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </Link>
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-1 hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors"
                            >
                                See what we&apos;ve built
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 w-full max-w-lg mx-auto lg:ml-auto relative"
                    >
                        <GrowthPanel />
                    </motion.div>
                </section>

                {/* ===== PILLARS: DESIGN / BUILD / GROW ===== */}
                <section className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="max-w-2xl mb-16">
                        <div className="eyebrow mb-6">How we work</div>
                        <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold mb-6 tracking-tight leading-[1.1]">
                            One team, the whole way through.
                        </h2>
                        <p className="text-[var(--ink-soft)] text-lg font-light leading-relaxed">
                            Design, engineering, and performance aren&apos;t handed off between departments —
                            the same people carry your site from first sketch to live traffic.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {PILLARS.map((p, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                className="group bg-[var(--surface-strong)] border border-[var(--border)] rounded-[1.5rem] p-8 hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--brand)]/30 transition-all duration-300 flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--brand)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand)]/10 transition-all duration-300 shadow-inner">
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-[var(--font-display)] font-semibold mb-3 text-[var(--foreground)] tracking-tight">{p.title}</h3>
                                <p className="text-[var(--ink-soft)] text-sm font-light leading-relaxed mb-6">{p.desc}</p>
                                <ul className="mt-auto space-y-2.5 pt-6 border-t border-[var(--border)]">
                                    {p.points.map((pt, j) => (
                                        <li key={j} className="flex items-center gap-2.5 text-sm text-[var(--foreground)]/85">
                                            <span className="w-1 h-1 rounded-full bg-[var(--brand)]" />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== VALUE PROPS ===== */}
                <section className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="max-w-xl">
                            <div className="eyebrow mb-8">Why it holds up</div>
                            <h2 className="text-4xl sm:text-5xl lg:text-[3.3rem] font-[var(--font-display)] font-semibold mb-8 leading-[1.1] tracking-tight text-[var(--foreground)]">
                                Fast on launch day. Still fast a <span className="text-[var(--brand)]">year</span> later.
                            </h2>
                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed mb-6 font-light">
                                Most agency sites score well in the demo and slow down the moment real
                                content, images, and integrations get added. We build against your actual
                                content from day one, so the site you launch with is the site you keep.
                            </p>
                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed font-light">
                                Every project ships with the performance budget it was designed to.
                            </p>
                        </div>

                        <div className="glass-panel rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
                            <h3 className="text-[var(--foreground)] text-lg font-medium mb-8 relative z-10">What that looks like:</h3>
                            <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                                {VALUE_PROPS.map((item, i) => (
                                    <div key={i} className="bg-[var(--surface-strong)] rounded-[1.5rem] p-7 border border-[var(--border)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)] hover:border-[var(--brand)]/40 group">
                                        <div className="text-[var(--brand)] mb-5 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                                        <div className="font-bold text-[var(--foreground)] text-base mb-2">{item.title}</div>
                                        <div className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROCESS TIMELINE ===== */}
                <section className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="text-center mb-24">
                        <div className="eyebrow mb-6 mx-auto">The build, in order</div>
                        <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold mb-6 tracking-tight">From audit to live.</h2>
                        <p className="text-[var(--ink-soft)] text-lg font-light max-w-2xl mx-auto leading-relaxed">
                            Four stages, in the order they actually happen — no step skipped to hit a date.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto" ref={timelineContainerRef}>
                        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-px bg-[rgba(255,255,255,0.06)]" />
                        <div
                            ref={timelineFillRef}
                            className="absolute left-[31px] md:left-1/2 top-0 w-[2px] -translate-x-px bg-gradient-to-b from-[var(--brand)] to-[var(--accent)] shadow-[0_0_15px_var(--brand)] origin-top"
                        />

                        <div className="space-y-16 relative z-10">
                            {PROCESS.map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-[4px] border-[var(--background)] bg-[var(--surface-strong)] shrink-0 md:order-1 md:group-odd:-ml-10 md:group-even:-mr-10 relative z-10 transition-colors group-hover:border-[var(--brand)]/30">
                                        <span className="font-[var(--font-display)] font-bold text-lg text-[var(--brand)]">{item.step}</span>
                                    </div>
                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] glass-panel p-8 rounded-[1.5rem] hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--brand)]/30 transition-all duration-300">
                                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3 mb-4">
                                            <h3 className="text-xl font-[var(--font-display)] font-semibold tracking-tight text-[var(--foreground)]">{item.title}</h3>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                                                {item.time}
                                            </span>
                                        </div>
                                        <p className="text-[var(--ink-soft)] font-light text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FEATURED WORK ===== */}
                <section id="work" className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
                        <div className="max-w-xl">
                            <div className="eyebrow mb-6">Recent work</div>
                            <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold tracking-tight leading-[1.1]">
                                Built, shipped, and still performing.
                            </h2>
                        </div>
                        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)] border-b border-[var(--border)] pb-1 hover:border-[var(--brand)] hover:text-[var(--brand)] transition-colors whitespace-nowrap">
                            View all work <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {WORK.map((w, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                className="group bg-[var(--surface-strong)] border border-[var(--border)] rounded-[1.5rem] overflow-hidden hover:border-[var(--brand)]/30 transition-all duration-300"
                            >
                                <SiteFrame accent={w.accent} />
                                <div className="p-7">
                                    <span className="font-mono text-[10px] text-[var(--brand)] uppercase tracking-widest">{w.tag}</span>
                                    <h3 className="text-lg font-[var(--font-display)] font-semibold mt-3 mb-4 text-[var(--foreground)] tracking-tight leading-snug">{w.title}</h3>
                                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                        <span className="text-sm font-semibold text-[var(--foreground)]/85">{w.metric}</span>
                                        <ArrowUpRight className="w-4 h-4 text-[var(--ink-soft)] group-hover:text-[var(--brand)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== SERVICE STRIP ===== */}
                <section className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="max-w-2xl mb-16">
                        <div className="eyebrow mb-6">What we build</div>
                        <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold mb-6 tracking-tight leading-[1.1]">
                            Whatever stage you&apos;re at.
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-[1.5rem] overflow-hidden">
                        {[
                            { icon: <Layers className="w-5 h-5" />, title: "New site builds", desc: "Ground-up design and development for brands starting fresh." },
                            { icon: <ShoppingCart className="w-5 h-5" />, title: "E-commerce", desc: "Storefronts built for checkout speed and mobile conversion." },
                            { icon: <RefreshCcw className="w-5 h-5" />, title: "Redesigns", desc: "Rebuilding an existing site without losing its rankings or traffic." },
                            { icon: <Smartphone className="w-5 h-5" />, title: "Web apps", desc: "Product interfaces and dashboards beyond a marketing site." },
                        ].map((s, i) => (
                            <div key={i} className="bg-[var(--background)] p-8 hover:bg-[var(--surface-strong)] transition-colors duration-300">
                                <div className="text-[var(--brand)] mb-5">{s.icon}</div>
                                <div className="font-semibold text-[var(--foreground)] mb-2">{s.title}</div>
                                <div className="text-sm text-[var(--ink-soft)] font-light leading-relaxed">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== TESTIMONIAL ===== */}
                <section className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="max-w-3xl mx-auto text-center glass-panel rounded-[2rem] p-10 sm:p-16">
                        <div className="flex justify-center mb-8">
                            <Sparkles className="w-5 h-5 text-[var(--brand)]" />
                        </div>
                        <p className="text-2xl sm:text-3xl font-[var(--font-display)] font-medium leading-[1.4] tracking-tight text-[var(--foreground)] mb-8">
                            They rebuilt our site around actual page speed, not just how it looked in
                            the pitch. Our organic traffic passed the old site&apos;s peak inside two months.
                        </p>
                        <div className="text-sm text-[var(--ink-soft)] font-mono uppercase tracking-widest">
                            Founder, D2C retail brand
                        </div>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="reveal-element container-width section-padding py-24 sm:py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="eyebrow mb-6 mx-auto">Before you reach out</div>
                            <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold tracking-tight">Questions people usually ask.</h2>
                        </div>

                        <div className="space-y-4">
                            {FAQS.map((faq, i) => {
                                const isOpen = openFaq === i;
                                return (
                                    <div key={i} className="glass-panel hover:bg-[rgba(255,255,255,0.03)] transition-colors rounded-2xl overflow-hidden cursor-pointer">
                                        <button
                                            onClick={() => setOpenFaq(isOpen ? null : i)}
                                            className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                                        >
                                            <span className={cn("font-medium pr-8 transition-colors duration-300 text-base sm:text-lg tracking-tight", isOpen ? "text-[var(--brand)]" : "text-[var(--foreground)]")}>
                                                {faq.q}
                                            </span>
                                            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className={cn("flex-shrink-0 transition-colors w-10 h-10 rounded-full flex items-center justify-center border", isOpen ? "border-[var(--brand)] text-[var(--brand)] bg-[var(--brand)]/10" : "border-[var(--border)] text-[var(--ink-soft)]")}>
                                                <ChevronDown className="w-5 h-5" />
                                            </motion.div>
                                        </button>
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                >
                                                    <div className="px-6 sm:px-8 pb-8 text-[var(--ink-soft)] font-light leading-relaxed text-sm border-t border-[var(--border)] pt-6 mt-2">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ===== CLOSING CTA ===== */}
                <section className="reveal-element container-width section-padding py-32 sm:py-40 text-center border-t border-[rgba(255,255,255,0.03)]">
                    <div className="flex items-center justify-center gap-2 mb-8 text-[var(--brand)]">
                        <Sparkles className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-soft)]">Currently booking new projects</span>
                    </div>
                    <h2 className="text-4xl sm:text-6xl lg:text-[4.6rem] font-[var(--font-display)] font-semibold tracking-tighter leading-[1.05] mb-8">
                        Your site should be<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] drop-shadow-[0_0_30px_rgba(246,182,69,0.2)]">working harder than this.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Tell us what you&apos;re building — a new site, a redesign, or something that
                        doesn&apos;t exist yet. We&apos;ll tell you honestly what it takes.
                    </p>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-transparent text-[var(--background)] font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get in touch <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)] via-[var(--brand)] to-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </section>

            </main>
        </div>
    );
}