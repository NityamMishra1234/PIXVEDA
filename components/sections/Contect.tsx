"use client";

import Reveal from "@/components/animations/Reveal";

const contactCards = [
    {
        label: "Email",
        value: "nityam1111@gmail.com",
        href: "mailto:nityam1111@gmail.com",
        helper: "Best for project discussions, audits, and partnerships.",
    },
    {
        label: "Phone",
        value: "Available on request",
        href: "mailto:nityam1111@gmail.com?subject=PIXVEDA%20Call%20Request",
        helper: "Send an email and we can schedule a direct call quickly.",
    },
    {
        label: "LinkedIn",
        value: "Share profile link",
        href: "mailto:nityam1111@gmail.com?subject=PIXVEDA%20LinkedIn%20Connect",
        helper: "Use this CTA for now, then replace it with the exact LinkedIn URL.",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="section-padding py-16 pb-24 sm:py-24 sm:pb-28">
            <div className="container-width mx-auto max-w-7xl">
                <Reveal className="relative overflow-hidden rounded-[2rem] border border-[rgba(246,182,69,0.14)] bg-[rgba(7,11,18,0.94)] p-5 text-[#f8f1e6] shadow-[0_40px_100px_rgba(2,6,23,0.38)] sm:rounded-[2.5rem] sm:p-12 lg:p-16">

                    {/* Ambient Inner Glows for Depth */}
                    <div className="pointer-events-none absolute -right-[20%] -top-[20%] h-[600px] w-[600px] rounded-full bg-[#f6b645]/10 blur-[120px]" />
                    <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#2563eb]/12 blur-[100px]" />

                    <div className="relative z-10 grid gap-10 sm:gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-center">

                        {/* Left Side: Copy & CTA */}
                        <div className="flex flex-col items-start">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-[#f6b645]" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f8f1e6]">
                                    Let&apos;s Build Market Gravity
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-3xl text-balance font-[var(--font-display)] text-3xl font-medium leading-[1.08] tracking-[-0.04em] sm:mt-8 sm:text-5xl lg:text-6xl">
                                If your brand is ready to look sharper, convert better, and grow
                                faster, PIXVEDA is ready to lead the move.
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:mt-6 sm:text-lg">
                                Reach out for launch strategy, marketing systems, brand
                                positioning, high-conversion websites, and growth campaigns that
                                actually feel premium. The goal is simple: make your company
                                impossible to ignore.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                                <a
                                    href={`mailto:nityam1111@gmail.com?subject=Growth%20Audit%20Request%20-%20Pixveda&body=Hi%20Pixveda%20Team,%0A%0AI%20would%20like%20to%20book%20a%20growth%20audit.%0A%0AHere%20are%20my%20details:%0A-Name:%0A-Company:%0A-Website:%0A%0AThanks`}
                                    className="inline-flex h-12 w-full items-center justify-center rounded-full 
  bg-gradient-to-r from-[var(--accent-deep)] to-[var(--accent)] px-8 
  text-xs font-bold uppercase tracking-[0.18em] text-white 
  transition-all duration-300 hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] 
  overflow-hidden group sm:h-14 sm:w-auto sm:hover:scale-[1.05]"
                                >
                                    <span className="relative z-10">Email PIXVEDA</span>

                                    {/* Shine */}
                                    <span className="absolute inset-0 overflow-hidden rounded-full">
                                        <span className="absolute -left-full top-0 h-full w-full 
    bg-gradient-to-r from-transparent via-white/40 to-transparent 
    group-hover:translate-x-full transition-transform duration-700" />
                                    </span>
                                </a>
                                <a
                                    href="#home"
                                    className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/15 bg-transparent px-8 text-xs font-bold uppercase tracking-[0.18em] text-[#f8f1e6] transition-all duration-300 hover:border-white/30 hover:bg-white/5 sm:h-14 sm:w-auto"
                                >
                                    Back to Top
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Interactive Cards */}
                        <div className="relative flex flex-col gap-4 rounded-[1.6rem] border border-white/10 bg-black/20 p-4 backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
                            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
                                Direct Lines
                            </p>

                            <div className="grid gap-3">
                                {contactCards.map((card) => (
                                    <a
                                        key={card.label}
                                        href={card.href}
                                        className="group relative flex flex-col justify-center overflow-hidden rounded-[1.25rem] border border-white/5 bg-white/5 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-white/15 hover:bg-white/10 hover:shadow-lg"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f6b645] transition-colors group-hover:text-[#f8f1e6]">
                                                {card.label}
                                            </p>

                                            {/* Animated Arrow SVG */}
                                            <svg
                                                className="h-5 w-5 -translate-x-4 opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:opacity-100 text-[#f6b645]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                        <p className="mt-2 text-xl font-medium tracking-[-0.02em] text-white">
                                            {card.value}
                                        </p>
                                        <p className="mt-2 text-sm leading-relaxed text-white/50 transition-colors group-hover:text-white/70">
                                            {card.helper}
                                        </p>
                                    </a>
                                ))}
                            </div>

                            {/* Response Promise Footer inside the card container */}
                            <div className="mt-4 rounded-[1.25rem] border border-white/5 bg-transparent p-5">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                                    Response Promise
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-white/50">
                                    Founder-led replies, clear next steps, and a fast turnaround for
                                    serious business inquiries.
                                </p>
                            </div>
                        </div>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}
