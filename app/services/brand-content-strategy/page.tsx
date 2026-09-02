"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    ArrowRight, ArrowUpRight, BookOpen, MessageSquare,
    Compass, CheckCircle2, TrendingUp, ShieldCheck, Play, ArrowDownRight,
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

const deliverables = [
    {
        id: 0,
        tag: "positioning",
        title: "Positioning & Messaging Frameworks",
        desc: "We define exactly where you sit in the market and formulate the core arguments that prove you belong there. No more generic 'we help businesses grow' copy.",
        icon: <Compass className="w-6 h-6" />,
        theme: 0,
    },
    {
        id: 1,
        tag: "the offer",
        title: "Offer Refinement for Sales",
        desc: "Marketing can't fix a confusing offer. We tighten your product language so your sales team and your marketing campaigns are finally telling the exact same story.",
        icon: <MessageSquare className="w-6 h-6" />,
        theme: 1,
    },
    {
        id: 2,
        tag: "content engine",
        title: "Content Pillars & Channel Strategy",
        desc: "We build the editorial engine. You get distinct content pillars mapped to organic, paid, and owned channels to ensure your thought leadership actually generates demand.",
        icon: <BookOpen className="w-6 h-6" />,
        theme: 2,
    },
];

/* Alternating card looks for the stacked deck — dark / brand / light, so the
   deck reads as a set of collectible cards instead of three stock photos. */
const CARD_THEMES = [
    { card: "bg-[var(--foreground)]", fg: "text-[var(--background)]", sub: "text-[var(--background)]/55", ghost: "text-[var(--background)]/[0.06]", chip: "bg-[var(--brand)] text-[#1a1102]", iconWrap: "bg-[var(--background)]/10 text-[var(--brand)]" },
    { card: "bg-[var(--brand)]", fg: "text-[#1a1102]", sub: "text-[#1a1102]/60", ghost: "text-[#1a1102]/[0.08]", chip: "bg-[var(--foreground)] text-[var(--background)]", iconWrap: "bg-[#1a1102]/10 text-[#1a1102]" },
    { card: "bg-[var(--surface-strong)] border border-[var(--border)]", fg: "text-[var(--foreground)]", sub: "text-[var(--ink-soft)]", ghost: "text-[var(--foreground)]/[0.05]", chip: "bg-[var(--brand)] text-[#1a1102]", iconWrap: "bg-[var(--background)] border border-[var(--border)] text-[var(--brand)]" },
];

/* Resting fan-out position for each card in the deck (index 0 = front). */
const BASE_TRANSFORMS = [
    { rotate: 0, y: 0, scale: 1 },
    { rotate: -4, y: 22, scale: 0.95 },
    { rotate: 3, y: 42, scale: 0.9 },
];
const ACTIVE_TRANSFORM = { rotate: 0, y: -10, scale: 1.02 };

const HERO_MARKS = [
    { label: "Positioning clarity", desc: "One argument, repeated on purpose" },
    { label: "Sales alignment", desc: "Marketing and sales, same script" },
    { label: "Category ownership", desc: "The name people say first" },
];

/* Swap this for your own hosted reel — see the comment near the <video> tag. */
const HERO_VIDEO_SRC = "/videos/brand-strategy-reel.mp4";
const HERO_POSTER = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600";

/* ------------------------------------------------------------------ */
/*  Hero background video, with graceful degradation                   */
/* ------------------------------------------------------------------ */

function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoReady, setVideoReady] = useState(false);
    const [videoFailed, setVideoFailed] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mq.matches);
        const onChange = () => setReduceMotion(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    const showVideo = !reduceMotion && !videoFailed;

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-[var(--background)]">
            {/* Poster / fallback — always present underneath so there is never a blank frame */}
            <img
                src={HERO_POSTER}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                className={cn(
                    "absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000",
                    showVideo && videoReady ? "opacity-0" : "opacity-100"
                )}
            />

            {showVideo && (
                <video
                    ref={videoRef}
                    className={cn(
                        "absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000",
                        videoReady ? "opacity-100" : "opacity-0"
                    )}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={HERO_POSTER}
                    onCanPlay={() => setVideoReady(true)}
                    onError={() => setVideoFailed(true)}
                >
                    {/* Point this at your own hosted file (mp4, ideally < 6MB, 1080p is plenty
                        for a background loop). If it 404s or fails to decode, the poster image
                        above stays visible instead of showing a broken player. */}
                    <source src={HERO_VIDEO_SRC} type="video/mp4" />
                </video>
            )}

            {/* Legibility scrim — darkens + adds brand tint so headline text holds up over any footage */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/70 to-[var(--background)]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)]/90 via-[var(--background)]/40 to-transparent" />
            <div className="absolute inset-0 bg-[var(--brand)]/[0.04] mix-blend-overlay" />
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Stacked deck of "cards" standing in for the old stock-photo panel  */
/* ------------------------------------------------------------------ */

function DeliverableDeck() {
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // Resting state on mount: card 0 up front and "active," the rest fanned behind it.
        panelRefs.current.forEach((el, i) => {
            if (!el) return;
            const t = i === 0 ? ACTIVE_TRANSFORM : BASE_TRANSFORMS[i];
            gsap.set(el, { rotate: t.rotate, y: t.y, scale: t.scale, zIndex: i === 0 ? 40 : 30 - i, opacity: 1 });
        });

        if (prefersReducedMotion) return;

        const triggers = deliverables.map((_, i) =>
            ScrollTrigger.create({
                trigger: `#deliverable-${i}`,
                start: "top center",
                end: "bottom center",
                onToggle: (self) => {
                    const el = panelRefs.current[i];
                    if (!el) return;
                    const t = self.isActive ? ACTIVE_TRANSFORM : BASE_TRANSFORMS[i];
                    gsap.to(el, {
                        rotate: t.rotate,
                        y: t.y,
                        scale: t.scale,
                        zIndex: self.isActive ? 40 : 30 - i,
                        duration: 0.7,
                        ease: "power3.out",
                    });
                },
            })
        );

        return () => triggers.forEach((t) => t.kill());
    }, []);

    return (
        <div className="hidden lg:block sticky top-32 h-[600px] w-full">
            {deliverables.map((item, i) => {
                const theme = CARD_THEMES[item.theme];
                return (
                    <div
                        key={item.id}
                        ref={(el) => { panelRefs.current[i] = el; }}
                        className={cn(
                            "deck-panel absolute inset-0 w-full h-full rounded-[2.25rem] p-9 flex flex-col justify-between overflow-hidden shadow-[0_40px_90px_rgba(0,0,0,0.45)]",
                            theme.card
                        )}
                    >
                        {/* Oversized outline numeral — the signature "sticker deck" touch */}
                        <span
                            className={cn("absolute -right-4 -top-6 font-[var(--font-display)] font-bold text-[15rem] leading-none select-none pointer-events-none", theme.ghost)}
                            style={{ WebkitTextStroke: "2px currentColor" } as React.CSSProperties}
                        >
                            0{i + 1}
                        </span>

                        <div className="relative z-10 flex items-center justify-between">
                            <span className={cn("inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full -rotate-2", theme.chip)}>
                                drop 0{i + 1} / {item.tag}
                            </span>
                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", theme.iconWrap)}>
                                {item.icon}
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className={cn("text-3xl font-[var(--font-display)] font-bold tracking-tight mb-4 leading-[1.1]", theme.fg)}>
                                {item.title}
                            </h3>
                            <p className={cn("text-sm font-light leading-relaxed max-w-sm", theme.sub)}>
                                {item.desc}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function BrandStrategyPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    // --- GSAP Scroll Animations ---
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const ctx = gsap.context(() => {
            if (prefersReducedMotion) {
                gsap.set(".reveal-element", { opacity: 1, y: 0 });
                return;
            }

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
        }, pageRef);

        // Recalculate trigger positions once fonts/images have settled, so the sticky
        // section doesn't measure against a shorter, not-yet-loaded page.
        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);

        return () => {
            ctx.revert();
            window.removeEventListener("load", onLoad);
        };
    }, []);

    return (
        <div ref={pageRef} className="page-shell min-h-screen text-[var(--foreground)] overflow-hidden font-sans">
            <Navbar />

            {/* --- EDITORIAL AMBIENT GLOWS --- */}
            <div className="fixed top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[var(--brand)]/5 rounded-full blur-[160px] pointer-events-none -z-10 mix-blend-screen" />

            <main className="relative z-10 w-full">

                {/* ===== HERO — FULL-BLEED VIDEO BACKGROUND ===== */}
                <section className="relative min-h-[94vh] flex items-end pt-40 pb-20 sm:pb-28">
                    <HeroVideo />

                    <div className="container-width section-padding w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-3xl flex flex-col items-start z-20"
                        >
                            <div className="eyebrow mb-8 inline-flex items-center gap-2">
                                <Play className="w-3 h-3" />
                                Brand &amp; Content Strategy
                            </div>

                            <h1 className="text-[3.2rem] sm:text-6xl lg:text-[4.6rem] xl:text-[5.4rem] font-[var(--font-display)] font-semibold tracking-tighter leading-[1.05] mb-8 text-[var(--foreground)]">
                                <span className="block">Sound</span>
                                <span className="block text-[var(--brand)] drop-shadow-[0_0_20px_rgba(246,182,69,0.25)]">category-leading,</span>
                                <span className="block">not interchangeable.</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-xl leading-relaxed font-light mb-10">
                                We sharpen the narrative, offer language, and content direction so every
                                touchpoint sounds like the same confident company instead of disconnected
                                marketing tactics.
                            </p>

                            <div className="flex items-center gap-6 mb-16">
                                <Link href="/contact" className="group relative px-9 py-4.5 bg-[var(--brand)] text-[#05080e] rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(246,182,69,0.3)]">
                                    <span className="relative z-10 flex items-center gap-3">
                                        Refine Your Brand <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </Link>
                            </div>

                            {/* Credibility strip — sits inside the video panel, grounded on the scrim */}
                            <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-[var(--border)] pt-8 w-full max-w-2xl">
                                {HERO_MARKS.map((m, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="font-[var(--font-display)] font-semibold text-base sm:text-lg text-[var(--foreground)] leading-tight">{m.label}</span>
                                        <span className="text-xs sm:text-sm text-[var(--ink-soft)] font-light mt-1 leading-snug">{m.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== THE PROBLEM ===== */}
                <section className="reveal-element container-width section-padding py-28 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold mb-6 tracking-tight leading-[1.1]">
                                The danger of <span className="text-[var(--ink-soft)] line-through decoration-[var(--accent)] decoration-4">disconnected</span> tactics.
                            </h2>
                        </div>
                        <div>
                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed font-light mb-6">
                                Startups often run ads, write blogs, and send emails that sound like they
                                were written by entirely different companies. This creates cognitive
                                friction for the buyer.
                            </p>
                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed font-light">
                                A messaging framework ensures that whether a prospect is reading a
                                LinkedIn post, looking at a Google Ad, or talking to your sales team, the
                                argument for why you are the best choice remains ruthlessly consistent.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== STICKY EDITORIAL SCROLL (DELIVERABLES) ===== */}
                <section className="relative container-width section-padding py-32 border-t border-[rgba(255,255,255,0.03)]">
                    {/* Marquee ticker — quick burst of energy above the deck */}
                    <div className="reveal-element overflow-hidden mb-16 border-y border-[var(--border)] py-3 -mx-6 sm:mx-0">
                        <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite] gap-8">
                            {Array(2).fill(["positioning", "messaging", "the offer", "content pillars", "channel strategy", "the narrative"]).flat().map((w, i) => (
                                <span key={i} className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] flex items-center gap-8">
                                    {w} <span className="text-[var(--brand)]">✦</span>
                                </span>
                            ))}
                        </div>
                    </div>
                    <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative items-start">

                        {/* Sticky Left Side — stacked "card deck" instead of stock photography */}
                        <DeliverableDeck />

                        {/* Scrolling Right Side (Content) */}
                        <div className="pt-10 lg:pt-[30vh] pb-10 lg:pb-[30vh]">
                            <div className="eyebrow mb-8">
                                Deliverables
                            </div>
                            <h2 className="text-4xl sm:text-6xl font-[var(--font-display)] font-semibold tracking-tight mb-20 leading-[1.05]">
                                The Playbook.
                            </h2>

                            <div className="space-y-40">
                                {deliverables.map((item, i) => {
                                    return (
                                        <div key={item.id} id={`deliverable-${i}`} className="reveal-element">
                                            <div className="flex items-center gap-4 mb-6 lg:hidden">
                                                <div className="w-12 h-12 rounded-xl bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--brand)] flex items-center justify-center shadow-inner">
                                                    {item.icon}
                                                </div>
                                                <div className="font-mono text-xs uppercase tracking-widest text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1 rounded-full border border-[var(--brand)]/20 -rotate-2">
                                                    drop 0{i + 1} / {item.tag}
                                                </div>
                                            </div>
                                            <div className="hidden lg:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1.5 rounded-full border border-[var(--brand)]/20 -rotate-2 mb-6">
                                                <ArrowDownRight className="w-3 h-3" /> drop 0{i + 1} / {item.tag}
                                            </div>
                                            <h3 className="text-3xl font-[var(--font-display)] font-bold mb-6 text-[var(--foreground)] tracking-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed font-light">
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== OUTCOMES BENTO ===== */}
                <section className="reveal-element container-width section-padding py-32 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="text-center mb-20">
                        <div className="eyebrow mb-6 mx-auto">Outcomes</div>
                        <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold tracking-tight">What happens when you get it right.</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <TrendingUp className="w-6 h-6" />, title: "A Clearer Market Message", desc: "Your prospects immediately understand exactly what you do and why it's superior to the alternative." },
                            { icon: <ShieldCheck className="w-6 h-6" />, title: "Higher Buyer Trust", desc: "When your language is confident and specific, sales conversations naturally shift from skeptical to collaborative." },
                            { icon: <CheckCircle2 className="w-6 h-6" />, title: "Multi-Channel Consistency", desc: "Your website copy, ad creatives, and sales emails finally sound like they belong to the exact same premium brand." },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                className="group bg-[var(--surface-strong)] border border-[var(--border)] rounded-[2rem] p-10 hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--brand)]/30 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[var(--border)] text-[var(--brand)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[var(--brand)]/10 transition-all duration-500 shadow-inner">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-[var(--font-display)] font-bold mb-4 text-[var(--foreground)] tracking-tight">{card.title}</h3>
                                <p className="text-[var(--ink-soft)] font-light leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== MASSIVE CTA REDIRECT ===== */}
                <section className="reveal-element container-width section-padding py-32 sm:py-40 text-center border-t border-[rgba(255,255,255,0.03)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,182,69,0.1)_0%,transparent_60%)] pointer-events-none -z-10" />

                    <h2 className="text-4xl sm:text-6xl lg:text-[5rem] font-[var(--font-display)] font-semibold tracking-tighter leading-[1.05] mb-8">
                        Ready to command<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-deep)] drop-shadow-[0_0_30px_rgba(246,182,69,0.2)]">your category?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Stop sounding like everyone else. Let&apos;s build a brand narrative that actually generates demand.
                    </p>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start Your Strategy <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)] via-[var(--brand)] to-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </section>

            </main>
        </div>
    );
}