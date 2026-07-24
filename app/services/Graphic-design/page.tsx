"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
    ChevronDown, PenTool, Palette, Printer,
    MonitorPlay, Package, Presentation, ArrowRight,
    Layers, Image as ImageIcon, Type, MousePointer2,
    ArrowUpRight, CheckCircle2, Paintbrush
} from "lucide-react";

// Utility for clean tailwind class merging
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GraphicDesignPage() {
    const pageRef = useRef<HTMLDivElement>(null);
    const processContainerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // --- GSAP Scroll Animations ---
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.reveal-element').forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    }
                );
            });

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

    const faqs = [
        { q: "I don't have a logo or brand colors yet — can you still help?", a: "Yes. We can build your brand identity from the ground up — logo, typography, color palette, and brand guidelines — and then design everything else around it." },
        { q: "Do you design a set number of social media posts every month?", a: "Yes, we offer retainer packages for consistent monthly social media creatives, or we can handle isolated, one-off design sprints based on your campaign needs." },
        { q: "What if I don't like the first design concept?", a: "That's completely normal. We build in dedicated revision rounds to refine the design based on your precise feedback until it perfectly aligns with your vision." },
        { q: "Can you design for printing, not just digital?", a: "Absolutely. We design business cards, brochures, large-format banners, and packaging in CMYK, high-resolution, print-ready formats configured for professional press output." },
        { q: "Will I get the editable source files?", a: "Yes. Once the project is finalized, we hand over the raw source files (PSD, AI, Figma) so your team retains full ownership and editability for the future." },
    ];

    return (
        <div ref={pageRef} className="page-shell min-h-screen text-[var(--foreground)] overflow-hidden font-sans">
            <Navbar />

            {/* --- ULTRA-REFINED AMBIENT GLOWS --- */}
            {/* Opacity dropped to 2-3% to prevent "etching/glare" and maintain a premium, reliable dark studio feel */}
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[var(--brand)]/3 rounded-full blur-[140px] pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[var(--accent)]/3 rounded-full blur-[140px] pointer-events-none -z-10 mix-blend-screen" />

            <main className="pt-32 pb-24 sm:pt-40 relative z-10 w-full">

                {/* ===== HERO ===== */}
                <section className="container-width section-padding grid lg:grid-cols-12 gap-16 lg:gap-12 items-center min-h-[80vh]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 flex flex-col items-start z-10"
                    >
                        <div className="eyebrow mb-8 shadow-[0_0_20px_rgba(246,182,69,0.05)]">
                            Creative Studio
                        </div>

                        <h1 className="text-[3.5rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5.2rem] font-[var(--font-display)] font-semibold tracking-tighter leading-[1.05] mb-8 text-[var(--foreground)]">
                            <span className="block">Designs that make</span>
                            <span className="block">your brand look</span>
                            <span className="block text-[var(--brand)] drop-shadow-[0_0_15px_rgba(246,182,69,0.2)]">the same</span>
                            <span className="block text-[var(--brand)] drop-shadow-[0_0_15px_rgba(246,182,69,0.2)]">everywhere.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-[var(--ink-soft)] max-w-lg leading-relaxed font-light mb-10">
                            Social media posts, brand identity, print design, and advertisement creatives — all engineered to look like they belong to the same premium brand, wherever your customers look.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link href="/contact" className="group relative px-9 py-4.5 bg-[var(--brand)] text-[#05080e] rounded-full font-bold text-sm uppercase tracking-widest overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(246,182,69,0.25)]">
                                <span className="relative z-10 flex items-center gap-3">
                                    Get a Free Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Interactive Design Workspace Widget */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-6 w-full max-w-xl mx-auto lg:ml-auto relative"
                    >
                        <div className="glass-panel rounded-[1.5rem] p-5 shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative z-10 flex flex-col gap-0 border-t-[rgba(255,255,255,0.06)] overflow-hidden">

                            {/* Toolbar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[rgba(0,0,0,0.4)] rounded-t-xl">
                                <div className="flex items-center gap-3 font-mono text-[10px] text-[var(--ink-soft)] tracking-widest uppercase">
                                    <Paintbrush className="w-3.5 h-3.5 text-[var(--brand)]" /> post_final_v2.fig
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row bg-[var(--background)] rounded-b-xl border-x border-b border-[var(--border)] overflow-hidden">
                                {/* Canvas Area */}
                                <div className="flex-1 p-6 relative bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]">
                                    <div className="relative w-full aspect-square bg-[var(--surface-strong)] rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl flex flex-col justify-center items-center">
                                        {/* Background Layer */}
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                                            className="absolute inset-0 bg-gradient-to-br from-[#0f172a] to-[var(--background)]"
                                        />

                                        {/* Image/Shape Layer */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, type: "spring", stiffness: 100 }}
                                            className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--brand)]/10 blur-2xl rounded-full"
                                        />

                                        {/* Text Layers */}
                                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }} className="z-10 text-center">
                                            <div className="font-[var(--font-display)] text-3xl font-bold text-white mb-2 leading-tight">Summer<br />Collection</div>
                                            <div className="text-[10px] text-[var(--brand)] uppercase tracking-widest font-mono">Up to 40% Off</div>
                                        </motion.div>

                                        {/* Button Layer */}
                                        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2, duration: 0.8 }} className="z-10 mt-6 px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                                            Shop Now
                                        </motion.div>

                                        {/* Selection Outline Simulation */}
                                        <motion.div
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 0.3 }}
                                            className="absolute inset-4 border border-[var(--accent)] border-dashed rounded-lg pointer-events-none"
                                        >
                                            <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[var(--accent)]" />
                                            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[var(--accent)]" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Layers & Palette Panel */}
                                <div className="w-full sm:w-48 border-t sm:border-t-0 sm:border-l border-[var(--border)] bg-[rgba(255,255,255,0.01)] p-5 flex flex-col gap-6">
                                    <div>
                                        <div className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Layers className="w-3.5 h-3.5" /> Layers
                                        </div>
                                        <div className="space-y-3">
                                            {[
                                                { icon: <MousePointer2 className="w-3 h-3" />, label: "CTA Button", color: "text-[var(--accent)]" },
                                                { icon: <Type className="w-3 h-3" />, label: "Headline", color: "text-[var(--foreground)]" },
                                                { icon: <Type className="w-3 h-3" />, label: "Subtext", color: "text-[var(--foreground)]" },
                                                { icon: <ImageIcon className="w-3 h-3" />, label: "Background", color: "text-[var(--ink-soft)]" }
                                            ].map((layer, i) => (
                                                <div key={i} className="flex items-center gap-3 text-xs font-mono text-[var(--ink-soft)] hover:text-white transition-colors cursor-default">
                                                    <span className={layer.color}>{layer.icon}</span> {layer.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[10px] font-bold text-[var(--foreground)] uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Palette className="w-3.5 h-3.5" /> Palette
                                        </div>
                                        <div className="flex gap-2">
                                            {["bg-[var(--brand)]", "bg-[var(--accent)]", "bg-[#0f172a]", "bg-white"].map((color, i) => (
                                                <div key={i} className={cn("w-6 h-6 rounded-full border border-white/20 shadow-sm", color)} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* ===== PHILOSOPHY BENTO ===== */}
                <section className="reveal-element container-width section-padding py-28 mt-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="max-w-xl">
                            <div className="eyebrow mb-8">
                                Visual Authority
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-[var(--font-display)] font-semibold mb-8 leading-[1.15] tracking-tight text-[var(--foreground)]">
                                Graphic design is how your brand <span className="text-[var(--brand)]">looks to people.</span>
                            </h2>
                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed mb-6 font-light">
                                Every time someone sees your logo, an Instagram post, a brochure, or an ad banner, they're forming an opinion about your business — even before they read a single word.
                            </p>
                            <p className="text-[var(--ink-soft)] text-lg leading-relaxed font-light">
                                We handle all of it: ensuring your social media, printed materials, and ad creatives look like they are coming from one consistent, elite brand.
                            </p>
                        </div>

                        {/* Dark Bento Layout */}
                        <div className="glass-panel rounded-[2rem] p-8 sm:p-12 relative overflow-hidden">
                            <h3 className="text-[var(--foreground)] text-lg font-medium mb-8 relative z-10">Standard in every project:</h3>
                            <div className="grid sm:grid-cols-2 gap-5 relative z-10">
                                {[
                                    { icon: <CheckCircle2 className="w-5 h-5" />, label: "Your exact colors, fonts, and logo used strictly every time.", title: "On-Brand" },
                                    { icon: <MonitorPlay className="w-5 h-5" />, label: "Correctly sized for Instagram, LinkedIn, web, or print.", title: "Right Size" },
                                    { icon: <Layers className="w-5 h-5" />, label: "Source files handed over so your team can reuse them.", title: "Fully Editable" },
                                    { icon: <Printer className="w-5 h-5" />, label: "Correct CMYK profiles and format for professional printing.", title: "Print-Ready" }
                                ].map((stat, i) => (
                                    <div key={i} className="bg-[var(--surface-strong)] rounded-[1.5rem] p-7 border border-[var(--border)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)] hover:border-[var(--brand)]/40 group">
                                        <div className="text-[var(--brand)] mb-5 group-hover:scale-110 transition-transform origin-left">{stat.icon}</div>
                                        <div className="font-bold text-[var(--foreground)] text-base mb-2">{stat.title}</div>
                                        <div className="text-sm text-[var(--ink-soft)] leading-relaxed font-light">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== WHAT WE DESIGN GRID ===== */}
                <section id="what-we-design" className="reveal-element container-width section-padding py-28 relative border-t border-[rgba(255,255,255,0.03)]">
                    <div className="max-w-2xl mb-16">
                        <div className="eyebrow mb-6">
                            Deliverables
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold mb-6 tracking-tight leading-[1.1]">Every design your brand touches, in one place.</h2>
                        <p className="text-[var(--ink-soft)] text-lg font-light leading-relaxed">From your daily Instagram post to the sign outside your office, all of it built to look like the same authoritative brand.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <MonitorPlay />, title: "Social Media Design", desc: "Daily or weekly posts, carousels, and stories designed to stop the scroll and establish visual authority." },
                            { icon: <PenTool />, title: "Brand Identity", desc: "Logo engineering, color palettes, bespoke typography, and comprehensive brand guidelines." },
                            { icon: <Printer />, title: "Print Design", desc: "Business cards, corporate brochures, event flyers, and large-format banners configured for perfect press output." },
                            { icon: <MousePointer2 />, title: "Ad Creatives", desc: "High-converting banner ads and promotional assets for Google and Meta campaigns built to drive action." },
                            { icon: <Package />, title: "Packaging Design", desc: "Retail-ready product packaging and labels that look premium on the shelf and stand out from competitors." },
                            { icon: <Presentation />, title: "Pitch Decks", desc: "Clean, persuasive slide architectures for investor pitches, B2B proposals, and internal corporate presentations." }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -6 }}
                                className="group bg-[var(--surface-strong)] border border-[var(--border)] rounded-[1.5rem] p-8 hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--brand)]/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] text-[var(--brand)] flex items-center justify-center mb-6 group-hover:bg-[var(--brand)]/10 transition-all duration-300 shadow-inner">
                                    {React.cloneElement(card.icon as React.ReactElement<any>, { size: 20 })}
                                </div>
                                <h3 className="text-xl font-[var(--font-display)] font-semibold mb-3 text-[var(--foreground)] tracking-tight">{card.title}</h3>
                                <p className="text-[var(--ink-soft)] text-sm font-light leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ===== PROCESS TIMELINE ===== */}
                <section id="process" className="reveal-element container-width section-padding py-28 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="text-center mb-24">
                        <div className="eyebrow mb-6 mx-auto">Workflow</div>
                        <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold mb-6 tracking-tight">From brief to final files.</h2>
                        <p className="text-[var(--ink-soft)] text-lg font-light max-w-2xl mx-auto leading-relaxed">You explain what you need, we design, you review — no confusing back and forth. Just clean, professional execution.</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto" ref={processContainerRef}>
                        <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-px bg-[rgba(255,255,255,0.06)]" />

                        <div
                            ref={timelineRef}
                            className="absolute left-[31px] md:left-1/2 top-0 w-[2px] -translate-x-px bg-gradient-to-b from-[var(--brand)] to-[var(--brand-deep)] shadow-[0_0_15px_var(--brand)] origin-top"
                        />

                        <div className="space-y-16 relative z-10">
                            {[
                                { step: "01", title: "Understanding Your Brand", desc: "We analyze your existing brand (or start fresh), understanding your business, target demographic, and the specific goal of the design.", time: "Day 1" },
                                { step: "02", title: "First Concept", desc: "We engineer an initial design concept — establishing layout, visual hierarchy, and style — and present it to you before pushing further.", time: "Day 2-3" },
                                { step: "03", title: "Feedback & Revisions", desc: "You provide precise feedback on structural or aesthetic elements, and we refine the creative until it aligns perfectly with your vision.", time: "Day 3-4" },
                                { step: "04", title: "Final Delivery", desc: "Once approved, we package and deliver the final assets in every required format (PNG, JPG, PDF) alongside the raw source files.", time: "Day 5" }
                            ].map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full border-[4px] border-[var(--background)] bg-[var(--surface-strong)] shrink-0 md:order-1 md:group-odd:-ml-10 md:group-even:-mr-10 relative z-10 transition-colors group-hover:border-[var(--brand)]/30">
                                        <span className="font-[var(--font-display)] font-bold text-lg text-[var(--brand)]">{item.step}</span>
                                    </div>

                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] glass-panel p-8 rounded-[1.5rem] hover:bg-[rgba(255,255,255,0.02)] hover:border-[var(--brand)]/30 transition-all duration-300">
                                        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3 mb-4">
                                            <h3 className="text-xl font-[var(--font-display)] font-semibold tracking-tight text-[var(--foreground)]">{item.title}</h3>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-soft)] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-full whitespace-nowrap self-start">{item.time}</span>
                                        </div>
                                        <p className="text-[var(--ink-soft)] font-light text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section id="faq" className="reveal-element container-width section-padding py-28 border-t border-[rgba(255,255,255,0.03)]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl sm:text-5xl font-[var(--font-display)] font-semibold tracking-tight">Questions people usually ask.</h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => {
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

                {/* ===== CTA REDIRECT ===== */}
                <section className="reveal-element container-width section-padding py-32 sm:py-40 text-center border-t border-[rgba(255,255,255,0.03)]">
                    <h2 className="text-4xl sm:text-6xl lg:text-[5rem] font-[var(--font-display)] font-semibold tracking-tighter leading-[1.05] mb-8">
                        Ready for a visual<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--brand)] to-[var(--brand-deep)] drop-shadow-[0_0_30px_rgba(246,182,69,0.2)]">upgrade?</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--ink-soft)] font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                        Tell us what you need designed. We'll make it look definitively yours.
                    </p>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Get a Free Quote <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--foreground)] via-[var(--brand)] to-[var(--foreground)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>
                </section>

            </main>
        </div>
    );
}