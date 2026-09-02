"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    ChevronDown, Activity, Target, Zap, LayoutTemplate,
    PlaySquare, ArrowRight, BarChart2, Search, ArrowUpRight
} from "lucide-react";

// Utility for clean tailwind class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function PerformancePage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const processContainerRef = useRef<HTMLDivElement>(null);

    // --- State ---
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // --- Framer Motion Counters ---
    const spendCount = useMotionValue(0);
    const roundedSpend = useTransform(spendCount, (v) => `₹${Math.round(v).toLocaleString()}`);

    const cplCount = useMotionValue(0);
    const roundedCpl = useTransform(cplCount, (v) => `₹${Math.round(v)}`);

    const leadsCount = useMotionValue(0);
    const roundedLeads = useTransform(leadsCount, Math.round);

    const roasCount = useMotionValue(0);
    const roundedRoas = useTransform(roasCount, (v) => `${v.toFixed(1)}x`);

    useEffect(() => {
        const d = 2.5;
        const e = [0.16, 1, 0.3, 1] as const;
        animate<number>(spendCount, 480000, { duration: d, ease: e });
        animate<number>(cplCount, 310, { duration: d, ease: e });
        animate<number>(leadsCount, 1548, { duration: d, ease: e });
        animate<number>(roasCount, 4.6, { duration: d, ease: e });
    }, [spendCount, cplCount, leadsCount, roasCount]);

    // --- GSAP Scroll Animations ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cinematic fade-up for all major sections
            gsap.utils.toArray<HTMLElement>('.reveal-element').forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 60, scale: 0.98 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 1.4,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    }
                );
            });

            // Animated Timeline Line drawing down as you scroll
            if (processContainerRef.current && timelineRef.current) {
                gsap.fromTo(timelineRef.current,
                    { height: "0%" },
                    {
                        height: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: processContainerRef.current,
                            start: "top center",
                            end: "bottom center",
                            scrub: true,
                        }
                    }
                );
            }
        }, pageRef);
        return () => ctx.revert();
    }, []);

    // --- Data Arrays ---
    const faqs = [
        { q: "What's the difference between performance marketing and SEO?", a: "SEO builds organic, long-term search visibility. Performance marketing is paid — you're buying placement now, in exchange for immediate, trackable results. We often recommend running both together." },
        { q: "What monthly ad budget do I need to start?", a: "It depends on your industry and cost per lead. We'll give you a realistic starting number on your free audit call, based on your specific market — not a generic minimum." },
        { q: "How soon will I see results?", a: "Search campaigns can show early signals within the first 1–2 weeks. We treat the first month as a testing and learning phase before scaling budget on what's proven to work." },
        { q: "Do you build the landing pages too?", a: "Yes. Traffic without a landing page built to convert is wasted spend, so landing page design and CRO are part of our performance marketing engagements." },
    ];

    return (
        <div ref={pageRef} className="bg-[var(--background)] min-h-screen text-[var(--foreground)] overflow-x-hiddenselection:bg-[var(--brand)]/30 font-sans">
            <Navbar />

            {/* --- CINEMATIC AMBIENT GLOWS --- */}
            <div className="fixed top-[-10%] left-[-10%] h-[800px] bg-[var(--brand)]/10 rounded-full blur-[180px] pointer-events-none -z-10 mix-blend-screen" />
            <div className="fixed bottom-[-10%] right-[-10%] h-[800px] bg-[var(--accent)]/10 rounded-full blur-[180px] pointer-events-none -z-10 mix-blend-screen" />

            <main className="container-width pt-32 pb-24 sm:pt-44 relative z-10">

                {/* ===== HERO ===== */}
                <section className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-center min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 flex flex-col items-start"
                    >
                        {/* Section Pill */}
                        <div className="flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--brand)] shadow-[0_0_12px_var(--brand)]"></span>
                            </span>
                            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[var(--brand)]">Performance Marketing</span>
                        </div>

                        {/* Massive Typography */}
                        <h1 className="text-[3.5rem] sm:text-7xl lg:text-[5.5rem] font-[var(--font-display)] font-bold tracking-tighter leading-[1.05] mb-8">
                            <span className="block text-white">Every rupee</span>
                            <span className="block text-white mb-2">tracked.</span>
                            <span className="block text-white">Every campaign built to </span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">hit a number.</span>

                        </h1>

                        <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-lg leading-relaxed font-light mb-12">
                            We run Google Ads, Meta Ads, and full-funnel paid campaigns the way a CFO would — tied to leads, cost per acquisition, and ROAS, not impressions.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link href="/contact" className="group relative px-9 py-5 bg-[var(--brand)] text-[#05080e] rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(246,182,69,0.4)]">
                                <span className="relative z-10 flex items-center gap-3">
                                    Get a Free Audit <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Floating Dashboard Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotateY: -10, rotateX: 5 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
                        transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 w-full max-w-xl ml-auto perspective-1000 relative"
                    >
                        {/* Glow behind widget */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-[var(--brand)]/20 to-[var(--accent)]/20 rounded-[3rem] blur-3xl opacity-40 animate-pulse" />

                        <div className="glass-panel rounded-[2rem] p-8 sm:p-10 shadow-2xl relative z-10 bg-[rgba(10,15,24,0.95)]">
                            <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-5">
                                <span className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[var(--ink-soft)]">
                                    <Activity className="w-4 h-4 text-[var(--accent)]" /> Live Campaign Snapshot
                                </span>
                                <span className="font-mono text-[10px] uppercase text-[var(--ink-soft)] bg-white/5 px-4 py-1.5 rounded-full border border-white/5">Last 30 Days</span>
                            </div>

                            <div className="grid grid-cols-2 gap-5 mb-5">
                                {/* Ad Spend */}
                                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                                    <div className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest mb-3">Ad Spend</div>
                                    <motion.div className="font-[var(--font-display)] text-3xl font-bold mb-2 text-white">{roundedSpend}</motion.div>
                                    <div className="text-[11px] text-[var(--ink-soft)]">tracked to the ₹</div>
                                </div>

                                {/* Cost / Lead */}
                                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                                    <div className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest mb-3">Cost / Lead</div>
                                    <motion.div className="font-[var(--font-display)] text-3xl font-bold mb-2 text-[var(--accent)]">{roundedCpl}</motion.div>
                                    <div className="text-[11px] text-[var(--ink-soft)]">↓ optimized weekly</div>
                                </div>

                                {/* Qualified Leads */}
                                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                                    <div className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest mb-3">Qualified Leads</div>
                                    <motion.div className="font-[var(--font-display)] text-3xl font-bold mb-2 text-white">{roundedLeads}</motion.div>
                                    <div className="text-[11px] text-[var(--ink-soft)]">not just clicks</div>
                                </div>

                                {/* ROAS */}
                                <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 hover:bg-[rgba(255,255,255,0.04)] transition-colors">
                                    <div className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest mb-3">ROAS</div>
                                    <motion.div className="font-[var(--font-display)] text-3xl font-bold mb-2 text-[var(--brand)]">{roundedRoas}</motion.div>
                                    <div className="text-[11px] text-[var(--ink-soft)]">the number that matters</div>
                                </div>
                            </div>

                            {/* Animated SVG Sparkline */}
                            <div className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6">
                                <div className="text-[10px] text-[var(--ink-soft)] uppercase tracking-widest mb-5">Conversion Trend</div>
                                <div className="h-16 w-full relative">
                                    <svg viewBox="0 0 300 70" preserveAspectRatio="none" className="w-full h-full">
                                        <defs>
                                            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.3" />
                                                <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                                            d="M0,60 L40,55 L80,50 L120,45 L160,35 L200,28 L240,18 L300,8 L300,70 L0,70 Z"
                                            fill="url(#chartGrad)"
                                        />
                                        <motion.path
                                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
                                            d="M0,60 L40,55 L80,50 L120,45 L160,35 L200,28 L240,18 L300,8"
                                            fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                            className="drop-shadow-[0_0_8px_rgba(246,182,69,0.5)]"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ===== PHILOSOPHY / THE APPROACH ===== */}
                <section className="reveal-element  max-w-[1400px] mx-auto py-40 mt-20">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="max-w-xl">
                            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></span> The Approach
                            </div>
                            <h2 className="text-[2.75rem] sm:text-6xl font-[var(--font-display)] font-bold mb-10 leading-[1.1] tracking-tight text-white">
                                Marketing that's judged the same way you judge <span className="text-[var(--brand)] drop-shadow-[0_0_20px_rgba(246,182,69,0.3)]">revenue.</span>
                            </h2>
                            <p className="text-[var(--ink-soft)] text-lg leading-[1.8] mb-8 font-light">
                                Performance marketing is advertising where every rupee is measured against a business outcome — a lead, a sale, a signup — instead of reach or likes.
                            </p>
                            <p className="text-[var(--ink-soft)] text-lg leading-[1.8] font-light">
                                At PIXVEDA, we set up conversion tracking before we spend a single rupee on ads. That means every campaign reports back in the language your business actually runs on.
                            </p>
                        </div>

                        {/* Dark Bento Layout */}
                        <div className="glass-panel rounded-[2rem] p-10 sm:p-12 relative overflow-hidden bg-[rgba(10,15,24,0.6)]">
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[var(--accent)]/10 blur-[100px] rounded-full pointer-events-none" />
                            <h3 className="text-white text-lg font-medium mb-10 relative z-10">What that looks like in practice:</h3>
                            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                                {[
                                    { num: "CPL", label: "Cost per lead, tracked per platform and per campaign", color: "var(--accent)" },
                                    { num: "ROAS", label: "Return on ad spend, reviewed weekly, not quarterly", color: "var(--brand)" },
                                    { num: "CAC", label: "Customer acquisition cost, mapped to your actual sales cycle", color: "var(--accent)" },
                                    { num: "LTV", label: "Lifetime value, optimized for the right customer", color: "var(--brand)" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-[rgba(255,255,255,0.02)] rounded-3xl p-8 border border-[rgba(255,255,255,0.04)] transition-all duration-500 hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-1 hover:border-[rgba(255,255,255,0.1)]">
                                        <div className="font-[var(--font-display)] font-bold text-3xl mb-4 tracking-tight" style={{ color: stat.color }}>{stat.num}</div>
                                        <div className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CHANNELS GRID ===== */}
                <section id="channels" className="reveal-element max-w-[1400px] mx-auto py-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

                    <div className="max-w-2xl mb-20 pt-10">
                        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--brand)] mb-6 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] shadow-[0_0_10px_var(--brand)]"></span> Where we run your budget
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-[var(--font-display)] font-bold mb-8 tracking-tight leading-[1.1]">Channels built to work together, not compete.</h2>
                        <p className="text-[var(--ink-soft)] text-lg font-light leading-relaxed">We don't pick a platform and force your business into it. We map your funnel first, then choose the channel mix that fits how your customers actually buy.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Search className="w-6 h-6" />, title: "Google Ads", desc: "Search, PMax, and Shopping campaigns built around intent — catching people ready to buy." },
                            { icon: <Target className="w-6 h-6" />, title: "Meta Ads", desc: "FB & IG campaigns for awareness and direct response — creative-led, tested in small batches." },
                            { icon: <BarChart2 className="w-6 h-6" />, title: "Programmatic", desc: "Display and native placements across premium networks for top-of-funnel reach." },
                            { icon: <Zap className="w-6 h-6" />, title: "Retargeting", desc: "Sequenced ads for people who've already shown interest — usually the highest ROAS channel." },
                            { icon: <PlaySquare className="w-6 h-6" />, title: "YouTube Ads", desc: "In-stream placements that borrow from your brand videos to build trust before the click." },
                            { icon: <LayoutTemplate className="w-6 h-6" />, title: "Landing Pages", desc: "The click is only half the job. We build and test landing pages so traffic actually converts." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className="group glass-panel rounded-3xl p-10 hover:bg-[rgba(255,255,255,0.03)] hover:border-[rgba(246,182,69,0.2)] transition-all duration-500 cursor-default"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.06)] text-[var(--accent)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:text-[var(--brand)] transition-all duration-500 shadow-inner">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl font-[var(--font-display)] font-bold mb-4 text-white tracking-tight">{card.title}</h3>
                                <p className="text-[var(--ink-soft)] font-light leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== PROCESS TIMELINE ===== */}
                <section id="process" className="reveal-element  max-w-4xl mx-auto py-40">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl sm:text-6xl font-[var(--font-display)] font-bold mb-8 tracking-tight">From audit to scale.</h2>
                        <p className="text-[var(--ink-soft)] text-lg font-light max-w-2xl mx-auto leading-relaxed">We don't launch ads on day one. Tracking and strategy come first, so every rupee spent afterward has somewhere to report to.</p>
                    </div>

                    <div className="relative" ref={processContainerRef}>
                        {/* Background track line */}
                        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-px bg-[rgba(255,255,255,0.05)]" />

                        {/* Animated fill line */}
                        <div
                            ref={timelineRef}
                            className="absolute left-[39px] md:left-1/2 top-0 w-[2px] -translate-x-px bg-gradient-to-b from-[var(--brand)] to-[var(--accent)] shadow-[0_0_15px_var(--brand)] origin-top"
                        />

                        <div className="space-y-12 md:space-y-24 relative z-10">
                            {[
                                { step: "01", title: "Audit & Tracking", desc: "We review existing accounts, install conversion tracking, and set up dashboards before touching the budget.", time: "Week 1" },
                                { step: "02", title: "Funnel Strategy", desc: "We map how your customers actually move from first click to paying customer, and choose the channel mix.", time: "Week 1-2" },
                                { step: "03", title: "Creative & Pages", desc: "Ad creative, copy, and landing pages built specifically for the offer — not recycled brand assets.", time: "Week 2-3" },
                                { step: "04", title: "Launch & Test", desc: "Campaigns go live in small test batches first, so we know what's working before scaling spend.", time: "Week 3" },
                                { step: "05", title: "Optimize & Scale", desc: "Weekly reviews of CPL, ROAS, and CAC — budget shifts toward what's working, and we cut what isn't.", time: "Ongoing" }
                            ].map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                                    {/* Timeline Node */}
                                    <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-[6px] border-[var(--background)] bg-[rgba(15,21,32,1)] shrink-0 md:order-1 md:group-odd:-ml-12 md:group-even:-mr-12 relative z-10 transition-colors group-hover:border-[var(--brand)]/30">
                                        <span className="font-mono font-bold text-xl text-[var(--brand)]">{item.step}</span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] glass-panel p-8 rounded-[2rem] hover:bg-[rgba(255,255,255,0.03)] hover:border-[rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-2">
                                        <div className="flex justify-between items-start mb-5">
                                            <h3 className="text-2xl font-[var(--font-display)] font-bold tracking-tight text-white">{item.title}</h3>
                                            <span className="font-mono text-[10px] uppercase text-[var(--ink-soft)] bg-[rgba(255,255,255,0.05)] px-3 py-1 rounded-full whitespace-nowrap">{item.time}</span>
                                        </div>
                                        <p className="text-[var(--ink-soft)] font-light text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section id="faq" className="reveal-element  max-w-3xl mx-auto py-32 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

                    <div className="text-center mb-20 pt-10">
                        <h2 className="text-4xl sm:text-5xl font-[var(--font-display)] font-bold tracking-tight">Before you get on the call.</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div key={i} className="glass-panel hover:bg-[rgba(255,255,255,0.02)] transition-colors rounded-3xl overflow-hidden cursor-pointer">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full flex items-center justify-between p-8 text-left focus:outline-none"
                                    >
                                        <span className={cn("font-medium pr-8 transition-colors duration-300 text-lg tracking-tight", isOpen ? "text-[var(--brand)]" : "text-white")}>
                                            {faq.q}
                                        </span>
                                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className={cn("flex-shrink-0 transition-colors w-10 h-10 rounded-full flex items-center justify-center border", isOpen ? "border-[var(--brand)] text-[var(--brand)] bg-[rgba(246,182,69,0.1)]" : "border-white/10 text-[var(--ink-soft)]")}>
                                            <ChevronDown className="w-5 h-5" />
                                        </motion.div>
                                    </button>
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="px-8 pb-8 text-[var(--ink-soft)] font-light leading-relaxed text-base border-t border-white/5 pt-6 mt-2">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* ===== MASSIVE CTA REDIRECT ===== */}
                <section className="reveal-element max-w-5xl mx-auto py-40 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none -z-10" />

                    <h2 className="text-[3rem] sm:text-[6rem] font-[var(--font-display)] font-bold tracking-tighter leading-[1.05] mb-8 pt-10">
                        Ready to scale<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]">your revenue?</span>
                    </h2>
                    <p className="text-xl sm:text-2xl text-[var(--ink-soft)] font-light max-w-2xl mx-auto mb-16">
                        Stop guessing what your ads should cost. Let's look at the numbers.
                    </p>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full bg-transparent text-[#05070A] font-bold text-base uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3 ">
                            Start Your Project <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-black" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-[var(--brand)] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </section>

            </main>
        </div>
    );
}