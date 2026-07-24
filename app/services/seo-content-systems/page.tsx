"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import {
    Search,
    TrendingUp,
    Zap,
    Link2,
    MapPin,
    FileText,
    ArrowRight,
    ChevronDown,
    Sparkles,
    BarChart3,
    ShieldCheck,
    CheckCircle2,
    Globe2,
    Layers,
    Activity,
    Award,
    Clock,
} from "lucide-react";

// --- FAQ DATA ---
const faqs = [
    {
        q: "How long does SEO take to show results?",
        a: "Most clients see tangible keyword momentum within 3 to 6 months. SEO builds compounding authority—unlike paid ads that stop working the second you turn off your budget.",
    },
    {
        q: "What's the difference between SEO and Google Ads?",
        a: "Google Ads gives you immediate position-for-pay visibility, costing money per click. SEO earns you organic top rankings that generate continuous, high-intent traffic without per-click fees.",
    },
    {
        q: "Do you guarantee a #1 ranking?",
        a: "No honest agency can guarantee rank #1 due to Google's dynamic algorithm updates. However, we guarantee an engineered, transparent execution strategy with measurable month-over-month growth.",
    },
    {
        q: "Will you write content for my website too?",
        a: "Yes! High-intent content creation—including keyword-targeted landing pages and comprehensive articles—is fully integrated into our organic content engine.",
    },
    {
        q: "Is SEO useful for a small local business?",
        a: "Local SEO is often the highest ROI channel for local businesses. Dominating local searches and Google Maps pack listings drives immediate, high-intent customers right to your doorstep.",
    },
];

// --- MARQUEE ITEMS ---
const marqueeItems = [
    "Keyword & Competitor Intelligence",
    "Technical Architecture Fixes",
    "High-Authority Backlinks",
    "Conversion-First On-Page SEO",
    "Transparent Monthly Analytics",
    "Google Business Profile Domination",
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

// --- ANIMATION VARIANTS ---
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

export default function SeoPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [activeKeywordIndex, setActiveKeywordIndex] = useState(0);

    const keywordsList = [
        "best software agency near me",
        "top rated tech consultant",
        "custom web app development",
    ];

    // Dynamic search query auto-cycle for hero widget
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveKeywordIndex((prev) => (prev + 1) % keywordsList.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [keywordsList.length]);

    return (
        <div className="bg-[#030712] text-slate-100 min-h-screen selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden">
            <Navbar />

            <main className="relative pt-32 pb-24 lg:pt-44 lg:pb-32">
                {/* Ambient Light Mesh Background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
                    <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
                    <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px]" />
                </div>

                {/* ================= HERO SECTION ================= */}
                <section className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        {/* Hero Left Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="lg:col-span-7 flex flex-col items-start"
                        >
                            <motion.div variants={fadeInUp}>
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-8">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                                    Premium Organic Search Engineering
                                </span>
                            </motion.div>

                            <motion.h1
                                variants={fadeInUp}
                                className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-white mb-6"
                            >
                                Dominate Google when your{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600">
                                    customers search.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light"
                            >
                                Data-driven keyword strategy, deep technical architecture, and authority building engineered to turn high-intent organic searches into sustainable revenue.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
                            >
                                <Link
                                    href="#overview"
                                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 transition-all duration-300 hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <span>Explore Capabilities</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                                <a
                                    href="#process"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-slate-300 border border-slate-800 bg-slate-900/40 backdrop-blur-md transition-all duration-300 hover:bg-slate-800/60 hover:border-slate-700 hover:text-white"
                                >
                                    Our Methodology
                                </a>
                            </motion.div>

                            {/* Tag Pills */}
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                                {[
                                    "Keyword Intelligence",
                                    "Technical SEO",
                                    "Backlink Engine",
                                    "Local Maps Pack",
                                    "Content Strategy",
                                ].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[11px] font-mono text-slate-400 bg-slate-900/80 border border-slate-800/80 px-3.5 py-1.5 rounded-lg backdrop-blur-sm"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Hero Right: Rank Tracker Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
                            className="lg:col-span-5 relative w-full max-w-lg mx-auto"
                        >
                            {/* Card Ambient Aura */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-indigo-500/10 to-amber-500/20 rounded-[2.5rem] blur-2xl opacity-60 pointer-events-none" />

                            <div className="relative bg-slate-900/90 border border-slate-800 rounded-[2rem] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
                                {/* Widget Header */}
                                <div className="flex justify-between items-center pb-6 border-b border-slate-800/80 mb-6">
                                    <div className="flex items-center gap-2.5 font-mono text-xs font-semibold tracking-wider text-slate-200">
                                        <span className="relative flex h-2.5 w-2.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                                        </span>
                                        ORGANIC RANKING ENGINE
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700/50 px-2.5 py-1 rounded-full">
                                        LIVE METRICS
                                    </span>
                                </div>

                                {/* Simulated Search Bar */}
                                <div className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-4 mb-6 relative">
                                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
                                        <Search className="w-4 h-4 text-amber-400 shrink-0" />
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={activeKeywordIndex}
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                className="text-slate-200 truncate"
                                            >
                                                "{keywordsList[activeKeywordIndex]}"
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>

                                    <div className="flex items-center justify-between bg-amber-500/10 border border-amber-500/20 px-3.5 py-2.5 rounded-lg">
                                        <span className="text-xs font-mono text-slate-400 line-through">Pos #48</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                                        <span className="text-sm font-mono font-bold text-amber-400 flex items-center gap-1.5">
                                            Pos #1 <span className="text-emerald-400 text-xs">↑ +47</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Dynamic Visibility Bars */}
                                <div className="space-y-3.5 mb-6">
                                    {[
                                        { label: "Technical Health", pct: "98%", color: "from-amber-500 to-amber-300" },
                                        { label: "Content Optimization", pct: "94%", color: "from-indigo-500 to-indigo-300" },
                                        { label: "Domain Authority", pct: "88%", color: "from-emerald-500 to-emerald-300" },
                                    ].map((bar, i) => (
                                        <div key={i} className="space-y-1.5">
                                            <div className="flex justify-between text-[11px] font-mono text-slate-400">
                                                <span>{bar.label}</span>
                                                <span className="text-slate-200 font-semibold">{bar.pct}</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: bar.pct }}
                                                    transition={{ duration: 1.2, delay: 0.4 + i * 0.15 }}
                                                    className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Quick Stats Grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl">
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                                            Est. Monthly Traffic
                                        </span>
                                        <span className="text-2xl font-bold font-mono text-slate-100">28,400+</span>
                                        <span className="text-[10px] text-emerald-400 block mt-1">↑ +310% YOY</span>
                                    </div>
                                    <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl">
                                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                                            Top 3 Keywords
                                        </span>
                                        <span className="text-2xl font-bold font-mono text-slate-100">142</span>
                                        <span className="text-[10px] text-amber-400 block mt-1">High Intent</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ================= INFINITE MARQUEE BAND ================= */}
                <section className="my-28 relative py-8 bg-slate-900/30 overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

                    <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                            className="flex items-center gap-12 whitespace-nowrap"
                        >
                            {[...marqueeItems, ...marqueeItems].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-slate-400">
                                    <span className="w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ================= BENTO GRID: WHY ORGANIC MATTERS ================= */}
                <section id="overview" className="max-w-7xl mx-auto px-6 lg:px-12 my-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                        className="max-w-3xl mb-16"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 block">
                            Core Pillars
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
                            Where true organic rankings are built.
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: FileText,
                                title: "Intent Content",
                                desc: "High-value landing pages & articles crafted specifically to convert high-intent searches.",
                                accent: "from-amber-500/20 to-transparent",
                            },
                            {
                                icon: Zap,
                                title: "Technical Speed",
                                desc: "Sub-second load speeds, clean schema, and flawless indexing so Google reads every page.",
                                accent: "from-indigo-500/20 to-transparent",
                            },
                            {
                                icon: Link2,
                                title: "Authority Backlinks",
                                desc: "Genuine, editorially-earned links from industry publications—zero spam tactics.",
                                accent: "from-emerald-500/20 to-transparent",
                            },
                            {
                                icon: MapPin,
                                title: "Local Ecosystem",
                                desc: "Dominating local map packs and regional searches for high-converting proximity traffic.",
                                accent: "from-rose-500/20 to-transparent",
                            },
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative bg-slate-900/50 border border-slate-800/80 rounded-3xl p-8 hover:bg-slate-900/80 hover:border-slate-700/80 transition-all duration-500"
                            >
                                <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${pillar.accent} rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <pillar.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed font-light">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ================= WHAT'S INCLUDED (GRID) ================= */}
                <section className="max-w-7xl mx-auto px-6 lg:px-12 my-36">
                    <div className="bg-slate-900/30 border border-slate-800/80 rounded-[3rem] p-8 sm:p-14 backdrop-blur-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div>
                                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 block">
                                    Full Spectrum Execution
                                </span>
                                <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                                    Everything included in our SEO suite.
                                </h2>
                            </div>
                            <a
                                href="#process"
                                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
                            >
                                See timeline <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Search,
                                    title: "Keyword Intelligence",
                                    desc: "Uncovering buyer intent keywords your competitors missed, backed by deep volume and difficulty data.",
                                },
                                {
                                    icon: Layers,
                                    title: "On-Page Optimization",
                                    desc: "Restructuring H-tags, title tags, metadata, and internal linking structures for maximum relevance.",
                                },
                                {
                                    icon: Zap,
                                    title: "Technical SEO Audit",
                                    desc: "Resolving crawl errors, canonicalization issues, speed bottlenecks, and mobile rendering bugs.",
                                },
                                {
                                    icon: Link2,
                                    title: "Digital PR & Backlinks",
                                    desc: "Securing authoritative contextual links to skyrocket your domain trust in competitive niches.",
                                },
                                {
                                    icon: MapPin,
                                    title: "Local Search Optimization",
                                    desc: "Complete Google Business profile management, geo-targeted citations, and review signals.",
                                },
                                {
                                    icon: Activity,
                                    title: "Analytics & Plain Reports",
                                    desc: "Real-time ranking dashboards and monthly plain-English summaries focusing on ROI and leads.",
                                },
                            ].map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-slate-950/60 border border-slate-800/60 rounded-2xl p-7 hover:border-amber-500/30 transition-all duration-300"
                                >
                                    <service.icon className="w-6 h-6 text-amber-400 mb-5" />
                                    <h3 className="text-lg font-semibold text-slate-100 mb-2">{service.title}</h3>
                                    <p className="text-xs text-slate-400 leading-relaxed font-light">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= PROCESS TIMELINE ================= */}
                <section id="process" className="max-w-5xl mx-auto px-6 lg:px-12 my-36">
                    <div className="text-center mb-20">
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 block">
                            Roadmap To Success
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
                            From initial audit to Page 1.
                        </h2>
                    </div>

                    <div className="relative pl-6 sm:pl-10 space-y-12">
                        {/* Ambient Vertical Line */}
                        <div className="absolute left-2.5 sm:left-4 top-3 bottom-3 w-px bg-gradient-to-b from-amber-400 via-slate-800 to-transparent" />

                        {[
                            {
                                step: "01",
                                title: "Deep Technical & Content Audit",
                                time: "Week 1",
                                desc: "We scrutinize site architecture, speed, existing backlink profile, and content gaps to establish our foundational benchmark.",
                            },
                            {
                                step: "02",
                                title: "Keyword & Revenue Roadmap",
                                time: "Weeks 1–2",
                                desc: "We pinpoint high-converting keywords with realistic ranking difficulty, mapping them directly to dedicated landing pages.",
                            },
                            {
                                step: "03",
                                title: "On-Page & Technical Remediation",
                                time: "Weeks 2–4",
                                desc: "We overhaul site structure, schema markup, and content hierarchy so search engine crawlers rank your pages instantly.",
                            },
                            {
                                step: "04",
                                title: "Authority Building & Content Engine",
                                time: "Month 2 Onward",
                                desc: "Continuous publishing of optimized content alongside proactive digital PR to continually build top-tier backlink authority.",
                            },
                        ].map((st, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
                            >
                                {/* Node Dot */}
                                <div className="absolute -left-[31px] sm:-left-[39px] top-8 w-3 h-3 rounded-full bg-slate-950 border-2 border-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.8)]" />

                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-xs font-bold text-amber-400">{st.step}</span>
                                        <h3 className="text-xl font-semibold text-white">{st.title}</h3>
                                    </div>
                                    <p className="text-sm text-slate-400 font-light max-w-xl">{st.desc}</p>
                                </div>

                                <span className="self-start sm:self-center font-mono text-[10px] text-slate-300 uppercase tracking-widest bg-slate-800/80 border border-slate-700/60 px-3.5 py-1.5 rounded-full shrink-0">
                                    {st.time}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ================= PROOF STATS BAND ================= */}
                <section className="max-w-7xl mx-auto px-6 lg:px-12 my-36">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { num: "3–6 Month", label: "Average time to Page 1 momentum", icon: Clock },
                            { num: "100%", label: "Safe white-hat Google tactics", icon: ShieldCheck },
                            { num: "24/7", label: "Transparent client dashboard", icon: BarChart3 },
                            { num: "4.9/5", label: "Client satisfaction rating", icon: Award },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 text-center lg:text-left flex flex-col justify-between"
                            >
                                <stat.icon className="w-5 h-5 text-amber-400 mb-4 mx-auto lg:mx-0" />
                                <div>
                                    <div className="text-3xl sm:text-4xl font-bold font-mono text-white mb-1">
                                        {stat.num}
                                    </div>
                                    <p className="text-xs text-slate-400 font-light">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ================= FAQ ACCORDION ================= */}
                <section id="faq" className="max-w-3xl mx-auto px-6 my-36">
                    <div className="text-center mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 block">
                            Clear Answers
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                            Frequently asked questions.
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i;
                            return (
                                <div
                                    key={i}
                                    className="bg-slate-900/50 border border-slate-800/80 rounded-2xl overflow-hidden transition-colors"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 focus:outline-none"
                                    >
                                        <span className={`text-base font-medium ${isOpen ? "text-amber-400" : "text-white"}`}>
                                            {faq.q}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-400" : ""
                                                }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm text-slate-400 font-light leading-relaxed border-t border-slate-800/40 pt-4">
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

                {/* ================= HIGH IMPACT CTA BANNER ================= */}
                <section className="max-w-5xl mx-auto px-6 lg:px-12 my-28">
                    <div className="relative bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-950 border border-amber-500/30 rounded-[3rem] p-10 sm:p-16 text-center overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.1)]">
                        <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 text-amber-300 text-xs font-mono uppercase tracking-widest mb-6">
                            Ready To Scale Organic Growth?
                        </span>

                        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
                            Claim your complimentary SEO technical audit.
                        </h2>

                        <p className="text-slate-400 max-w-xl mx-auto text-base font-light mb-10 leading-relaxed">
                            We’ll analyze your current positions, technical bottlenecks, and revenue potential—no strings attached.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                            >
                                <span>Request Free Audit</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}